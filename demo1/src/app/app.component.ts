import { Component } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  /*
  title(title: any) {
    throw new Error('Method not implemented.');
  }
filterUsers(): any {
throw new Error('Method not implemented.');
}*/
  users: User[] = [
    { id: 1, name: 'Marine', email: 'labababa@gmail.com' },
    { id: 2, name: 'baraba', email: 'barabashka@gmail.com' },
    { id: 3, name: 'tamar', email: 'Tmr@yahoo.com' },
    { id: 4, name: 'luka', email: 'Luka@gmail.com' },
    { id: 5, name: 'ani', email: 'Ani@ibsu.edu.ge.com' }
  ];
}
