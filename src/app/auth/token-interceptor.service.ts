import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: any, next: any){
    if(this.getToken() != null){
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
    else{
      let tokenizedReq = req.clone({
        setHeaders: {
        }
      })
      return next.handle(tokenizedReq)
    }
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
