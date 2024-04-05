import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '@interfaces/users-response.interface';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'dashboard-user-page',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <section>
      @if(signalUser()){
      <shared-title [rootTitle]="'User: ' + userName()"></shared-title>
      <img
        [srcset]="signalUser()?.avatar"
        [alt]="signalUser()?.first_name"
      />

      <span
        >{{ signalUser()!.first_name }}
        {{ signalUser()!.last_name }}</span
      >
      <p>{{ signalUser()!.email }}</p>
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
  public user = signal<User | undefined>(undefined);
  public userName = computed(
    () =>
      `${this.signalUser()?.first_name} ${
        this.signalUser()?.last_name
      }` ?? ''
  );

  //METHODS
  public signalUser = toSignal(
    this.routeParams.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );
}
// constructor() {
//   this.routeParams.params.subscribe(({ id }) =>
//     this.userService
//       .getUserById(id)
//       .subscribe((user) => this.currentUser.set(user))
//   );
// }
