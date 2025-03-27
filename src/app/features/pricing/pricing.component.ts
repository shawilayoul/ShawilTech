import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface PricingOption {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  featured?: boolean;
  ctaText?: string;
}
@Component({
  selector: 'app-pricing',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  
  // Example data
  pricingOptions: PricingOption[] = [
    {
      plan: 'Basic',
      price: '$299',
      period: 'project',
      description: 'Perfect for small projects or single-page applications',
      features: [
        { text: '1-2 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Basic SEO', included: true },
        { text: 'Contact Form', included: false },
        { text: 'CMS Integration', included: false }
      ],
      ctaText: 'Start Small'
    },
    {
      plan: 'Standard',
      price: '$799',
      period: 'project',
      description: 'Ideal for medium-sized projects with more functionality',
      featured: true,
      features: [
        { text: '3-5 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Advanced SEO', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Basic CMS', included: true }
      ],
      ctaText: 'Get Started'
    },
    {
      plan: 'Premium',
      price: '$1,499',
      period: 'project',
      description: 'Comprehensive solution for complex web applications',
      features: [
        { text: '5+ pages', included: true },
        { text: 'Custom Design', included: true },
        { text: 'Advanced SEO', included: true },
        { text: 'User Authentication', included: true },
        { text: 'Full CMS', included: true }
      ],
      ctaText: 'Go Premium'
    }
  ];
}
