import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AddFurnitureComponent } from './add-furniture/add-furniture.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './gaurd/can-deactivate.guard';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { CanActiveGuard } from './gaurd/can-active.guard';

const routes: Routes = [
  {
    path: "homepage",
    component: HomepageComponent,
  },
  {
    path: "",
    redirectTo: "/homepage",
    pathMatch: "full"
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path: "add-furniture",
    component: AddFurnitureComponent,
    canActivate:[CanActiveGuard]
  },
  {
    path: "delete-furniture/:id",
    component: HomepageComponent,
    canActivate:[CanActiveGuard]
  },
  {
    path: "edit-furniture/:id",
    component: AddFurnitureComponent,
    
  },
  {
    path: "reg-form",
    component: RegistrationFormComponent,
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path:"edit-furniture",
    component: EditFurnitureComponent,
    canActivate:[CanActiveGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
