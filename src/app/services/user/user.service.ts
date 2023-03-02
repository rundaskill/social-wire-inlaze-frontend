import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpGood } from 'src/app/models/http/http.interface';
import { UserModel } from 'src/app/models/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

postUser(user:UserModel):Observable<HttpGood<UserModel>>{
 return this.http.post<HttpGood<UserModel>>(`${environment.apiSocialWires}user`,user)
}
}
