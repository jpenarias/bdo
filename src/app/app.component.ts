import {Component, OnInit} from '@angular/core';
import {User} from "./interface/user.interface";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bdo';
  user: User = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUser("800220154").subscribe((response: User)=>{
        console.log(response)
        this.user = response;
      })
  }
}

