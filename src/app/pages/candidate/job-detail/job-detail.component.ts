import { Component, OnInit } from '@angular/core';
import { JobListingService } from '../../../services/job-listing.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftLine, remixStarFill } from '@ng-icons/remixicon';
import { Title } from '@angular/platform-browser';


interface IJobExperience {
  experience: string;
}

interface IJobEducation {
  education: string;
}

interface IJobSkills {
  skills: string[];
}

interface IJobDetail {
  id: number;
  postedDate: string;
  jobFunction: string;
  jobTitle: string;
  jobLocation: string;
  required: (IJobExperience | IJobEducation | IJobSkills)[];
  url: string;
  jobDescription: string[];
}

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgFor, NgIf, NgIconComponent, RouterLink],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
  providers: [provideIcons({remixArrowLeftLine, remixStarFill})]
})
export class JobDetailComponent implements OnInit {
  jobId!: number;
  jobDetails: IJobDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobListingService: JobListingService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Convert the parameter to a number
      this.jobListingService.getJobDetails(this.jobId).subscribe(jobDetails => {
        this.jobDetails = jobDetails;
        this.updateDocumentTitle();
        console.log('Job Details:', this.jobDetails);
      });
    });
  }

  isJobExperience(item: IJobExperience | IJobEducation | IJobSkills): item is IJobExperience {
      return 'experience' in item;
  }

  isJobEducation(item: IJobExperience | IJobEducation | IJobSkills): item is IJobEducation {
      return 'education' in item;
  }

  isJobSkills(item: IJobExperience | IJobEducation | IJobSkills): item is IJobSkills {
      return 'skills' in item;
  }

  private updateDocumentTitle(): void {
    if (this.jobDetails && this.jobDetails.jobTitle) {
      this.titleService.setTitle(`${this.jobDetails.jobTitle} | Recron Careers`);
    }
  }
  
}
