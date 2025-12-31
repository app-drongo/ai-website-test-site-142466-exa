'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const DEFAULT_CONTACT = {
  badge: 'Get in Touch',
  title: 'Contact Us',
  subtitle:
    "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactInfo: [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'hello@company.com',
      href: 'mailto:hello@company.com',
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: 'MapPin',
      label: 'Office',
      value: '123 Business St, Suite 100\nSan Francisco, CA 94105',
      href: 'https://maps.google.com/?q=123+Business+St+San+Francisco+CA',
    },
  ],
  formTitle: 'Send us a message',
  formFields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Your full name',
    },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true,
      placeholder: 'How can we help?',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us more about your inquiry...',
    },
  ],
  submitText: 'Send Message',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="h-5 w-5" />;
      case 'Phone':
        return <Phone className="h-5 w-5" />;
      case 'MapPin':
        return <MapPin className="h-5 w-5" />;
      case 'Clock':
        return <Clock className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const handleContactClick = (href: string | null) => {
    if (!href) return;

    if (typeof window !== 'undefined') {
      if (href.startsWith('mailto:') || href.startsWith('tel:')) {
        window.location.href = href;
      } else {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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

          {/* Content Grid */}
          <div
            className={`grid gap-8 lg:grid-cols-2 transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-4">
                {config.contactInfo.map((info, idx) => (
                  <Card
                    key={idx}
                    className={`bg-card text-card-foreground border-border transition-all duration-300 hover:shadow-md ${
                      info.href ? 'cursor-pointer hover:border-primary/30' : ''
                    }`}
                    onClick={() => handleContactClick(info.href)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                          {getIcon(info.icon)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">
                            <span data-editable={`contactInfo[${idx}].label`}>{info.label}</span>
                          </h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <span data-editable={`contactInfo[${idx}].value`}>{info.value}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <h3 className="text-xl font-semibold">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h3>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="6954735f49372e2dbe27ab78"
                >
                  {config.formFields.map((field, idx) => (
                    <div key={idx}>
                      <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                        <span data-editable={`formFields[${idx}].label`}>{field.label}</span>
                        {field.required && <span className="text-destructive ml-1">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <Textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="min-h-[120px] bg-background border-border"
                          disabled={isSubmitting}
                        />
                      ) : (
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="bg-background border-border"
                          disabled={isSubmitting}
                        />
                      )}
                    </div>
                  ))}

                  {/* Form Status */}
                  {message && (
                    <div
                      className={`p-4 rounded-lg text-sm ${
                        isSuccess
                          ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                          : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                      }`}
                    >
                      {message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span data-editable="submitText">{config.submitText}</span>
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
