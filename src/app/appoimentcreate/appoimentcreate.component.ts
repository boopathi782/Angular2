import { Component, OnInit } from '@angular/core';
import { ApiService, Appointment } from '../api.service';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
 


declare var $ :any;


@Component({
  selector: 'app-appoimentcreate',
  templateUrl: './appoimentcreate.component.html',
  styleUrls: ['./appoimentcreate.component.css']
})
export class AppoimentcreateComponent implements OnInit {
  closeResult = '';
   modelvalue = {};
  data:any;
  MorningModel:[];
  Slot_result : any;
  filterargs_AN = {slot_mode: 'AN'};
  filterargs_FN = {slot_mode: 'FN'};
 

  Appointments: Appointment[] = [];


  model: NgbDateStruct;
  //date: {year: number, month: number};

  constructor( public rest: ApiService, private router: Router,private modalService: NgbModal, private calendar: NgbCalendar ) { }

  ngOnInit(): void { 
    this.model = this.calendar.getToday();
       console.log(this.model);
      var check_date =  this.model['year'] + '-' + this.model['month'] + '-' + this.model['day']
       this.getTimeSlot(check_date);  
  }

  onDateSelection($event){
    //console.log($event.year);
    var check_date =  $event.year + '-' + $event.month + '-' + $event.day;
    this.getTimeSlot(check_date);  

  }

  MorningForm(morningform) {
    // console.log( morningform.value);

    this.modelvalue['from_time'] = morningform.value['from_time']
    this.modelvalue['to_time'] = morningform.value['to_time']
    this.modelvalue['slot_mode'] = 'FN' //Fore noon
    this.modelvalue['date_value'] = this.model['year'] + '-' + this.model['month'] + '-' + this.model['day']; 
    // console.log(  this.modelvalue);
      this.rest.createSlot(this.modelvalue).subscribe((resp: any) => {  
        }), (err) => {
          console.log(err);
        };   
  }
  

  EveningForm(myform) {    
      // console.log(myform.value); 
      this.modelvalue['from_time'] = myform.value['evening_from_time']
      this.modelvalue['to_time'] = myform.value['evening_to_time']
      this.modelvalue['slot_mode'] = 'AN' //after noon    
      this.modelvalue['date_value'] = this.model['year'] + '-' + this.model['month'] + '-' + this.model['day']; 

      console.log(  this.modelvalue);

      this.rest.createSlot(this.modelvalue).subscribe((resp: any) => {  
      }), (err) => {
        console.log(err);
      }; 
    }

  getTimeSlot(check_date) { 
    
    // console.log("----------->>>"+check_date);

    this.rest.getAll(check_date).subscribe((result: any) => {
      // console.log('before component ' + JSON.stringify(resutlt)); 

      this.Slot_result = result.result
    // var value = JSON.stringify(result);

    /*  var resultArray = Object.keys(result).map(function(personNamedIndex){
      let person = result[personNamedIndex];
      // do something with person
      return person;
  }); */

 // this.users = resultArray;

      
      //console.log("-----------Appointments----------->>>"+resultArray);

      ///this.Appointments = resutlt.resutlt;
     
    });
  }

}
