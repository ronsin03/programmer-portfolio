import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonelInfoComponent } from './personel-info/personel-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component';


const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'personel-info', component: PersonelInfoComponent},
  {path:'professional-info', component: ProfessionalInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 