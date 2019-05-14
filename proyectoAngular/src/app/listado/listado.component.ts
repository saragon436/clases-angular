import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrar: boolean = true
  recetas:Array<{}>

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()

  // recetas: Array<object> = [
  //   { titulo: "usuario 1", descripcion: "area 1" },
  //   { titulo: "usuario 2", descripcion: "area 1" },
  //   { titulo: "usuario 3", descripcion: "area 1" },
  //   { titulo: "usuario 4", descripcion: "area 3" }
  // ]

  constructor(private dataService: DataService) { 

    
  }

  ngOnInit() {
    this.recetas=this.dataService.listar();
    this.dataService.onCambioData
    .subscribe(
      elementos => this.recetas = elementos
    )
  }

  ingresar() {
    /* alert(this.usuario + " " + this.contrasena) */
    this.mostrar
    this.onLogin.emit(this.mostrar);
  }

  // eliminar(indice:number){
  //   this.recetas.splice(indice, 1)
  //   console.log(indice);
  // }

}
