import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/users-response.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #state = signal<State>({
    users:[],
     loading: true
    })

  constructor() {
    console.log('Cargando Users');
   }
}
