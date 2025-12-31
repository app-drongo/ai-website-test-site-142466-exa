'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: 'Test Site',
  description:
    'Streamline operations and boost productivity with our comprehensive business solutions.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Join thousands of businesses already using our platform.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  contact: {
    email: 'hello@testsite.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100',
  },
  links: [
    {
      title: 'Product',
      items: [
        { label: 'Features', href: '#hero' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Get Started', href: '#cta' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' },
      ],
    },
  ],
  copyright: '© 2024 Test Site. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      {/* Call to Action Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span data-editable="ctaTitle">{config.ctaTitle}</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              <span data-editable="ctaDescription">{config.ctaDescription}</span>
            </p>
            <Button
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  <span data-editable="brand">{config.brand}</span>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <span data-editable="contact.email">{config.contact.email}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <span data-editable="contact.phone">{config.contact.phone}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span data-editable="contact.address">{config.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {config.links.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="font-semibold text-foreground mb-4">
                  <span data-editable={`links[${sectionIndex}].title`}>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <button
                        onClick={() => handleLinkClick(item.href)}
                        data-editable-href={`links[${sectionIndex}].items[${itemIndex}].href`}
                        data-href={item.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors text-left"
                      >
                        <span data-editable={`links[${sectionIndex}].items[${itemIndex}].label`}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm text-center">
              <span data-editable="copyright">{config.copyright}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
