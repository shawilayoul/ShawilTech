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
      beforeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP1B32vGshqefZiFzoNCHFSD7nmWyTFXCQ&s',
      afterImage: 'data:image/jpeg;base64,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',
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
      beforeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-8xt0PEVdvi59AQ0VSXPKYS6x4l-6MPtUg&s',
      afterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTaaHqfpioTPxAnMUBqJF4BfFAJd-wJ6RwRg&s',
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
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Working with Shawil was a game-changer for our e-commerce business. They delivered the project ahead of schedule and the results have exceeded our expectations. Our conversion rates have never been higher!",
      name: "Michael Chen",
      position: "CEO",
      company: "UrbanFashion",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "As a startup, we needed a developer who could understand our vision and execute it perfectly. Shawil was that partner. They provided valuable insights throughout the process and delivered a product we're proud of.",
      name: "Emily Rodriguez",
      position: "Founder",
      company: "GreenStart",
      avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
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