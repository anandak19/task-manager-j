import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = {
    id: '123',
    userName: 'Anandakrishnan',
    email: 'anandak19h@gmail.com'
  }

  getCurrentUser(){
    return this.currentUser
  }
}
