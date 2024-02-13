import { Component, OnInit, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [DataTablesModule, DataTableDirective ],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
  providers: []
})
export class JobListingComponent implements OnInit {

  message = '';
  dtOptions: DataTables.Settings = {};

  constructor() { }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        // Note: In newer jQuery v3 versions, `unbind` and `bind` are 
        // deprecated in favor of `off` and `on`
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }
}
