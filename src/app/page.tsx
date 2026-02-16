'use client';

import { ProfilePhoto } from '@/components/profile-photo';
import { ScrollEffects } from '@/components/scroll-effects';
import {
  defaultLocale,
  localeOptions,
  portfolioDataByLocale,
  themeOptions,
  type Locale,
  type ThemePreference,
} from '@/data/portfolio-data';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';

const LOCALE_STORAGE_KEY = 'gt-locale';
const THEME_STORAGE_KEY = 'gt-theme';
const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const TABLET_MIN_WIDTH = 760;
const DESKTOP_MIN_WIDTH = 1200;
const MOBILE_VISIBLE_CARDS = 1;
const TABLET_VISIBLE_CARDS = 2;
const DESKTOP_VISIBLE_CARDS = 3;
const IMPACT_AUTOPLAY_MS = 6400;
const RECOMMENDATION_AUTOPLAY_MS = 6500;
const CAROUSEL_SLIDE_OFFSET_PERCENTAGE = 100;

const revealStyle = (delay: number) =>
  ({ '--reveal-delay': `${delay}ms` }) as CSSProperties;

const sectionIntroClass = 'max-w-2xl space-y-4';

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase() ?? '')
    .join('');

const getSystemTheme = () =>
  window.matchMedia(THEME_MEDIA_QUERY).matches ? 'dark' : 'light';

const subscribeViewport = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('resize', callback);
  };
};

const getViewportSnapshot = () =>
  typeof window === 'undefined' ? 0 : window.innerWidth;

const getServerViewportSnapshot = () => 0;

const getVisibleCards = (viewportWidth: number) => {
  if (viewportWidth >= DESKTOP_MIN_WIDTH) {
    return DESKTOP_VISIBLE_CARDS;
  }

  if (viewportWidth >= TABLET_MIN_WIDTH) {
    return TABLET_VISIBLE_CARDS;
  }

  return MOBILE_VISIBLE_CARDS;
};

const CarouselArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='carousel-arrow-icon'
    aria-hidden
  >
    {direction === 'left' ? (
      <path d='M15 6L9 12L15 18' />
    ) : (
      <path d='M9 6L15 12L9 18' />
    )}
  </svg>
);

const readInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const rootLang = document.documentElement.lang;
  if (rootLang === 'pt-BR' || rootLang === 'en-US') {
    return rootLang;
  }

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (storedLocale === 'pt-BR' || storedLocale === 'en-US') {
    return storedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('pt')
    ? 'pt-BR'
    : 'en-US';
};

