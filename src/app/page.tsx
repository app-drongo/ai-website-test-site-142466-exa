'use client';

import Hero from '@/components/sections/home/Hero';
import Pricing from '@/components/sections/home/Pricing';
import CallToAction from '@/components/sections/home/CallToAction';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PAGE = {
  heroTitle: 'Transform Your Business Today',
  heroSubtitle:
    'Streamline operations and boost productivity with our comprehensive business solutions',
  heroCtaText: 'Get Started',
  heroCtaHref: '/get-started',
  heroSecondaryCtaText: 'Learn More',
  heroSecondaryCtaHref: '/about',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80',
  heroImageAlt: 'Modern business workspace with clean design',

  // Enhanced CTA Section
  ctaTitle: 'Ready to Transform Your Business?',
  ctaSubtitle:
    'Join over 10,000 companies already growing with our platform. Start your journey today.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  ctaSecondaryText: 'Schedule Demo',
  ctaSecondaryHref: '/demo',
  ctaBenefits: ['No credit card required', '14-day free trial', 'Setup in under 5 minutes'],

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
  const navigate = useSmartNavigation();

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCtaClick = () => {
    navigate(config.ctaSecondaryHref);
  };

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

      {/* Enhanced Call to Action Section */}
      <section id="cta" className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span data-editable="ctaTitle">{config.ctaTitle}</span>
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                <span data-editable="ctaSubtitle">{config.ctaSubtitle}</span>
              </p>
            </div>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {config.ctaBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span data-editable={`ctaBenefits[${idx}]`} className="text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCtaClick}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105"
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={handleSecondaryCtaClick}
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold"
                data-editable-href="ctaSecondaryHref"
                data-href={config.ctaSecondaryHref}
              >
                <span data-editable="ctaSecondaryText">{config.ctaSecondaryText}</span>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ businesses worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
