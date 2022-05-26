




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
