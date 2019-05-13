import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuForm: FormGroup

  constructor() {
    this.menuForm = this.createFormGroup()

  }


  createFormGroup() {
    return new FormGroup({
      roastBeef: new FormGroup({
        orderSize: new FormControl(),
        orderQuantity: new FormControl(),



      }),
      roastPork: new FormGroup({
        orderSize: new FormControl(),
        orderQuantity: new FormControl(),

      }),
      roastDuck: new FormGroup({
        orderSize: new FormControl(),
        orderQuantity: new FormControl(),
      }),
      breadedPork: new FormGroup({
        orderSize: new FormControl(),
        orderQuantity: new FormControl(),
      }),
      chickenLivers: new FormGroup({
        orderSize: new FormControl(),
        orderQuantity: new FormControl(),
      })
    })
  }



  menuSubmit() {
    console.log(this.menuForm.value)
  }



  ngOnInit() {
  }

}
