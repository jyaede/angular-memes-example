import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Meme } from './meme';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Collection } from './collection';
import { CreateCollection } from './create-collection';

@Injectable()
export class MemesService {

  private baseUrl = environment.api + '/memes';

  constructor(private http: Http) { }

  public available(): Observable<Meme[]> {
    return this.http.get(this.baseUrl + '/available')
      .map(res => res.json() || []);
  }

  public create(data: CreateCollection): Observable<Collection> {
    return this.http.post(this.baseUrl + '/collection', data)
      .map(res => res.json());
  }

  public collection(): Observable<Collection[]> {
    return this.http.get(this.baseUrl + '/collection')
      .map(res => res.json() || []);
  }

  public get(id: string): Observable<Collection> {
    return this.http.get(this.baseUrl + '/collection/' + id)
      .map(res => res.json());
  }

  public delete(id: string): Observable<null> {
    return this.http.delete(this.baseUrl + '/collection/' + id);
  }

}
