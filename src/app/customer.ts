 export class Customer{
    Id!: string;
  Siteid!: string;
  Location!: string;
  Plant!: string;
  Subunit!:string;
}



// {"pageCount":1237,"currentPage":1,"processId":1,"subProcessId":6,"jobId":109,
// "fieldsToDisplay":{"Id":"Id","Siteid":"SiteId","Location":"Location","Plant":"Plant","Subunit":"Subunit",
// "Location Description":"Location Description","Equipment/System":"Equipment/System","Critical by Related Location":"Critical by Related Location",
// "Critical by System Description":"Critical by System Description","Critical by Red. Location":"Critical by Red. Location",
// "Location Criticality Rank":"Location Criticality Rank","Remarks":"Remarks"},
// "editableFields":["Location Criticality Rank","Remarks"],"filePrefix":"Location_Rank_By_Calculate_Rank",
// "downloadUrl":"https://2nnv-fp502-gap-analysis.s3.amazonaws.com/location-criticality/PCC/location-rank-by-consist-loc/109/Location_Rank_By_Calculate_Rank1630585192777.csv?X-Amz-Security-Token=FwoGZXIvYXdzEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDD7Gn1dY7RedZFS7PSLYAU%2FVIyEX2XymR4y9edU9rV%2Bb%2BYIkG5NxTUyqKjG1p92VrZTGETgztpB3NAUgayz47yMoeMS8T4klCZ%2FKBwe0znUCHoodTjVt43r%2BocXgdUOI4ocxBshHBRDLaSGC1CK7yKH0thZT%2BrNJ3BPAxjcRy0ZVx8FVO6LeTOtNgNq9Qngrc3gk%2BfnZtXMAhzivFr2j6hQ3WPPxSckx0xgGwZWlLVzKgXkXcO69ArfhBm1ST9aj%2FjH0XZWyFhFUc5GhqxVOCmzx6Oc%2Bwsoys0lkh1UplkMTw7jpOQNXYyitx8eJBjIyU6oHIBfZxQw7ipE9Ih%2BReuNPBfs5dYuenynNVMCoZY%2Fp4RjZoUg5PqR54oNeHDBbaeM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210903T124852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=ASIA2VMNK6UZ3B5RZ45T%2F20210903%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f8bdfdc83ddbbf2636a7fee774fbe33a8e2219a5adedd482efcb3668c67829ee",
// "resultDetails":{"totalRecords":12368,"startRowCount":0,"endRowCount":9,"fileName":"location-criticality/PCC/location-rank-by-consist-loc/109/Location_Rank_By_Calculate_Rank1630585192777.csv",
//                 "fileType":null,
//                 "records":[
//                     {"Id":"1","Siteid":"PCC","Location":"30GSO-PCV-001","Plant":"PCC3","Subunit":"30.0","Fleet System":"GE","Location Description":"SEAL OIL DIFFERENTIAL PRESSURE REGULATING VALVE","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"test","EX1LOCPRODIMPACT":"3) Loss of Unit (Block incl. all subunits)"},
//                     {"Id":"2","Siteid":"PCC","Location":"30SCW-PCV-006","Plant":"PCC3","Subunit":"30.0","Fleet System":"GE","Location Description":"Stator Cooling Water Pressure Control Valve","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"3) Loss of Unit (Block incl. all subunits)"},
//                     {"Id":"3","Siteid":"PCC","Location":"30SCW-TCV-003","Plant":"PCC3","Subunit":"30.0","Fleet System":"GE","Location Description":"Stator Cooling Water Temperature Control Valve","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"3) Loss of Unit (Block incl. all subunits)"},
//                     {"Id":"4","Siteid":"PCC","Location":"3FWC-FCV-0228-01","Plant":"PCC3","Subunit":"30.0","Fleet System":"CN","Location Description":"CONDENSATE PUMP RECIRCULATION CRITICAL CONTROL VALVE","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"3) Loss of Unit (Block incl. all subunits)"},
//                     {"Id":"5","Siteid":"PCC","Location":"30GSS-GSC","Plant":"PCC3","Subunit":"30.0","Fleet System":"ST","Location Description":"Gland Steam Condenser","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"3) Loss of Unit (Block incl. all subunits)"},
//                     {"Id":"6","Siteid":"PCC","Location":"30PNL-OPS","Plant":"PCC3","Subunit":"30.0","Fleet System":"CM","Location Description":"D-EHC Operator Station","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"0) No Production Impact"},
//                     {"Id":"7","Siteid":"PCC","Location":"30SCW-PIC-006","Plant":"PCC3","Subunit":"30.0","Fleet System":"CM","Location Description":"Stator Cooling Water Pressure Control","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"0) No Production Impact"},
//                     {"Id":"8","Siteid":"PCC","Location":"30SCW-TIC-003","Plant":"PCC3","Subunit":"30.0","Fleet System":"CM","Location Description":"Stator Cooling Water Temp Control","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"0) No Production Impact"},
//                     {"Id":"9","Siteid":"PCC","Location":"30SCW-TICW-003","Plant":"PCC3","Subunit":"30.0","Fleet System":"CM","Location Description":"Stator Cooling Water Temp Control","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"0) No Production Impact"},
//                     {"Id":"10","Siteid":"PCC","Location":"30EHC-EHOC(A)","Plant":"PCC3","Subunit":"30.0","Fleet System":"ST","Location Description":"EHC Oil Cooler (A)","Equipment/System":"equipment","Critical by Related Location":"0","Critical by System Description":"0","Critical by Red. Location":"0","Location Criticality Rank":"0) No Production Impact","Remarks":"","EX1LOCPRODIMPACT":"0) No Production Impact"}
//                     ]
//                 }
// }
