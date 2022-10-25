import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';

export const appRoutes: Routes = [
  {
    path:'',
    component:LoaderComponent
  },
  {
    path:'layout',
    component:LayoutComponent
  }];
export class AppRoutingModule { }
