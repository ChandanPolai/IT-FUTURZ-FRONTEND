import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JoinOurTeamComponent } from './pages/join-our-team/join-our-team.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HireResourcesComponent } from './pages/hire-resources/hire-resources.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductDevelopmentComponent } from './pages/services/product-development/product-development.component';
import { ArtificialInteligenceComponent } from './pages/services/artificial-inteligence/artificial-inteligence.component';
import { EmergingTrendsComponent } from './pages/services/emerging-trends/emerging-trends.component';
import { BusinessConsultingComponent } from './pages/services/business-consulting/business-consulting.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'services',
    children: [
      { path: 'product-development', component: ProductDevelopmentComponent },
      {
        path: 'artificial-inteligence',
        component: ArtificialInteligenceComponent,
      },
      { path: 'emerging-trends', component: EmergingTrendsComponent },
      { path: 'business-consulting', component: BusinessConsultingComponent },
    ],
  },
  { path: 'join-our-team', component: JoinOurTeamComponent },
  { path: 'exclusive-products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }, 
  { path: 'hire-developers', component: HireResourcesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];
