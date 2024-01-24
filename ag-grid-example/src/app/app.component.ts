import { Component, OnInit } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { HttpClient } from '@angular/common/http';
import { CompanyLogoRendererComponent } from './company-logo-renderer/company-logo-renderer.component';

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  price: number;
  successful: boolean;
  rocket: string;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1>Welcome to {{title}}!</h1> -->
    <!-- The AG Grid component -->
  <ag-grid-angular
  class="ag-theme-quartz"
  style="width: 100%; height: 750px;"
    [rowData]="rowData"
    [columnDefs]="colDefs"
    [defaultColDef]="defaultColDef"
    (gridReady)="onGridReady($event)"
    [pagination]="true">
    
  </ag-grid-angular>
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: []
})
export class AppComponent{

  constructor(private http: HttpClient) { };

  // rowData: IRow[] = [
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  // ];

  // Column Definitions: Defines & controls grid columns.
  // colDefs: ColDef<IRow>[] = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" }
  // ];

  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    { field: "mission" },
    { field: "company", cellRenderer: CompanyLogoRendererComponent },
    { field: "location" },
    { field: "date" },
    {field: "price", valueFormatter: params => { return '£' + params.value.toLocaleString(); }},
    {field: "successful"},
    {field: "rocket"}
  ];

  defaultColDef: ColDef = {
    filter: true
  }
  
  onGridReady(params: GridReadyEvent) {
    
    this.http.get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json').subscribe(
      
    data => this.rowData = data
      // console.log('Data from API:', data)  
  );
  }
  
}
