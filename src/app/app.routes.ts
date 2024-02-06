import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/candidate/jobs/jobs.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Recron Malaysia Careers',
        component: JobsComponent
    },
];
