import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'https://reqres.in';
  public user = null;
  private savedTokenName = 'token';
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(`${this.baseURL}/api/login`, user).pipe(
      map(
        (res) =>
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhvYW5nIFNvbiIsImVtYWlsIjoiamFuZXQud2VhdmVyQHJlcXJlcy5pbiIsImlzQWRtaW4iOnRydWUsImF2YXRhciI6Imh0dHBzOi8vc2NvbnRlbnQuZmhhbjItNC5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzEzMDA1ODkxNV83NjUzMTIzNTA5OTU0NDRfOTA5NTQ3MDk4MjI0Njc3NDAwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS03Jl9uY19zaWQ9MDljYmZlJl9uY19vaGM9WTY4b1NhWWtoNFFBWDlCZnhIaSZfbmNfaHQ9c2NvbnRlbnQuZmhhbjItNC5mbmEmb2g9MDBfQVQ5Z1FmbWc5bzllNlRtcHZXVnZ2a1RmN2RJbFh3c2VsYjl4MG9sWC1DQWlpQSZvZT02MkJCRjgwMSIsImlhdCI6MTUxNjIzOTAyMiwiaWQiOjJ9.E-JUW3uJoQKn_IWkfFYiADcCs2yHuegOj8XEE2_iDbM'
      ),
      tap((token: string) => {
        let decoded = jwtDecode(token);
        this.user = decoded;
        this.user.token = token;
        localStorage.setItem(this.savedTokenName, token);
      })
    );
  }

  getUserInfo() {
    return this.http.get(this.baseURL + '/api/users/' + this.user.id);
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  isAdmin(): boolean {
    if (this.user && this.user.isAdmin) {
      return true;
    }
    return false;
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.savedTokenName);
  }
}
