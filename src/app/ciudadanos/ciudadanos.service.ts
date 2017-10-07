import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CiudadanosService {
  constructor(private http: Http) {}

  getCiudadanos() {
    return this.http.get('https://my-json-server.typicode.com/rodrijuarez/tu-embajada-fe/ciudadanos');
  }
}
