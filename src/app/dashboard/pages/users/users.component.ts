import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'dashboard-user-list',
  standalone: true,
  imports: [TitleComponent, RouterLink],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UserService)

  public state = this.userService.state();

}
