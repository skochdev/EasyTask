import {Component, input, output} from '@angular/core';
import {type User} from "./user.model";
import { CardComponent } from '../shared/card/card.component';



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [CardComponent],
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  selected = input.required<boolean>();

  get imagePath() {
    return 'assets/users/' + this.user().avatar;
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
