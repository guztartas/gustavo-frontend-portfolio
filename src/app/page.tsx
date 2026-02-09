import { ProfilePhoto } from '@/components/profile-photo';
import { ScrollEffects } from '@/components/scroll-effects';
import { portfolioData } from '@/data/portfolio-data';
import type { CSSProperties } from 'react';

const revealStyle = (delay: number) =>
  ({ '--reveal-delay': `${delay}ms` }) as CSSProperties;

const navigationLinks = [
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

const sectionIntroClass = 'max-w-2xl space-y-4';

export default function Home() {
  const {
    person,
    summary,
    metrics,
    impact,
    experiences,
    skills,
    languages,
    contacts,
  } = portfolioData;

  return (
    <>
      <ScrollEffects />

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

              <nav className='hidden items-center gap-6 md:flex'>
                {navigationLinks.map((item) => (
                  <a key={item.href} href={item.href} className='nav-link'>
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href='/resume/Gustavo_Tartas_updated.pdf'
                className='nav-cta'
                target='_blank'
                rel='noreferrer'
              >
                Resume
              </a>
            </div>
          </div>
        </header>

        <section id='top' className='pt-10 md:pt-16'>
          <div className='container'>
            <div className='grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
              <div className='space-y-8'>
                <div className='eyebrow' data-reveal style={revealStyle(100)}>
                  {person.role} • {person.location}
                </div>

                <div className='space-y-6' data-reveal style={revealStyle(170)}>
                  <h1 className='display-font text-4xl leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-7xl'>
                    <span className='text-gradient'>Frontend precision.</span>
                    <br />
                    Commerce outcomes at scale.
                  </h1>
                  <p className='max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg'>
                    {person.tagline}
                  </p>
                </div>

                <p
                  className='max-w-2xl text-sm leading-relaxed text-[var(--text-subtle)] sm:text-base'
                  data-reveal
                  style={revealStyle(230)}
                >
                  {summary}
                </p>

                <div
                  className='flex flex-wrap gap-4'
                  data-reveal
                  style={revealStyle(290)}
                >
                  <a href='#contact' className='primary-cta'>
                    Let&apos;s Build Together
                  </a>
                  <a
                    href='/resume/Gustavo_Tartas_updated.pdf'
                    className='secondary-cta'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Download Resume
                  </a>
                </div>

                <div
                  className='flex flex-wrap gap-3'
                  data-reveal
                  style={revealStyle(340)}
                >
                  <a
                    href={contacts.github}
                    target='_blank'
                    rel='noreferrer'
                    className='chip-link'
                  >
                    GitHub
                  </a>
                  <a
                    href={contacts.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='chip-link'
                  >
                    LinkedIn
                  </a>
                  <a href={`mailto:${contacts.email}`} className='chip-link'>
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
              {metrics.map((metric, index) => (
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
              <p className='section-tag'>Highlighted work</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                Selected impact across enterprise commerce products
              </h2>
            </div>

            <div className='impact-grid mt-12'>
              {impact.map((item, index) => (
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
              <p className='section-tag'>Career timeline</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                Experience shaping high-traffic products
              </h2>
            </div>

            <div className='timeline mt-14'>
              {experiences.map((job, index) => (
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
              <p className='section-tag'>Toolkit</p>
              <h2 className='display-font text-3xl leading-tight sm:text-4xl'>
                Frontend-first stack with fullstack depth
              </h2>
            </div>

            <div className='skills-grid mt-12'>
              {skills.map((group, index) => (
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
              <p className='section-tag'>Languages</p>
              <ul className='language-list'>
                {languages.map((language) => (
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
                <p className='section-tag'>Open to opportunities</p>
                <h2 className='display-font text-3xl leading-tight sm:text-5xl'>
                  Let&apos;s build products users remember
                </h2>
                <p className='max-w-xl text-base text-[var(--text-muted)]'>
                  Available for senior frontend and fullstack opportunities
                  focused on product impact, performance, and scalable
                  architecture.
                </p>
              </div>

              <div
                className='contact-list'
                data-reveal
                style={revealStyle(180)}
              >
                <a
                  href={contacts.whatsapp}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  WhatsApp
                </a>
                <a href={`mailto:${contacts.email}`} className='contact-item'>
                  {contacts.email}
                </a>
                <a
                  href={`tel:${contacts.phone.replace(/\s+/g, '')}`}
                  className='contact-item'
                >
                  {contacts.phone}
                </a>
                <a
                  href={contacts.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  LinkedIn Profile
                </a>
                <a
                  href={contacts.github}
                  target='_blank'
                  rel='noreferrer'
                  className='contact-item'
                >
                  GitHub Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
