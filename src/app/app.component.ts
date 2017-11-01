import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthApiService} from "./api/auth-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'app works!';
  user: any;

  constructor(private authApi: AuthApiService) {
  }

  // method for getting user details
  getUser() {
    this
      .authApi
      .getUser()
      .subscribe((data: Response) => {
        console.log('Logged User : ', data);
        this.user = data;
      });
  }

  // method for logout
  logout() {
    this
      .authApi
      .logout()
      .subscribe(() => {
        this.user = null;
      }, (error) => {
        this.user = null;
        console.log(error);
      });
  }

  ngOnInit() {
    this.getUser();
  }
}
