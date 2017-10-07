import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmbajadoresService {
  constructor(private http: Http) {}

  getEmbajadores() {
    return this.http.get('https://my-json-server.typicode.com/rodrijuarez/tu-embajada-fe/embajadores');
  }
}
