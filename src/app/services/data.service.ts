import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string  = ` https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=*&f=json`

  datos:any[] = [];
  cargando = false;
  constructor(
    private http : HttpClient
  ) { }



  cargarData(){

    this.cargando = true;
    return this.http.get( this.url )
                .pipe(
                  map( (response:any) => {
                    this.datos = response.features[ response.features.length - 1 ].attributes;
                    setTimeout(()=> this.cargando = false , 1500)
                    return this.datos;
                  } )
                )
  


  }


}
