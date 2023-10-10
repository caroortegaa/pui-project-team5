import { Component,OnInit,ViewChild } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  public user: User;
  public showError: boolean;

  constructor(public loginservice: LoginService) { 
  }

  @ViewChild('loginform') loginform: any;

  ngOnInit(): void {
    this.user = {username: "", password:""};
  } 

  logg() {
    this.loginservice.login(this.user.username, this.user.password).subscribe({
      next:(user) => console.log(this.user.username),
      error: err => this.showError = true,  
    })
  }
  
  }
