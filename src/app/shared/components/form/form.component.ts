import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'Formulario';
  firstName:string;
  secondName:string;
  phone:string;
  dni:string;

  showInConsole(): void{
    console.log('firstName:', this.firstName);
    console.log('secondName:', this.secondName);
    console.log('phone:', this.phone);
    console.log('dni:', this.dni);
  }
}
