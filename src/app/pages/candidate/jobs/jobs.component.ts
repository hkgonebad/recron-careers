import { Component, ElementRef, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { JobListingService } from '../../../services/job-listing/job-listing.service';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixStarFill, remixMapPin2Fill } from '@ng-icons/remixicon';

import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
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
  
  favorites: number[] = []; // Array to store favorite job ids
  @ViewChild('favoriteJobs')
  favoriteJobs!: TemplateRef<any>;

  constructor(private jobListingService: JobListingService){}
  toastService = inject(ToastService);

  ngOnInit(): void {
    this.jobListingService.getJobListings().subscribe((data) => {
      this.jobListings = data;
      console.log(this.jobListings)
      this.loadFavorites();
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

  addToFavorites(jobId: number): void {
    // Toggle job id in favorites array
    const index = this.favorites.indexOf(jobId);
    let message = '';
  
    if (index === -1) {
      this.favorites.push(jobId);
      this.saveFavorites();
      message = 'Added to Favorites';
    } else {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      message = 'Removed from Favorites';
    }
  
    this.showSuccess(this.favoriteJobs, message);
  }
  

  // Save favorites to localStorage
  saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  // Load favorites from localStorage
  loadFavorites(): void {
    const favoritesStr = localStorage.getItem('favorites');
    if (favoritesStr) {
      this.favorites = JSON.parse(favoritesStr);
    }
  }

  // Ads Image
  adsImg = 'assets/img/ad.svg'

  showSuccess(template: TemplateRef<any>, message: string) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000, message });
	}
  
}
