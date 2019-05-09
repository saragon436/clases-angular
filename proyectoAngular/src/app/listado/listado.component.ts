import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrar: boolean = true

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()

  recetas: Array<object> = [
    { titulo: "usuario 1", descripcion: "area 1" },
    { titulo: "usuario 2", descripcion: "area 1" },
    { titulo: "usuario 3", descripcion: "area 1" },
    { titulo: "usuario 4", descripcion: "area 3" }
  ]

  constructor() { }

  ngOnInit() {
  }

  ingresar() {
    /* alert(this.usuario + " " + this.contrasena) */
    this.mostrar
    this.onLogin.emit(this.mostrar);
  }

  eliminar(indice:number){
    this.recetas.splice(indice, 1)
    console.log(indice);
  }

}
