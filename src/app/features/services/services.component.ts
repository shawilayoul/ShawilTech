import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports:[CommonModule],
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Development',
      description: 'End-to-end web development solutions for your business needs.',
      features: [
        'Custom Angular/React applications',
        'Node.js backend development',
        'Responsive mobile-first design',
        'API integration & development'
      ]
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores that convert visitors into customers.',
      features: [
        'Shopify & WooCommerce development',
        'Custom e-commerce platforms',
        'Payment gateway integration',
        'Inventory management systems'
      ]
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      features: [
        'User interface design',
        'Experience strategy',
        'Prototyping & wireframing',
        'Usability testing'
      ]
    },
    {
      icon: 'fas fa-search-plus',
      title: 'SEO Optimization',
      description: 'Improve your visibility and rank higher in search results.',
      features: [
        'Technical SEO audits',
        'Keyword research & strategy',
        'Content optimization',
        'Performance improvements'
      ]
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly and securely.',
      features: [
        'Regular updates & backups',
        'Security monitoring',
        'Performance optimization',
        '24/7 emergency support'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that engage your audience.',
      features: [
        'Ionic framework development',
        'React Native applications',
        'Mobile UX optimization',
        'App store deployment'
      ]
    }
  ];
}