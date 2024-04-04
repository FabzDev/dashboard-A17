import { computed, Injectable, signal, inject } from '@angular/core';
import { User, UsersResponse } from '../interfaces/users-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public http = inject(HttpClient)

  #state = signal<State>({
    users:[],
     loading: true
    })

    public state = computed( () => this.#state() )

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users/')
    .pipe(
      delay(2000)
    )
    .subscribe( (usersResponse) => this.#state().users = usersResponse.data )
   }
}
