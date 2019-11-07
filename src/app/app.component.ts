import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth/auth.query';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularStart';
  isLoggedIn$: Observable<boolean>;

  constructor(private authQuery: AuthQuery) {
    
  }

}
