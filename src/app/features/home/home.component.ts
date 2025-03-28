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
      image: '/images/ecommerce.png', 
      link: 'https://sleekstyle.onrender.com'
    },
    {
      title: 'Business Dashboard',
      image: '/images/admindash.png',  
      link: '/portfolio/dashboard'
    },
    {
      title: 'Portfolio Website',
      image: '/images/portfolio.png', 
      link: 'https://aocholportfolio.netlify.app/'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      text: 'Working with this developer was an absolute pleasure. Our new website has increased our conversion rate by 40%.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      text: 'The attention to detail and communication throughout the project was exceptional. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Small Business Owner',
      text: 'Affordable, professional, and delivered ahead of schedule. Will definitely work together again.',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    console.log('Opening project:', project.title);

    if (project.link.startsWith('http')) {
      window.open(project.link, '_blank');
    } 
  }

  isContactFormOpen = false;

  openContactForm() {
    console.log('Opening contact form');
    this.isContactFormOpen = true;
  }

  closeContactForm() {
    console.log('Closing contact form');
    this.isContactFormOpen = false;
  }

  submitContactForm(event: Event) {
    event.preventDefault();
    console.log('Form submitted');
    this.isContactFormOpen = false; // Close modal after submission
  }
}