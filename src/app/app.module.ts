import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchFormComponent,
    AboutComponent,
    NavbarComponent,
    HomepageComponent,
    NotFoundComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
