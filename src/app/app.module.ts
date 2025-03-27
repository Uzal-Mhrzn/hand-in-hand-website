import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { NoticesComponent } from './notices/notices.component';
import { NoticeDialogComponent } from './notice-dialog/notice-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { PartnerComponent } from './partner/partner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoticesComponent,
    NoticeDialogComponent,
    PartnerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }