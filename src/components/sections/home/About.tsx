'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  badge: 'About Us',
  title: 'Building the Future of Technology',
  subtitle:
    'We are a team of passionate innovators dedicated to creating solutions that make a real difference in the world.',
  description:
    'Founded with a vision to bridge the gap between complex technology and everyday needs, we focus on developing intuitive, accessible, and powerful tools that empower businesses and individuals to achieve their goals.',
  stats: [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ],
  values: [
    {
      icon: 'Users',
      title: 'Customer First',
      description: 'Every decision we make starts with understanding our customers\' needs and challenges.',
    },
    {
      icon: 'Target',
      title: 'Results Driven',
      description: 'We measure success by the tangible impact we create for our clients and their users.',
    },
    {
      icon: 'Award',
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we build, test, and deliver.',
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Focus',
      description: 'We embrace new technologies and approaches to solve problems in creative ways.',
    },
  ],
  ctaText: 'Learn More About Us',
  ctaHref: '/about',
  secondaryCtaText: 'Get in Touch',
  secondaryCtaHref: '/contact',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-6 w-6" />;
      case 'Target':
        return <Target className="h-6 w-6" />;
      case 'Award':
        return <Award className="h-6 w-6" />;
      case 'Lightbulb':
        return <Lightbulb className="h-6 w-6" />;
      default:
        return <Users className="h-6 w-6" />;
    }
  };

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="about" className="bg-muted/30 text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
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
              className={`mb-6 transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h2>
            </div>

            <div
              className={`mb-8 transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            <div
              className={`transition-all duration-500 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`mb-16 transition-all duration-500 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    <span data-editable={`stats[${idx}].number`}>{stat.number}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div
            className={`mb-12 transition-all duration-500 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {config.values.map((value, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        {getIcon(value.icon)}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      <span data-editable={`values[${idx}].title`}>{value.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span data-editable={`values[${idx}].description`}>
                        {value.description}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`text-center transition-all duration-500 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
