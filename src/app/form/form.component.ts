import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submitOpenDay (form: { value: any; reset: () => void; }){ 
    console.log(form.value);
    alert("the form was submitted");
    form.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }
  getValues(value)
  {
    console.log(value)
  }
}
