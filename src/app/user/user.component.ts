import {Component, input, output} from '@angular/core';

type User = {
  id: string
  avatar: string
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();


  get imagePath() {
    return 'assets/users/' + this.user().avatar
  }

  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
