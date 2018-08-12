import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  inquiryForm = new FormGroup({
    name : new FormControl(null, [Validators.required]),
    email : new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
    message : new FormControl(null, Validators.required)
  })
  mailInfo;
  send(){
    console.log(this.inquiryForm.value)
    this.mailInfo=this.inquiryForm.value;
  }
  ngOnInit() {
  }
}
