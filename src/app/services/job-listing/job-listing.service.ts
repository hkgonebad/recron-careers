import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  private jobListingsUrl = 'assets/json/job-listings.json';
  private jobListings$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.jobListings$ = this.http.get<any[]>(this.jobListingsUrl);
  }

  getJobListings(): Observable<any[]> {
    return this.jobListings$;
  }

  getJobDetails(jobId: number): Observable<any> {
    return this.jobListings$.pipe(
      map((jobListings: any[]) => jobListings.find(job => job.id === jobId))
    );
  }
}
