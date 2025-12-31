'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Simple Pricing',
  title: 'Choose Your Plan',
  subtitle: 'Transparent pricing that scales with your business. Start free, upgrade when ready.',
  plans: [
    {
      name: 'Essential',
      price: '$19',
      period: '/month',
      description: 'Everything you need to get started',
      features: ['Up to 10 projects', '5GB storage', 'Email support', 'Basic analytics'],
      ctaText: 'Start Free',
      ctaHref: '/signup?plan=essential',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Advanced features for growing teams',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
      ],
      ctaText: 'Contact Us',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
  guarantee: 'All plans include a 30-day money-back guarantee',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePlanClick = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`mb-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Badge variant="secondary" className="bg-muted text-muted-foreground px-3 py-1">
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            <div
              className={`mb-4 transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h2>
            </div>

            <div
              className={`transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>
          </div>

          {/* Pricing Grid */}
          <div
            className={`grid gap-6 md:grid-cols-3 mb-8 transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {config.plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative bg-card text-card-foreground border-border transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'ring-2 ring-primary shadow-md transform scale-105'
                    : 'hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-2 py-1 text-xs flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                  </h3>

                  <div className="mb-3">
                    <span className="text-3xl font-bold">
                      <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm ml-1">
                        <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm">
                    <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="text-sm">
                          <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                            {feature}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanClick(plan.ctaHref)}
                    data-editable-href={`plans[${idx}].ctaHref`}
                    data-href={plan.ctaHref}
                    className={`w-full mt-6 transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                    variant={plan.popular ? 'default' : 'secondary'}
                  >
                    {plan.popular && <Zap className="h-4 w-4 mr-2" />}
                    <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantee */}
          <div
            className={`text-center transition-all duration-500 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-sm text-muted-foreground">
              <span data-editable="guarantee">{config.guarantee}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
