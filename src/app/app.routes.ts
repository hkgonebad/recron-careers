import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/candidate/jobs/jobs.component';
import { JobDetailComponent } from './pages/candidate/job-detail/job-detail.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Recron Malaysia Careers',
        component: JobsComponent,
    },
    {
        path: 'job/:id',
        title: '',
        component: JobDetailComponent
    }
    
];
