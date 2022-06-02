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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhvYW5nIFNvbiIsImVtYWlsIjoic29uYm9uMTEwMUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJhdmF0YXIiOiJodHRwczovL3Njb250ZW50LmZoYW4yLTQuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xMzAwNTg5MTVfNzY1MzEyMzUwOTk1NDQ0XzkwOTU0NzA5ODIyNDY3NzQwMDdfbi5qcGc_X25jX2NhdD0xMDQmY2NiPTEtNyZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPVk2OG9TYVlraDRRQVg5QmZ4SGkmX25jX2h0PXNjb250ZW50LmZoYW4yLTQuZm5hJm9oPTAwX0FUOWdRZm1nOW85ZTZUbXB2V1Z2dmtUZjdkSWxYd3NlbGI5eDBvbFgtQ0FpaUEmb2U9NjJCQkY4MDEiLCJpYXQiOjE1MTYyMzkwMjIsImlkIjo0fQ.ZzQN_rvjaqYmLfsQ8pkwBA42sbP0eJJ3fJUIULZLFbM'
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
