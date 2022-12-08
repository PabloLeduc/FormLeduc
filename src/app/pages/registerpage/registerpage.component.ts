import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
nombre = new FormControl('',[Validators.required])
apellido = new FormControl('',[Validators.required])
email = new FormControl('', [Validators.required,Validators.email])
contrasena = new FormControl('',[Validators.required])
repitecontrasena = new FormControl('',[Validators.required])


registerform = new FormGroup({
  nombre: this.nombre,
  apellido: this.apellido,
  email: this.email,
  contrasena: this.contrasena,
  repitecontrasena: this.repitecontrasena,
},{
  validators:[
  this.validarcontrasena()
  ]
})

validarcontrasena() {
  return () => {
    if(this.contrasena.value !== this.repitecontrasena.value) {
      return  {
        validarcontrasena: true
      }
    }
    return null
    }
  }
  onSubmit() {
    console.log(this.registerform.value)
  }
}
