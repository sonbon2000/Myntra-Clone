import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { MenComponent } from './shared/components/men/men.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/men',
    pathMatch: 'full',
  },
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
