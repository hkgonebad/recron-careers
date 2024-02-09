import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { JobListingService } from '../../../services/job-listing/job-listing.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowLeftLine, remixStarFill } from '@ng-icons/remixicon';
import { Title } from '@angular/platform-browser';
import { FavoriteService } from '../../../services/favorite/favorite.service';
import { ToastService } from '../../../components/toast/toast.service';


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
  postedDate: Date;
  jobFunction: string;
  jobTitle: string;
  jobLocation: string;
  jobPositions: number;
  jobPost: string;
  required: (IJobExperience | IJobEducation | IJobSkills)[];
  url: string;
  jobDescription: string[];
}

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgIconComponent, RouterLink],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
  providers: [provideIcons({remixArrowLeftLine, remixStarFill})]
})
export class JobDetailComponent implements OnInit {
  jobId!: number;
  jobDetails: IJobDetail | undefined;
  favorites: number[] = []; 

  @ViewChild('favoriteJobs')
  favoriteJobs!: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private jobListingService: JobListingService,
    private titleService: Title,
    private toastService: ToastService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Convert the parameter to a number
      this.jobListingService.getJobDetails(this.jobId).subscribe(jobDetails => {
        this.jobDetails = jobDetails;
        this.loadFavorites();
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

  // Favorites
  addToFavorites(jobId: number): void {
    const updatedFavorites = this.favoriteService.toggleFavorite(jobId);
    const message = updatedFavorites.includes(jobId) ? 'Added to Favorites' : 'Removed from Favorites';
    this.loadFavorites();
    this.showSuccess(this.favoriteJobs, message);
  }

  loadFavorites(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

  showSuccess(template: TemplateRef<any>, message: string) {
    this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000, message });
  }

  // Update Title
  private updateDocumentTitle(): void {
    if (this.jobDetails && this.jobDetails.jobTitle) {
      this.titleService.setTitle(`${this.jobDetails.jobTitle} | Recron Careers`);
    }
  }
  
}
