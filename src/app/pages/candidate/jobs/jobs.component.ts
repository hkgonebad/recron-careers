import { Component, OnInit } from '@angular/core';
import { JobListingService } from '../../../services/job-listing.service';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixStarFill, remixMapPin2Fill } from '@ng-icons/remixicon';

import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface IJobExperience {
  experience: string;
}

interface IJobEducation {
  education: string;
}

interface IJobSkills {
  skills: string[];
}

interface IJobListing {
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
  selector: 'app-jobs',
  standalone: true,
  imports: [NgIconComponent, RouterModule, NgFor, NgIf],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  providers: [provideIcons({remixStarFill, remixMapPin2Fill})]
})
export class JobsComponent implements OnInit {

  jobListings: IJobListing[] = []
  constructor(private jobListingService: JobListingService){}

  ngOnInit(): void {
    this.jobListingService.getJobListings().subscribe((data) => {
      this.jobListings = data;
      console.log(this.jobListings)
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

  
}
