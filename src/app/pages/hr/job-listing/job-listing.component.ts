import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixEyeFill } from '@ng-icons/remixicon';

interface Job {
  jobId?: string;
  jobFunction: string;
  jobLocation: string;
  jobPost: string;
  experience: string;
  positions: number;
  fulfilledPositions: number;
  openPositions: number;
  receivedApplications: number;
  availableApplications: number;
  action?: string;
  status: string;
}

const JOBS: Job[] = [
  {
    jobId: '1J001',
    jobFunction: 'IT',
    jobLocation: 'Nilai',
    jobPost: 'Analyst',
    experience: '12 - 15',
    positions: 5,
    fulfilledPositions: 2,
    openPositions: 5,
    receivedApplications: 20,
    availableApplications: 5,
    action: '',
    status: 'Open',
  },
  {
    jobId: '1J002',
    jobFunction: 'IT',
    jobLocation: 'Nilai',
    jobPost: 'Analyst',
    experience: '12 - 15',
    positions: 5,
    fulfilledPositions: 2,
    openPositions: 5,
    receivedApplications: 20,
    availableApplications: 5,
    action: '',
    status: 'Open',
  },
  {
    jobId: '1J003',
    jobFunction: 'IT',
    jobLocation: 'Nilai',
    jobPost: 'Analyst',
    experience: '12 - 15',
    positions: 5,
    fulfilledPositions: 2,
    openPositions: 5,
    receivedApplications: 20,
    availableApplications: 5,
    action: '',
    status: 'Open',
  },
  {
    jobId: '1J004',
    jobFunction: 'IT',
    jobLocation: 'Nilai',
    jobPost: 'Analyst',
    experience: '12 - 15',
    positions: 5,
    fulfilledPositions: 2,
    openPositions: 5,
    receivedApplications: 20,
    availableApplications: 5,
    action: '',
    status: 'Open',
  },
];


@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule, RouterModule, NgIconComponent],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
  viewProviders: [provideIcons({ remixEyeFill })],
})
export class JobListingComponent {

  page = 1;
	pageSize = 4;
	collectionSize = JOBS.length;
	jobs!: Job[];

	constructor() {
		this.refreshJobs();
	}

	refreshJobs() {
		this.jobs = JOBS.map((job, i) => ({ id: i + 1, ...job })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
