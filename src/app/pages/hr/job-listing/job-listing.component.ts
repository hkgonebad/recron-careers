import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTypeaheadModule, NgbPaginationModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixEyeFill } from '@ng-icons/remixicon';

import { Job, JOBS } from '../jobs';



@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule, RouterModule, NgIconComponent],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
  providers: [provideIcons({ remixEyeFill }), NgbPaginationConfig],
})
export class JobListingComponent {

  page = 1;
	pageSize = 4;
	collectionSize = JOBS.length;
	jobs!: Job[];

  constructor(config: NgbPaginationConfig) {
		// customize default values of paginations used by this component tree
		config.size = 'sm';
		config.boundaryLinks = true;

    this.refreshJobs();
	}

	refreshJobs() {
		this.jobs = JOBS.map((job, i) => ({ id: i + 1, ...job })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
