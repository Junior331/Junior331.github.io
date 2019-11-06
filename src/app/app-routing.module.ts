import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { ProjectsComponent } from './container/projects/projects.component';
import { ContactsComponent } from './container/contacts/contacts.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contacts", component: ContactsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
