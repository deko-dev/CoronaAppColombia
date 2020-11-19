import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {

  reporte:any;

  constructor(
    private _data:DataService
  ) { 
    this._data.cargarData()
        .subscribe( (response)=> {
          this.reporte = response;
        } );  
  }

  ngOnInit(): void {
  }

}
