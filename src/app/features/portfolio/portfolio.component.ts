import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  categoryLabel: string;
  date: string;
  technologies: string[];
  liveUrl: string;
  caseStudyUrl: string;
}

interface CaseStudy {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  statsBefore: {
    visitors: string;
    conversion: string;
    loadTime: string;
  };
  statsAfter: {
    visitors: string;
    conversion: string;
    loadTime: string;
  };
  improvement: {
    visitors: number;
    conversion: number;
    loadTime: number;
  };
}

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports:[CommonModule],
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeFilter = 'all';

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A custom built e-commerce solution with integrated inventory management and payment processing.',
      image: 'assets/projects/ecommerce-project.jpg',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      date: 'Jan 2024',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example-ecommerce.com',
      caseStudyUrl: '/case-studies/ecommerce-platform'
    },
    {
      title: 'Corporate Website Redesign',
      description: 'Complete redesign of a corporate website with improved UX and performance optimizations.',
      image: 'assets/projects/corporate-project.jpg',
      category: 'web',
      categoryLabel: 'Web Development',
      date: 'Nov 2023',
      technologies: ['React', 'SCSS', 'Contentful CMS'],
      liveUrl: 'https://example-corporate.com',
      caseStudyUrl: '/case-studies/corporate-redesign'
    },
    {
      title: 'Mobile App UI/UX',
      description: 'User interface design and experience optimization for a fitness tracking mobile application.',
      image: 'assets/projects/mobile-ui-project.jpg',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      date: 'Sep 2023',
      technologies: ['Figma', 'Adobe XD', 'User Testing'],
      liveUrl: 'https://example-mobileapp.com',
      caseStudyUrl: '/case-studies/mobile-ui'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for a SaaS product with real-time data visualization.',
      image: 'assets/projects/saas-project.jpg',
      category: 'web',
      categoryLabel: 'Web Development',
      date: 'Jul 2023',
      technologies: ['Angular', 'D3.js', 'Firebase'],
      liveUrl: 'https://example-saas.com',
      caseStudyUrl: '/case-studies/saas-dashboard'
    },
    {
      title: 'Online Booking System',
      description: 'Custom booking and scheduling system with calendar integration and notifications.',
      image: 'assets/projects/booking-project.jpg',
      category: 'web',
      categoryLabel: 'Web Development',
      date: 'May 2023',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example-booking.com',
      caseStudyUrl: '/case-studies/booking-system'
    },
    {
      title: 'Shopify Store',
      description: 'Custom Shopify theme development with enhanced product filtering and checkout flow.',
      image: 'assets/projects/shopify-project.jpg',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      date: 'Mar 2023',
      technologies: ['Shopify', 'Liquid', 'JavaScript'],
      liveUrl: 'https://example-shopify.com',
      caseStudyUrl: '/case-studies/shopify-store'
    }
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'E-Commerce Conversion Optimization',
      beforeImage: 'assets/case-studies/ecom-before.jpg',
      afterImage: 'assets/case-studies/ecom-after.jpg',
      beforeDescription: 'The original site had poor mobile experience and confusing checkout process leading to high abandonment rates.',
      afterDescription: 'Redesigned mobile experience, streamlined checkout, and implemented performance optimizations.',
      statsBefore: {
        visitors: '12,500',
        conversion: '1.2%',
        loadTime: '4.8'
      },
      statsAfter: {
        visitors: '18,700',
        conversion: '3.5%',
        loadTime: '1.2'
      },
      improvement: {
        visitors: 50,
        conversion: 192,
        loadTime: 75
      }
    },
    {
      title: 'Corporate Website Redesign',
      beforeImage: 'assets/case-studies/corp-before.jpg',
      afterImage: 'assets/case-studies/corp-after.jpg',
      beforeDescription: 'Outdated design with poor information architecture and no clear call-to-action.',
      afterDescription: 'Modern design with clear user journey, improved content structure, and prominent CTAs.',
      statsBefore: {
        visitors: '8,200',
        conversion: '0.8%',
        loadTime: '3.5'
      },
      statsAfter: {
        visitors: '14,500',
        conversion: '2.9%',
        loadTime: '1.8'
      },
      improvement: {
        visitors: 77,
        conversion: 263,
        loadTime: 49
      }
    }
  ];

  testimonials: Testimonial[] = [
    {
      quote: "Shawil completely transformed our online presence. The new website not only looks amazing but has increased our leads by over 200%. Their attention to detail and understanding of our business needs was exceptional.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      avatar: "assets/testimonials/sarah.jpg"
    },
    {
      quote: "Working with Shawil was a game-changer for our e-commerce business. They delivered the project ahead of schedule and the results have exceeded our expectations. Our conversion rates have never been higher!",
      name: "Michael Chen",
      position: "CEO",
      company: "UrbanFashion",
      avatar: "assets/testimonials/michael.jpg"
    },
    {
      quote: "As a startup, we needed a developer who could understand our vision and execute it perfectly. Shawil was that partner. They provided valuable insights throughout the process and delivered a product we're proud of.",
      name: "Emily Rodriguez",
      position: "Founder",
      company: "GreenStart",
      avatar: "assets/testimonials/emily.jpg"
    }
  ];

  filterProjects(category: string): void {
    this.activeFilter = category;
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
}