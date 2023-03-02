import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterListMessageModel, ListMessageModel } from 'src/app/models/message/message.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private path="mensajes"
  constructor(private http: HttpClient) { }
  getAllMessage():Observable<ListMessageModel[]>{
    return this.http.get<ListMessageModel[]>(`${environment.apiSocialWires}${this.path}`)
  }
  filterMessage(filter:FilterListMessageModel):Observable<ListMessageModel[]>{
    return this.http.get<ListMessageModel[]>(`${environment.apiSocialWires}${this.path}`,
    {
      params:{
        ...filter
      }
    })
  }
}
