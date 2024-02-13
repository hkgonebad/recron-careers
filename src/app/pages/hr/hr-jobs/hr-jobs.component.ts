import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportsComponent } from "../reports/reports.component";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { DropBoxListingComponent } from "../drop-box-listing/drop-box-listing.component";


@Component({
    selector: 'app-hr-jobs',
    standalone: true,
    templateUrl: './hr-jobs.component.html',
    styleUrl: './hr-jobs.component.scss',
    imports: [NgbNavModule, ReportsComponent, JobListingComponent, DropBoxListingComponent]
})
export class HrJobsComponent {
  active = 1;
}
