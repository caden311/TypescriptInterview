import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent,  loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
