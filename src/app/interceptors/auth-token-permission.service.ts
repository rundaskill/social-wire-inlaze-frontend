import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenPermissionService  implements  HttpInterceptor {
  headers: HttpHeaders = new HttpHeaders({});
constructor(private messageService: MessageService,public authService:AuthService) { }
intercept(req: HttpRequest<any>, next: HttpHandler) {
  if (req.url.indexOf("/auth") > -1) {
    return next.handle(req);
  }
  const TOKEN=JSON.parse(localStorage.getItem("currentUser"))?.access_token
  if (TOKEN) {
    this.headers=new HttpHeaders({
      'Authorization':`Bearer ${TOKEN}`
    })
  }
  let reqClone:any;
  if (req.body != null) {
    reqClone = req.clone({
      headers: this.headers,
      body: req.clone().body,
    });
  }else{
    reqClone = req.clone({
      headers: this.headers,
    });
  }
  return next.handle(reqClone).pipe(
    catchError((err)=>{
      if (err.status === 401 ) {
        this.authService.currentUserValue=null
        this.messageService.add({severity:"error", summary: 'Error', detail: 'Ups, No se pudo comunicar al servidor', life: 5000}) 

      }
      if (err.status ===0) {
        this.messageService.add({severity:"error", summary: 'Error', detail: 'Ups, No se pudo comunicar al servidor', life: 5000}) 
        return throwError(()=>{
         
          return { "message":"Ups, No se pudo comunicar al servidor",status:0}

        });
      }
      return throwError(()=>err);
    })
  )
}
}

