'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CALLTOACTION = {
  badge: 'Transform Today',
  title: 'Ready to Elevate Your Business?',
  subtitle:
    'Join industry leaders who trust our platform to drive growth, streamline operations, and unlock new possibilities.',
  ctaText: 'Start Your Journey',
  ctaHref: '/get-started',
  secondaryCtaText: 'View Demo',
  secondaryCtaHref: '/demo',
  benefits: ['Instant setup in minutes', '24/7 expert support', 'Risk-free 30-day trial'],
  testimonial: 'This platform transformed how we operate. Results in just weeks.',
  testimonialAuthor: 'Sarah Chen, CEO',
} as const;

type CallToActionProps = Partial<typeof DEFAULT_CALLTOACTION>;

export default function CallToAction(props: CallToActionProps) {
  const config = { ...DEFAULT_CALLTOACTION, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('calltoaction');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="calltoaction"
      className="bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span data-editable="badge">{config.badge}</span>
                </Badge>
              </div>

              {/* Title */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  <span data-editable="title">{config.title}</span>
                </h2>
              </div>

              {/* Subtitle */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span data-editable="subtitle">{config.subtitle}</span>
                </p>
              </div>

              {/* Benefits */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="space-y-3">
                  {config.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span
                        data-editable={`benefits[${idx}]`}
                        className="text-foreground font-medium"
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handlePrimaryClick}
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group shadow-lg"
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleSecondaryClick}
                    data-editable-href="secondaryCtaHref"
                    data-href={config.secondaryCtaHref}
                    className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-medium"
                  >
                    <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="bg-card text-card-foreground border-border shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-primary rounded-full" />
                      ))}
                    </div>

                    <blockquote className="text-lg font-medium text-foreground leading-relaxed">
                      "<span data-editable="testimonial">{config.testimonial}</span>"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          <span data-editable="testimonialAuthor">{config.testimonialAuthor}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Verified Customer</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
