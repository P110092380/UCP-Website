import { Component} from '@angular/core';
import {OpenDay} from '../open-day/open-day.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  topic = ['Business and Professional', 'Social Sciences', 'Creative Industries', 'Education and Teaching', 'Science and Technology'];
  model = new OpenDay('Enter your name',123, 'enter your email','enter your home address', 'enter current subjects');
  submitted = false;
  onSubmit() {this.submitted = true;}
  get diagnostic() {return JSON.stringify(this.model);}

  newOpenDay() {
    this.model = new OpenDay('',123, '','', '');
  }
}
