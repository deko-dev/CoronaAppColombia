import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
  }


  ingresar( metodo:string ){

    this._loginService.login( metodo );

  }

}
