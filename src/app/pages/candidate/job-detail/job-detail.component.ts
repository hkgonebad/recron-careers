import { Component, OnInit } from '@angular/core';
import { JobListingService } from '../../../services/job-listing.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftLine } from '@ng-icons/remixicon';

interface IJobDetail {
  id: number;
  postedDate: string;
  jobFunction: string;
  jobTitle: string;
  jobLocation: string;
  required: {
    experience: string;
    education: string;
    skills: string[];
  };
  url: string;
  jobDescription: string[];
}

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgFor, NgIf, NgIconComponent, RouterLink],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
  providers: [provideIcons({remixArrowLeftLine})]
})
export class JobDetailComponent implements OnInit {
  jobId!: number;
  jobDetails: IJobDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobListingService: JobListingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Convert the parameter to a number
      this.jobListingService.getJobDetails(this.jobId).subscribe(jobDetails => {
        this.jobDetails = jobDetails;
        console.log('Job Details:', this.jobDetails);
      });
    });
  }
  
}
