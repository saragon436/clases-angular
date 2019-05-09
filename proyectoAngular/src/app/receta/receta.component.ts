import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() recetas: {}
  @Output() onSalida: EventEmitter<number> = new EventEmitter<number>()
  @Input() indice: number


  constructor() { }

  ngOnInit() {
  }

  eliminar(){
    this.onSalida.emit(this.indice)
  }

}
