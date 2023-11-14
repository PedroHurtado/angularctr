import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    nif: new FormControl(''),
  });
  onSubmit(){
    console.log(this.profileForm.value)
  }
}
