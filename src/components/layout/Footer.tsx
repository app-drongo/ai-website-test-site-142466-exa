'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TechFlow',
  tagline: 'Streamlined technology solutions that simplify your digital experience effortlessly.',
  copyright: '© 2024 TechFlow. All rights reserved.',
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleEmailClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${config.contactEmail}`;
    }
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${config.contactPhone}`;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              <span data-editable="companyName">{config.companyName}</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="tagline">{config.tagline}</span>
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                onClick={handleEmailClick}
                data-editable-href="contactEmail"
                data-href={`mailto:${config.contactEmail}`}
              >
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </Button>
              <Button
                variant="ghost"
                className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                onClick={handlePhoneClick}
                data-editable-href="contactPhone"
                data-href={`tel:${config.contactPhone}`}
              >
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Company</h4>
            <nav className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`companyLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Legal</h4>
            <nav className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Copyright */}
        <div className="py-6">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
