import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  regForm: FormGroup
  


  constructor(private registrationService: RegistrationService) { 
this.regForm = this.createFormGroup()
console.log(this.regForm.controls)
  }

createFormGroup() {
  let zip = /^\d{5}(?:[-\s]\d{4})?$/
  let phoneNumber = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/

  return new FormGroup({
    
      firstName: new FormControl('', [Validators.required,]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(phoneNumber)]),
      streetAddress: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required, Validators.pattern(zip)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      passwordConfirm: new FormControl('', [Validators.required]),
      
    },{validators:[this.passwordMatch]})

  

  
}
passwordMatch = function(control: FormGroup) {
    let pswd = control.get('password');
    let confirm = control.get('passwordConfirm');
    if(!pswd.value && !confirm.dirty && confirm.untouched){
      return null;
    }
    return (pswd.value === confirm.value) ? null : { 'mismatch': true };
}
regSubmit(){
  if(this.regForm.valid){
  this.registrationService.regSubmit(this.regForm.value).subscribe(res => console.log(res))
}

}
  
  
      


ngOnInit() {
}
}
    
