import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProjects = [
    {
      title: 'E-commerce Platform',
      image: 'assets/images/project1.jpg',
      link: '/portfolio/ecommerce'
    },
    {
      title: 'Business Dashboard',
      image: 'assets/images/project2.jpg',
      link: '/portfolio/dashboard'
    },
    {
      title: 'Portfolio Website',
      image: 'assets/images/project3.jpg',
      link: '/portfolio/portfolio-site'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      text: 'Working with this developer was an absolute pleasure. Our new website has increased our conversion rate by 40%.',
      avatar: 'assets/images/client1.jpg',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      text: 'The attention to detail and communication throughout the project was exceptional. Highly recommended!',
      avatar: 'assets/images/client2.jpg',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Small Business Owner',
      text: 'Affordable, professional, and delivered ahead of schedule. Will definitely work together again.',
      avatar: 'assets/images/client3.jpg',
      rating: 5
    }
  ];

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openProject(project: any) {
    // Implement your project opening logic here
    console.log('Opening project:', project.title);
    // this.router.navigate([project.link]);
  }

  openContactForm() {
    // Implement your contact form opening logic here
    console.log('Opening contact form');
  }
}