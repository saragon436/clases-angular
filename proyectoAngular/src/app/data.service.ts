import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService{
    onCambioData: EventEmitter<Array<{}>> = new EventEmitter<Array<{}>>()

    private data:Array<{}>=[
        {titulo:"arroz con pollo",descripcion:"plato tradicional norteño"},
        {titulo:"causa",descripcion:"plato tradicional centro"}
    ]

    constructor(){}

    listar(){
        return this.data;
    }

    eliminar(indice: number){
        if(confirm("desea eliminar ?")){
            this.data.splice(indice,1);
        }
        this.onCambioData.emit(this.data)
    }
}