const readInitialThemePreference = (): ThemePreference => {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (
    storedTheme === 'light' ||
    storedTheme === 'dark' ||
    storedTheme === 'system'
  ) {
    return storedTheme;
  }

  const rootPreference = document.documentElement.dataset.themePreference;
  if (
    rootPreference === 'light' ||
    rootPreference === 'dark' ||
    rootPreference === 'system'
  ) {
    return rootPreference;
  }

  return 'system';
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>(readInitialLocale);
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    readInitialThemePreference,
  );
  const [impactIndex, setImpactIndex] = useState(0);
  const [recommendationIndex, setRecommendationIndex] = useState(0);
  const viewportWidth = useSyncExternalStore(
    subscribeViewport,
    getViewportSnapshot,
    getServerViewportSnapshot,
  );

  const content =
    portfolioDataByLocale[locale] ?? portfolioDataByLocale[defaultLocale];
  const visibleCards = getVisibleCards(viewportWidth);
  const impactCount = content.impact.length;
  const impactVisibleCards = Math.min(
    visibleCards,
    Math.max(impactCount, MOBILE_VISIBLE_CARDS),
  );
  const impactMaxIndex = Math.max(impactCount - impactVisibleCards, 0);
  const hasImpactCarousel = impactMaxIndex > 0;
  const activeImpactIndex = Math.min(impactIndex, impactMaxIndex);
  const impactStepPercentage =
    CAROUSEL_SLIDE_OFFSET_PERCENTAGE / impactVisibleCards;
  const impactDotIndexes =
    impactCount === 0
      ? []
      : Array.from({ length: impactMaxIndex + 1 }, (_, index) => index);
  const recommendationCount = content.recommendations.length;
  const recommendationVisibleCards = Math.min(
    visibleCards,
    Math.max(recommendationCount, MOBILE_VISIBLE_CARDS),
  );
  const recommendationMaxIndex = Math.max(
    recommendationCount - recommendationVisibleCards,
    0,
  );
  const hasRecommendationCarousel = recommendationMaxIndex > 0;
  const activeRecommendationIndex = Math.min(
    recommendationIndex,
    recommendationMaxIndex,
  );
  const recommendationStepPercentage =
    CAROUSEL_SLIDE_OFFSET_PERCENTAGE / recommendationVisibleCards;
  const recommendationDotIndexes =
    recommendationCount === 0
      ? []
      : Array.from({ length: recommendationMaxIndex + 1 }, (_, index) => index);

  const carouselControls =
    locale === 'pt-BR'
      ? {
          previousImpact: 'Highlight anterior',
          nextImpact: 'Próximo highlight',
          goToImpact: 'Ir para highlight',
          previousRecommendation: 'Indicação anterior',
          nextRecommendation: 'Próxima indicação',
          goToRecommendation: 'Ir para indicação',
        }
      : {
          previousImpact: 'Previous highlight',
          nextImpact: 'Next highlight',
          goToImpact: 'Go to highlight',
          previousRecommendation: 'Previous recommendation',
          nextRecommendation: 'Next recommendation',
          goToRecommendation: 'Go to recommendation',
        };

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(THEME_MEDIA_QUERY);

    const applyTheme = () => {
      const resolvedTheme =
        themePreference === 'system' ? getSystemTheme() : themePreference;
      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.dataset.themePreference = themePreference;
    };

    applyTheme();
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);

    mediaQuery.addEventListener('change', applyTheme);

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  }, [themePreference]);

  useEffect(() => {
    if (!hasImpactCarousel) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setImpactIndex((currentIndex) => {
        const boundedIndex = Math.min(currentIndex, impactMaxIndex);
        return boundedIndex >= impactMaxIndex ? 0 : boundedIndex + 1;
      });
    }, IMPACT_AUTOPLAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasImpactCarousel, impactMaxIndex]);

  useEffect(() => {
    if (!hasRecommendationCarousel) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setRecommendationIndex((currentIndex) => {
        const boundedIndex = Math.min(currentIndex, recommendationMaxIndex);
        return boundedIndex >= recommendationMaxIndex ? 0 : boundedIndex + 1;
      });
    }, RECOMMENDATION_AUTOPLAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasRecommendationCarousel, recommendationMaxIndex]);

  const navigationLinks = useMemo(
    () => [
      { href: '#impact', label: content.labels.navigation.impact },
      {
        href: '#recommendations',
        label: content.labels.navigation.recommendations,
      },
      { href: '#education', label: content.labels.navigation.education },
      { href: '#ai', label: content.labels.navigation.ai },
      { href: '#experience', label: content.labels.navigation.experience },
      { href: '#skills', label: content.labels.navigation.skills },
      { href: '#contact', label: content.labels.navigation.contact },
    ],
    [content.labels.navigation],
  );

  return (
    <>
      <ScrollEffects key={locale} />

      <main className='relative overflow-x-clip pb-20'>
        <div aria-hidden className='hero-orb hero-orb-left' />
        <div aria-hidden className='hero-orb hero-orb-right' />
        <div aria-hidden className='ambient-grid' />

        <header className='sticky top-0 z-40'>
          <div className='container pt-6'>
            <div className='glass-nav' data-reveal style={revealStyle(80)}>
              <a href='#top' className='brand-mark display-font'>
                GT
              </a>

              <nav className='hidden items-center gap-6 xl:flex'>
                {navigationLinks.map((item) => (
                  <a key={item.href} href={item.href} className='nav-link'>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className='nav-controls'>
                <div
                  className='control-group'
                  role='group'
                  aria-label={content.labels.controls.languageAriaLabel}
                >
                  {localeOptions.map((option) => (
                    <button
                      key={option.value}
                      type='button'
                      className={`control-button ${locale === option.value ? 'is-active' : ''}`}
                      onClick={() => {
                        setLocale(option.value);
                      }}
                    >
                      {option.short}
                    </button>
                  ))}
                </div>

                <div
                  className='control-group'
                  role='group'
                  aria-label={content.labels.controls.themeAriaLabel}
                >
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      type='button'
                      className={`control-button ${themePreference === option.value ? 'is-active' : ''}`}
                      onClick={() => {
                        setThemePreference(option.value);
                      }}
                    >
                      {option.value === 'system' &&
                        content.labels.controls.theme.system}
                      {option.value === 'light' &&
                        content.labels.controls.theme.light}
                      {option.value === 'dark' &&
                        content.labels.controls.theme.dark}
                    </button>
                  ))}
                </div>

                <a
                  href='/resume/cv.pdf'
                  className='nav-cta'
                  target='_blank'
                  rel='noreferrer'
                >
                  {content.labels.navigation.resume}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id='top' className='pt-10 md:pt-16'>
          <div className='container'>
            <div className='grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
              <div className='space-y-8'>
                <div className='space-y-6' data-reveal style={revealStyle(170)}>
                  <h1 className='display-font text-4xl leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-7xl'>
                    <span className='text-gradient'>
                      {content.labels.hero.headlineAccent}
                    </span>
                    <br />
                    {content.labels.hero.headlineBase}
                  </h1>
                  <p className='max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg'>
                    {content.person.tagline}
                  </p>
                </div>

                <p
                  className='max-w-2xl text-sm leading-relaxed text-[var(--text-subtle)] sm:text-base'
                  data-reveal
                  style={revealStyle(230)}
                >
                  {content.summary}
                </p>

                <div
                  className='flex flex-wrap gap-2 sm:gap-4'
                  data-reveal
                  style={revealStyle(290)}
                >
                  <a href='#contact' className='primary-cta'>
                    {content.labels.hero.primaryCta}
                  </a>
                  <a
                    href='/resume/cv.pdf'
                    className='secondary-cta'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {content.labels.hero.secondaryCta}
                  </a>
                </div>

                <div
                  className='flex flex-wrap gap-2 sm:gap-3'
                  data-reveal
                  style={revealStyle(340)}
                >
                  <a
                    href={content.contacts.github}
                    target='_blank'
                    rel='noreferrer'
                    className='chip-link'
                  >
                    GitHub
                  </a>
                  <a
                    href={content.contacts.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='chip-link'
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${content.contacts.email}`}
                    className='chip-link'
                  >
                    Email
                  </a>
                </div>
              </div>

              <div
                className='relative grid gap-5 justify-items-center'
                data-reveal
                style={revealStyle(170)}
              >
                <p className='eyebrow'>
                  {content.person.role} • {content.person.location}
                </p>

                <div className='relative w-full'>
                  <div className='photo-glow' aria-hidden />
                  <ProfilePhoto />
                </div>
              </div>
            </div>

            <div
              className='metric-grid mt-16'
              data-reveal
              style={revealStyle(160)}
            >
              {content.metrics.map((metric, index) => (
                <article
                  key={metric.label}
                  className='metric-card'
                  style={revealStyle(index * 90)}
                >
                  <p className='metric-value display-font'>{metric.value}</p>
                  <p className='metric-label'>{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='impact'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>{content.labels.sections.impactTag}</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.impactTitle}
              </h2>
            </div>

            <div className='mt-12'>
              <div
                className='impact-carousel-shell'
                data-reveal
                style={
                  {
                    ...revealStyle(170),
                    '--carousel-visible-cards': impactVisibleCards,
                  } as CSSProperties
                }
              >
                <div className='impact-carousel-viewport'>
                  <div
                    className='impact-carousel-track'
                    style={{
                      transform: `translateX(-${activeImpactIndex * impactStepPercentage}%)`,
                    }}
                  >
                    {content.impact.map((item) => (
                      <article key={item.title} className='impact-slide'>
                        <div className='impact-slide-card'>
                          <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                            {item.title}
                          </h3>
                          <p className='impact-description'>
                            {item.description}
                          </p>
                          <p className='impact-result'>{item.result}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className='carousel-controls'>
                  <button
                    type='button'
                    className='carousel-arrow'
                    aria-label={carouselControls.previousImpact}
                    onClick={() => {
                      if (impactCount === 0) {
                        return;
                      }

                      setImpactIndex((currentIndex) => {
                        const boundedIndex = Math.min(
                          currentIndex,
                          impactMaxIndex,
                        );
                        return boundedIndex <= 0
                          ? impactMaxIndex
                          : boundedIndex - 1;
                      });
                    }}
                    disabled={!hasImpactCarousel}
                  >
                    <CarouselArrowIcon direction='left' />
                  </button>

                  <div className='carousel-dots'>
                    {impactDotIndexes.map((index) => (
                      <button
                        key={`impact-dot-${index}`}
                        type='button'
                        className={`carousel-dot ${activeImpactIndex === index ? 'is-active' : ''}`}
                        aria-label={`${carouselControls.goToImpact} ${index + 1}`}
                        onClick={() => {
                          setImpactIndex(index);
                        }}
                      />
                    ))}
                  </div>

                  <button
                    type='button'
                    className='carousel-arrow'
                    aria-label={carouselControls.nextImpact}
                    onClick={() => {
                      if (impactCount === 0) {
                        return;
                      }

                      setImpactIndex((currentIndex) => {
                        const boundedIndex = Math.min(
                          currentIndex,
                          impactMaxIndex,
                        );
                        return boundedIndex >= impactMaxIndex
                          ? 0
                          : boundedIndex + 1;
                      });
                    }}
                    disabled={!hasImpactCarousel}
                  >
                    <CarouselArrowIcon direction='right' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='recommendations'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>
                {content.labels.sections.recommendationsTag}
              </p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.recommendationsTitle}
              </h2>
              <p className='max-w-2xl text-sm leading-relaxed text-[var(--text-subtle)] sm:text-base'>
                {content.labels.sections.recommendationsSource}{' '}
                <a
                  href={content.contacts.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='font-medium text-[var(--accent-cyan)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current'
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div
              className='recommendations-shell mt-12'
              data-reveal
              style={
                {
                  ...revealStyle(160),
                  '--carousel-visible-cards': recommendationVisibleCards,
                } as CSSProperties
              }
            >
              <div className='recommendations-viewport'>
                <div
                  className='recommendations-track'
                  style={{
                    transform: `translateX(-${activeRecommendationIndex * recommendationStepPercentage}%)`,
                  }}
                >
                  {content.recommendations.map((recommendation) => (
                    <article
                      key={`${recommendation.name}-${recommendation.role}`}
                      className='recommendation-slide'
                    >
                      <div className='recommendation-slide-card'>
                        <p className='recommendation-quote'>
                          {recommendation.quote}
                        </p>
                        <div className='recommendation-footer'>
                          <div className='recommendation-avatar'>
                            {getInitials(recommendation.name)}
                          </div>
                          <div className='recommendation-meta'>
                            <p className='recommendation-name'>
                              {recommendation.name}
                            </p>
                            <p className='recommendation-role'>
                              {recommendation.role}
                            </p>
                            <p className='recommendation-relation'>
                              {recommendation.relation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className='carousel-controls'>
                <button
                  type='button'
                  className='carousel-arrow'
                  aria-label={carouselControls.previousRecommendation}
                  onClick={() => {
                    if (recommendationCount === 0) {
                      return;
                    }

                    setRecommendationIndex((currentIndex) => {
                      const boundedIndex = Math.min(
                        currentIndex,
                        recommendationMaxIndex,
                      );
                      return boundedIndex <= 0
                        ? recommendationMaxIndex
                        : boundedIndex - 1;
                    });
                  }}
                  disabled={!hasRecommendationCarousel}
                >
                  <CarouselArrowIcon direction='left' />
                </button>

                <div className='carousel-dots'>
                  {recommendationDotIndexes.map((index) => (
                    <button
                      key={`recommendation-dot-${index}`}
                      type='button'
                      className={`carousel-dot ${activeRecommendationIndex === index ? 'is-active' : ''}`}
                      aria-label={`${carouselControls.goToRecommendation} ${index + 1}`}
                      onClick={() => {
                        setRecommendationIndex(index);
                      }}
                    />
                  ))}
                </div>

                <button
                  type='button'
                  className='carousel-arrow'
                  aria-label={carouselControls.nextRecommendation}
                  onClick={() => {
                    if (recommendationCount === 0) {
                      return;
                    }

                    setRecommendationIndex((currentIndex) => {
                      const boundedIndex = Math.min(
                        currentIndex,
                        recommendationMaxIndex,
                      );
                      return boundedIndex >= recommendationMaxIndex
                        ? 0
                        : boundedIndex + 1;
                    });
                  }}
                  disabled={!hasRecommendationCarousel}
                >
                  <CarouselArrowIcon direction='right' />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id='education'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>
                {content.labels.sections.educationTag}
              </p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.educationTitle}
              </h2>
            </div>

            <article
              className='story-panel mt-12'
              data-reveal
              style={revealStyle(170)}
            >
              <div className='story-halo story-halo-education' aria-hidden />
              <div className='story-content'>
                <div className='story-badge'>
                  <p className='story-badge-value display-font'>
                    {content.education.duration}
                  </p>
                  <p className='story-badge-label'>
                    {content.education.degree}
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                    {content.education.institution}
                  </h3>
                  <p className='story-copy'>{content.education.context}</p>
                  <p className='story-copy'>{content.education.summary}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id='ai'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>{content.labels.sections.aiTag}</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.aiTitle}
              </h2>
            </div>

            <article
              className='story-panel story-panel-ai mt-12'
              data-reveal
              style={revealStyle(170)}
            >
              <div className='story-halo story-halo-ai' aria-hidden />
              <div className='story-content'>
                <div className='space-y-4'>
                  <p className='story-copy'>{content.aiFocus.summary}</p>
                  <p className='story-copy'>
                    {content.aiFocus.automationFocus}
                  </p>
                  <a
                    href={content.aiFocus.projectUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='story-link'
                  >
                    {content.aiFocus.projectCta}
                  </a>
                </div>

                <div className='ai-proof'>
                  <p className='ai-proof-year display-font'>
                    {content.aiFocus.projectYear}
                  </p>
                  <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                    {content.aiFocus.projectName}
                  </h3>
                  <p className='story-copy'>
                    {content.aiFocus.projectDescription}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id='experience'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>
                {content.labels.sections.experienceTag}
              </p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.experienceTitle}
              </h2>
            </div>

            <div className='timeline mt-14'>
              {content.experiences.map((job, index) => (
                <article
                  key={`${job.company}-${job.period}`}
                  className='timeline-item'
                  data-reveal
                  style={revealStyle(130 + index * 70)}
                >
                  <div className='timeline-header'>
                    <div>
                      <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                        {job.role}
                      </h3>
                      <p className='text-base text-[var(--text-muted)]'>
                        {job.company}
                      </p>
                    </div>
                    <div className='timeline-meta'>
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <p className='timeline-summary'>{job.summary}</p>

                  <ul className='timeline-highlights'>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className='stack-pills'>
                    {job.stack.map((tech) => (
                      <span key={tech} className='stack-pill'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='skills'>
          <div className='container'>
            <div
              className={sectionIntroClass}
              data-reveal
              style={revealStyle(100)}
            >
              <p className='section-tag'>{content.labels.sections.skillsTag}</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                {content.labels.sections.skillsTitle}
              </h2>
            </div>

            <div className='skills-grid mt-12'>
              {content.skills.map((group, index) => (
                <article
                  key={group.title}
                  className='skill-group'
                  data-reveal
                  style={revealStyle(160 + index * 80)}
                >
                  <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                    {group.title}
                  </h3>
                  <div className='skill-pills'>
                    {group.items.map((skill) => (
                      <span key={skill} className='skill-pill'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className='mt-12' data-reveal style={revealStyle(380)}>
              <p className='section-tag'>
                {content.labels.sections.languagesTag}
              </p>
              <ul className='language-list'>
                {content.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id='contact' className='pb-12'>
          <div className='container'>
            <div className='contact-panel' data-reveal style={revealStyle(120)}>
              <div className='space-y-5'>
                <p className='section-tag'>
                  {content.labels.sections.contactTag}
                </p>
                <h2 className='display-font text-3xl leading-tight sm:text-5xl'>
                  {content.labels.sections.contactTitle}
                </h2>
                <p className='max-w-xl text-base text-[var(--text-muted)]'>
                  {content.labels.sections.contactSummary}
                </p>
              </div>

              <div
                className='contact-list'
                data-reveal
                style={revealStyle(180)}
              >
                <a
                  href={content.contacts.whatsapp}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  {content.labels.contacts.whatsapp}
                </a>
                <a
                  href={`mailto:${content.contacts.email}`}
                  className='contact-item'
                >
                  {content.contacts.email}
                </a>
                <a
                  href={`tel:${content.contacts.phone.replace(/\s+/g, '')}`}
                  className='contact-item'
                >
                  {content.contacts.phone}
                </a>
                <a
                  href={content.contacts.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  {content.labels.contacts.linkedIn}
                </a>
                <a
                  href={content.contacts.github}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  {content.labels.contacts.github}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
