import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../data-type';
import { BehaviorSubject, map, observeOn } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    this.http.post('https://cycle-shop-885b9-default-rtdb.firebaseio.com/seller.json',
      data,
      { observe: 'response' }).subscribe((result) => {
        console.warn(result)
        if (result) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-auth'])
        }
      })
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-auth'])
    }
  }
  fetchSeller(){
    return this.http.get<{[key: string]: signUp}>('https://cycle-shop-885b9-default-rtdb.firebaseio.com/seller.json')
    .pipe(map((res) => {
      const signUp = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          signUp.push({...res[key], id: key})
        }
      }
      return signUp;
    }))
  }
  userLogin(data:login) {
    this.http.get(`https://cycle-shop-885b9-default-rtdb.firebaseio.com/seller.json?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.warn(result)
        if (result && result.body && result.body.length) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
        } else {
          console.warn("login failed");
          this.isLoginError.emit(true)
        }
      })
  }
}