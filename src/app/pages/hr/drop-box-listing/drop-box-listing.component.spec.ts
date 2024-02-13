import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropBoxListingComponent } from './drop-box-listing.component';

describe('DropBoxListingComponent', () => {
  let component: DropBoxListingComponent;
  let fixture: ComponentFixture<DropBoxListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropBoxListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
