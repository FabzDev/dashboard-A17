import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '@interfaces/users-response.interface';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'dashboard-user-page',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <section>
      @if(signalCurrentUser()){
      <shared-title [rootTitle]="'User: ' + userName()"></shared-title>
      <img [srcset]="signalCurrentUser()?.avatar" [alt]="signalCurrentUser()?.first_name" />

      <span
        >{{ signalCurrentUser()!.first_name }} {{ signalCurrentUser()!.last_name }}</span
      >
      <p>{{ signalCurrentUser()!.email }}</p>
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
  public userName = computed(
    () =>
      `${this.signalCurrentUser()?.first_name} ${this.signalCurrentUser()?.last_name}` ?? ''
  );
  public signalCurrentUser;

  //METHODS
  // constructor() {

  //   const id$ = this.routeParams.params.pipe(map( ({id}) => id ))

  constructor() {
    let userId = '';

    this.routeParams.params.subscribe(({ id }) => userId = id)

    this.signalCurrentUser = toSignal(
      this.userService.getUserById( userId  )
    )

  }
  // constructor() {
  //   this.routeParams.params.subscribe(({ id }) =>
  //     this.userService
  //       .getUserById(id)
  //       .subscribe((user) => this.currentUser.set(user))
  //   );
  // }
}
