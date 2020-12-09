import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns : string[] =['name'];


  constructor() { 
    
  }

  ngOnInit() {
    this.getRemoteData();
  }
  getRemoteData() {
    const remoteDummyData=[
      {"name": "Computing"},
      {"name":"Early years"},
      {"name":"News"}
    ];
    this.dataSource.data = remoteDummyData;
  }

}
