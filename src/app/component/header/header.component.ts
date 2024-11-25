import { Component,inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggerInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggerInUser")!).picture;
  title = "Article Feeder"

  signOut(){
    this.auth.signOut();
  }

}
