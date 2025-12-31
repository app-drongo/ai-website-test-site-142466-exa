'use client';

import Hero from '@/components/sections/home/Hero';
import Pricing from '@/components/sections/home/Pricing';

const DEFAULT_PAGE = {
  heroTitle: 'Transform Your Business Today',
  heroSubtitle:
    'Streamline operations and boost productivity with our comprehensive business solutions',
  heroCtaText: 'Get Started',
  heroCtaHref: '/get-started',
  heroSecondaryCtaText: 'Learn More',
  heroSecondaryCtaHref: '/about',
  heroImageUrl:
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80',
  heroImageAlt: 'Modern business team collaborating',
  pricingTitle: 'Simple, Transparent Pricing',
  pricingSubtitle: 'Choose the perfect plan for your business needs',
  pricingPlans: [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: ['Up to 5 users', 'Basic analytics', 'Email support', 'Core features'],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All features',
        'API access',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom training',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact-sales',
      popular: false,
    },
  ],
} as const;

type PageProps = Partial<typeof DEFAULT_PAGE>;

export default function HomePage(props: PageProps) {
  const config = { ...DEFAULT_PAGE, ...props };

  return (
    <>
      <section id="hero" className="bg-background text-foreground">
        <Hero
          title={config.heroTitle}
          subtitle={config.heroSubtitle}
          ctaText={config.heroCtaText}
          ctaHref={config.heroCtaHref}
          secondaryCtaText={config.heroSecondaryCtaText}
          secondaryCtaHref={config.heroSecondaryCtaHref}
          imageUrl={config.heroImageUrl}
          imageAlt={config.heroImageAlt}
        />
      </section>
      <section id="pricing" className="bg-muted/30 text-foreground">
        <Pricing
          title={config.pricingTitle}
          subtitle={config.pricingSubtitle}
          plans={config.pricingPlans}
        />
      </section>
    </>
  );
}
