import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  private state: boolean;
  loginData;
  login(value) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/api/auth/login', value, { headers: headers })
      .map(v => v.json())
      .subscribe(subs => this.loginData = subs);
  }
  get State() {
    return true; // query the server here
  }
}
