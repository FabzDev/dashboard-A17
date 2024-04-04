import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '@interfaces/users-response.interface';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'dashboard-user-page',
  standalone: true,
  imports: [TitleComponent],
  template: `

    <section>
      @if(currentUser()){
      <shared-title [rootTitle]="'User: '+ userName()" ></shared-title>
      <img [srcset]="currentUser()?.avatar"
           [alt]="currentUser()?.first_name">

      <span>{{currentUser()!.first_name}} {{currentUser()!.last_name}}</span>
      <p>{{currentUser()!.email}}</p>\
      } @else {
        <h2>Cargando información del usuario...</h2>
      }
    </section>
  `,
})
export default class UserComponent {
  //INJECTIONS
  private routeParams = inject(ActivatedRoute);
  private userService = inject(UserService);

  //PROPERTIES
  public currentUser = signal<User | undefined>(undefined);
  public userName = computed( () => `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}` ?? '')

  //METHODS
  constructor() {
    this.routeParams.params.subscribe(({ id }) =>
      this.userService
        .getUserById(id)
        .subscribe((user) => this.currentUser.set(user))
    );
  }
}
