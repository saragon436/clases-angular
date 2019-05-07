import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuaio:string;
  conrasena:string;
  ocultar: boolean = true
  muestra: boolean = true

  recetas: Array<object> = [
    { titulo: "usuario 1", descripcion: "area 1" },
    { titulo: "usuario 2", descripcion: "area 1" },
    { titulo: "usuario 3", descripcion: "area 1" },
    { titulo: "usuario 4", descripcion: "area 3" }
  ]

  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    alert(this.usuaio + ' ' +this.conrasena)
  }
}
