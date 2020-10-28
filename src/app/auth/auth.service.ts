import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _userIsAuthentificated = true;

  get userIsAuthenticated(){
    return this._userIsAuthentificated;
  }

  constructor() { }

  login(){
    this._userIsAuthentificated = true;
  }

  logout(){
    this._userIsAuthentificated = false;
  }
}
