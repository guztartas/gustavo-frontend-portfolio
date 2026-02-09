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
import { useEffect, useMemo, useState } from 'react';

const LOCALE_STORAGE_KEY = 'gt-locale';
const THEME_STORAGE_KEY = 'gt-theme';
const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const revealStyle = (delay: number) =>
  ({ '--reveal-delay': `${delay}ms` }) as CSSProperties;

const sectionIntroClass = 'max-w-2xl space-y-4';

const getSystemTheme = () =>
  window.matchMedia(THEME_MEDIA_QUERY).matches ? 'dark' : 'light';

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

  const content =
    portfolioDataByLocale[locale] ?? portfolioDataByLocale[defaultLocale];

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

  const navigationLinks = useMemo(
    () => [
      { href: '#impact', label: content.labels.navigation.impact },
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
            <div className='grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
              <div className='space-y-8'>
                <div className='eyebrow' data-reveal style={revealStyle(100)}>
                  {content.person.role} • {content.person.location}
                </div>

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
                  className='flex flex-wrap gap-4'
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
                  className='flex flex-wrap gap-3'
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

              <div className='relative' data-reveal style={revealStyle(170)}>
                <div className='photo-glow' aria-hidden />
                <ProfilePhoto />
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

            <div className='impact-grid mt-12'>
              {content.impact.map((item, index) => (
                <article
                  key={item.title}
                  className='impact-card'
                  data-reveal
                  style={revealStyle(170 + index * 110)}
                >
                  <h3 className='display-font text-2xl text-[var(--text-primary)]'>
                    {item.title}
                  </h3>
                  <p className='impact-description'>{item.description}</p>
                  <p className='impact-result'>{item.result}</p>
                </article>
              ))}
            </div>
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
