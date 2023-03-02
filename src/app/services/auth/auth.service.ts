import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject: BehaviorSubject<any>;
public currentUser: Observable<any> = null;
constructor(private http: HttpClient) {
  this.currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('currentUser'))
  );
  this.currentUser = this.currentUserSubject.asObservable();
 }
 public get currentUserValue(): any {
  return this.currentUserSubject?.value ||null
}
login(form: {
  email: string;
  password: string;
}): Observable<any | HttpErrorResponse> {
  return this.http
    .post<any>(`${environment.apiSocialWires}auth`, form)
    .pipe(
      map((user: any) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
}
}
