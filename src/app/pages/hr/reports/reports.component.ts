import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixFile2Fill, remixMapPinFill } from '@ng-icons/remixicon';

import {ReportData, PositionFilledFunctionData, PositionFilledLocationData, reportsData, functionData, locationData} from '../reports'

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  providers: [provideIcons({remixFile2Fill, remixMapPinFill})]
})
export class ReportsComponent {

  reportsData: ReportData[] = reportsData;
  functionData: PositionFilledFunctionData[] = functionData;
  locationData: PositionFilledLocationData[] = locationData;
  
}
