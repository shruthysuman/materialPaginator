import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import {  MatPaginator } from '@angular/material/paginator';


import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    totalRecords: number = 50;
    // length1!:number;
    // length2!:number;
    pageIndex:number = 0;
    postsperpage: number = 10;
    pageSizeOptions = [2, 5, 10, 50];
    splitRecVal:number = 25;
    pageEvent: PageEvent = new PageEvent;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    displayedColumns = ["Id", "Siteid", "Location", "Plant"];

  ELEMENT_DATA: Element[] = [
    {"Id":1,"Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0"},
    {"Id":2,"Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":3,"Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":4,"Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0"},
    {"Id":5,"Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0"},
    {"Id":6,"Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0"},
    {"Id":7,"Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":8,"Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":9,"Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":10,"Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0"},
    {"Id":11,"Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0"},
    {"Id":12,"Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":13,"Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":14,"Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0"},
    {"Id":15,"Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0"},
    {"Id":16,"Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0"},
    {"Id":17,"Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":18,"Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":19,"Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":20,"Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0"},  
    {"Id":21,"Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0"},
    {"Id":22,"Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":23,"Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":24,"Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0"},
    {"Id":25,"Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0"},
    {"Id":26,"Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0"},
    {"Id":27,"Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":28,"Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":29,"Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":30,"Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0"},
    {"Id":31,"Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0"},
    {"Id":32,"Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":33,"Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":34,"Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0"},
    {"Id":35,"Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0"},
    {"Id":36,"Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0"},
    {"Id":37,"Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":38,"Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":39,"Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":40,"Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0"},
    {"Id":41,"Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0"},
    {"Id":42,"Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":43,"Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":44,"Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0"},
    {"Id":45,"Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0"},
    {"Id":46,"Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0"},
    {"Id":47,"Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0"},
    {"Id":48,"Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":49,"Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0"},
    {"Id":50,"Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0"}                                     

  ];
  dataSource = new MatTableDataSource<Element>();
  fetched_records: any;
    
  constructor(private apiService:ApiCallsService) {}
  
  ngOnInit() {
    console.log("at  ngOnInit() ");
    this.dataSource.paginator = this.paginator;
    this. splitTotalrecords();
    // this.nextApiCall();
    }

    splitTotalrecords(){
    //   var length1 = this.ELEMENT_DATA.slice(0,25);
    //  console.log("this.length1 @splitTotalrecords() = ",length1);
    //   var length2 = this.ELEMENT_DATA.slice(25,50);
    //   console.log("this.length2 @splitTotalrecords() = ",length2);
      
      for(let j=0;j<this.totalRecords;j++){
        console.log("this.total[j].Id = ",this.ELEMENT_DATA[j].Id);
        if(this.ELEMENT_DATA[j].Id >= this.splitRecVal){
            this.nextApiCall();
        }
      }
    }

    nextApiCall(){
      console.log("@nextApiCall = ");
      this.apiService.getUserData().subscribe({
        next: res => {console.log("no url")},
        error: nextApiCallRec => {
          console.log("next 25 records  = ",);
        }
      }); 
 } 

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    // console.log("paginator=",this.paginator);
  }

  pageChanged(event: PageEvent) {

    const ELEMENT_DATA = [...this.ELEMENT_DATA];
    // console.log("...Input records",ELEMENT_DATA);

    for(let i=0;i<=event.pageSize-1;i++){
      const fetched_records = ELEMENT_DATA[i];
    }
    // console.log("dataSource.data.push(this.fetched_records)",this.dataSource.data.push(this.fetched_records));
  }
}

export interface Element {
  Id: number;
  Siteid: string;
  Location: string;
  Plant: string;
  Subunit:string;
}


// export class HomeComponent implements OnInit {

//   totalPosts = 100;
//   postsperpage:number = 0;
//   pageSizeOptions = [5, 10, 50, 100];
//   pageEvent: PageEvent = new PageEvent;

//   ngOnInit(){

//     var customer = {
//       "id": 1,
//       "firstName": "First name",
//       "lastName": "Last name",
//       "email": "name@email.com",
//       "phone": "(387) 592-6773",
//       "city": "City",
//       "country": "Country",
//       "title": "Title"
//     }

//     this.apiService.createCustomer(customer).subscribe({
//       next: res => {
//       console.log("Created a customer", res);
//       },
//       error: error => {
//       console.log("customers added");
//       }
//   })
// }

// }


