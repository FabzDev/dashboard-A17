import { computed, Injectable, signal, inject } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/users-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //INJECTIONS
  public http = inject(HttpClient);

  //PROPERTIES
  #state = signal<State>({
    users: [],
    loading: true,
  });

  public state = computed(() => this.#state());

  //METHODS
  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users/')
      .pipe(delay(2000))
      .subscribe((usersResponse) => {
        this.#state().users = usersResponse.data;
        this.#state().loading = false;
      });
  }

  getUserById(id: string): Observable<User>  {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe(
      delay(2000),
      map( userResponse => userResponse.data)
    );
  }
}
