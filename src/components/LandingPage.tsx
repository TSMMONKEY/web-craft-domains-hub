import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  Globe2,
  Menu,
  Search,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroStudio from '@/assets/hero-studio.jpg';

const services = [
  {
    icon: Globe2,
    title: 'Freelance web design',
    text: 'A clear, credible website shaped around your offer and the action you want visitors to take.',
    link: '/freelance-web-design',
  },
  {
    icon: Code2,
    title: 'PHP & WordPress',
    text: 'Reliable custom development, WordPress builds, and practical integrations without unnecessary complexity.',
    link: '/php-development',
  },
  {
    icon: Gauge,
    title: 'Hosting & maintenance',
    text: 'Domain registration, dependable hosting, updates, security checks, and ongoing website care.',
    link: '/web-hosting',
  },
];

const process = [
  ['01', 'Discover', 'We clarify your goals, audience, pages, content, and the job your website needs to do.'],
  ['02', 'Design', 'You see a focused visual direction before the complete website is built.'],
  ['03', 'Build', 'The approved direction becomes a fast, responsive website with practical foundations.'],
  ['04', 'Launch', 'Final checks, domain setup, handover, and support make launch straightforward.'],
];

const faqs = [
  ['How much does a freelance website cost?', 'The price depends on the number of pages, content, features, and integrations. Share your brief for a tailored, no-obligation quote.'],
  ['Can you help with a domain name and web hosting?', 'Yes. Domain registration, hosting setup, SSL, email, and launch support can all be included in one project.'],
  ['Do you work with WordPress and PHP?', 'Yes. Projects can include WordPress development, PHP web programming, custom functionality, and improvements to an existing website.'],
  ['Can you maintain the website after launch?', 'Yes. Ongoing maintenance can cover updates, backups, security checks, content changes, and performance improvements.'],
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-theme min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="font-body text-xl font-semibold text-foreground" aria-label="FreelanceWebPro home">
            FreelanceWeb<span className="text-primary">Pro.</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex" aria-label="Main navigation">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#work" className="transition-colors hover:text-foreground">Approach</a>
            <Link to="/portfolio" className="transition-colors hover:text-foreground">Portfolio</Link>
            <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground">Blog</Link>
          </nav>
          <div className="hidden lg:block">
            <Button asChild variant="outline" className="h-11 border-border bg-transparent px-5 text-foreground hover:bg-secondary">
              <Link to="/get-quote">Get a project quote <ArrowRight /></Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {[
                ['Services', '#services'],
                ['Approach', '#work'],
                ['Portfolio', '/portfolio'],
                ['About', '/about'],
                ['Blog', '/blog'],
                ['Get a quote', '/get-quote'],
              ].map(([label, href]) => (
                <Link key={label} to={href} className="border-b border-border py-3 text-sm font-medium" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img
            src={heroStudio}
            alt="Responsive website design displayed on a desktop monitor and laptop"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-accent">
                <span className="h-px w-8 bg-accent" /> Independent web design & development
              </p>
              <h1 className="font-heading text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                A better website should bring you <em className="font-normal text-accent">better business.</em>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Strategic freelance web design, PHP and WordPress development for businesses ready to look credible, communicate clearly, and turn more visits into enquiries.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 px-7 text-base font-semibold shadow-primary">
                  <Link to="/get-quote">Get a free project quote <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 border-border bg-background/40 px-7 text-base text-foreground hover:bg-secondary">
                  <Link to="/portfolio">View portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
              {['One point of contact', 'Mobile-first design', 'SEO-ready foundations', 'Support after launch'].map((item) => (
                <div key={item} className="flex min-h-20 items-center gap-3 bg-background/85 px-4 py-4 text-sm text-muted-foreground backdrop-blur-sm sm:px-5">
                  <Check className="h-4 w-4 shrink-0 text-accent" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-primary">Capabilities</p>
                <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">Everything your website needs. Nothing it doesn’t.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
                From the first domain search to ongoing maintenance, you work with one independent web professional across design, development, launch, and support.
              </p>
            </div>
            <div className="mt-16 grid overflow-hidden rounded-md border border-border bg-border md:grid-cols-3 md:gap-px">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="group bg-card p-8 transition-colors hover:bg-secondary sm:p-10">
                    <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                    <p className="mt-4 min-h-20 text-sm leading-7 text-muted-foreground">{service.text}</p>
                    <Link to={service.link} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground">
                      Explore service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <Link to="/wordpress-development" className="hover:text-foreground">WordPress development</Link>
              <Link to="/domain-registration" className="hover:text-foreground">Domain registration</Link>
              <Link to="/website-maintenance" className="hover:text-foreground">Website maintenance</Link>
              <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 bg-secondary py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-md border border-border bg-card">
              <img src={heroStudio} alt="Website experience shown across desktop and laptop screens" width={1600} height={1000} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/90 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase text-accent">Responsive by design</p>
                <p className="mt-1 text-sm text-muted-foreground">A consistent experience from desktop to mobile.</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-primary">Built to do a job</p>
              <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">Not decoration. A clear path from interest to action.</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Good freelance website design starts with the commercial goal. Every page, headline, visual, and call to action should help the right visitor understand your value and take the next step.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Search, 'Clear page structure'],
                  [Gauge, 'Fast, responsive experience'],
                  [ShieldCheck, 'Secure foundations'],
                  [Wrench, 'Easy ongoing support'],
                ].map(([Icon, label]) => {
                  const ItemIcon = Icon as typeof Search;
                  return (
                    <li key={label as string} className="flex items-center gap-3 border-t border-border pt-4 text-sm font-medium">
                      <ItemIcon className="h-5 w-5 text-primary" /> {label as string}
                    </li>
                  );
                })}
              </ul>
              <Button asChild variant="link" className="mt-8 h-auto p-0 text-accent">
                <Link to="/portfolio">See portfolio examples <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase text-primary">A straightforward process</p>
              <h2 className="font-heading text-4xl text-foreground sm:text-6xl">From rough idea to confident launch.</h2>
            </div>
            <ol className="mt-16 grid border-t border-border md:grid-cols-4">
              {process.map(([number, title, text]) => (
                <li key={number} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 first:pl-0 last:border-r-0">
                  <span className="font-heading text-3xl text-primary">{number}</span>
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-secondary py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-primary">Common questions</p>
              <h2 className="font-heading text-4xl text-foreground sm:text-5xl">Before we start.</h2>
            </div>
            <div className="border-t border-border">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-foreground">
                    {question}<ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase text-primary-foreground/70">Have a project in mind?</p>
              <h2 className="font-heading text-4xl leading-tight sm:text-6xl">Let’s turn it into a website that earns attention.</h2>
              <p className="mt-6 max-w-xl text-primary-foreground/75">Tell me what you need, what success looks like, and your ideal timeline. I’ll reply with the clearest next step.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="h-14 shrink-0 px-7 text-base">
              <Link to="/get-quote">Request your quote <ArrowRight /></Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="font-body text-lg font-semibold text-foreground">FreelanceWeb<span className="text-primary">Pro.</span></p>
            <p className="mt-2">Independent web design, development, domains, hosting, and support.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;