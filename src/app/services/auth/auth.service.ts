import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentUserValueModel } from 'src/app/models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject: BehaviorSubject<CurrentUserValueModel>;
public currentUser: Observable<CurrentUserValueModel> = null;
constructor(private http: HttpClient) {
  this.currentUserValue=JSON.parse(localStorage.getItem('currentUser'))

  this.currentUser = this.currentUserSubject.asObservable();
 }
 public get currentUserValue(): CurrentUserValueModel|null {
  return this.currentUserSubject?.value ||null
}
public set currentUserValue(token){
  this.currentUserSubject = new BehaviorSubject<CurrentUserValueModel>(
    token
  );
}
login(form: {
  email: string;
  password: string;
}): Observable<CurrentUserValueModel | HttpErrorResponse> {
  return this.http
    .post<CurrentUserValueModel>(`${environment.apiSocialWires}auth`, form)
    .pipe(
      map((user: CurrentUserValueModel) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
}
logout(){
  localStorage.removeItem("currentUser")
  this.currentUserValue=null
}
}
