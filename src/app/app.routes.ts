import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoticesComponent } from './notices/notices.component';
import { LoginComponent } from './login/login.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notice', component: NoticesComponent },
  { path: 'login', component: LoginComponent },
  { path:'partners', component: PartnerComponent },
  { path: 'contact', component: ContactComponent }
];

