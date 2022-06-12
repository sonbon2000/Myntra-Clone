import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class AdminModule {}
