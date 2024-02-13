import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/candidate/jobs/jobs.component';
import { JobDetailComponent } from './pages/candidate/job-detail/job-detail.component';
import { HrLayoutComponent } from './pages/hr/hr-layout/hr-layout.component';
import { CreateJobComponent } from './pages/hr/create-job/create-job.component';
import { JobListViewComponent } from './pages/hr/job-list-view/job-list-view.component';
import { HrJobsComponent } from './pages/hr/hr-jobs/hr-jobs.component';

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
    },
    {
        path: 'hr',
        title: 'HR | Recron Malaysia Careers',
        component: HrLayoutComponent,
        children: [
            {
                path: 'jobs',
                component: HrJobsComponent
            },
            {
                path: 'create-job',
                component: CreateJobComponent
            },
            {
                path: 'view-job',
                component: JobListViewComponent
            },
        ]
    }
    
];
