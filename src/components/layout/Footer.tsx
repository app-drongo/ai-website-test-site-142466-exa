'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: 'Test Site',
  description: 'Building the future with innovative technology solutions.',
  quickLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ],
  contactEmail: 'hello@testsite.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Business St, Suite 100, City, State 12345',
  copyright: '© 2024 Test Site. All rights reserved.',
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates and insights delivered to your inbox.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer id="footer" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span data-editable="brand">{config.brand}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => handleLinkClick(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  className="text-xs"
                >
                  <span data-editable={`socialLinks[${idx}].label`}>{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {config.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`quickLinks[${idx}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 text-left"
                  >
                    <span data-editable={`quickLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <Separator className="my-6" />

            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 text-left"
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <p>
                  <span data-editable="contactEmail">{config.contactEmail}</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Phone</p>
                <p>
                  <span data-editable="contactPhone">{config.contactPhone}</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Address</p>
                <p className="leading-relaxed">
                  <span data-editable="address">{config.address}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              data-form-id="69546fa6e59b404ee9698f6d"
            >
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <Button type="submit" size="sm" className="w-full">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            {config.legalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                data-editable-href={`legalLinks[${idx}].href`}
                data-href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
