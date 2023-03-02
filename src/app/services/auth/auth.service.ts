import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { currentUserValueModel } from 'src/app/models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject: BehaviorSubject<currentUserValueModel>;
public currentUser: Observable<currentUserValueModel> = null;
constructor(private http: HttpClient) {
  this.currentUserSubject = new BehaviorSubject<currentUserValueModel>(
    JSON.parse(localStorage.getItem('currentUser'))
  );
  this.currentUser = this.currentUserSubject.asObservable();
 }
 public get currentUserValue(): currentUserValueModel|null {
  return this.currentUserSubject?.value ||null
}
login(form: {
  email: string;
  password: string;
}): Observable<currentUserValueModel | HttpErrorResponse> {
  return this.http
    .post<currentUserValueModel>(`${environment.apiSocialWires}auth`, form)
    .pipe(
      map((user: currentUserValueModel) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
}
}
