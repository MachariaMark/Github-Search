import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent  } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SearchFormComponent } from './search-form/search-form.component'
import { from } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'search', component: SearchFormComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/homepage", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
