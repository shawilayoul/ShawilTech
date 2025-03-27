import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route will show HomeComponent
  { path: 'services', loadChildren: () => import('./features/services/services.routes').then(m => m.routes) },
  { path: 'portfolio', loadChildren: () => import('./features/portfolio/portfolio.routes').then(m => m.routes) },
  { path: 'pricing', loadChildren: () => import('./features/pricing/pricing.routes').then(m => m.routes) },
  { path: 'about', loadChildren: () => import('./features/about/about.routes').then(m => m.routes) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.routes').then(m => m.routes) },
  { path: 'blog', loadChildren: () => import('./features/blog/blog.routes').then(m => m.routes) },
];
