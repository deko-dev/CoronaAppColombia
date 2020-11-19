import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{

  cargando = true;

  constructor(
    public _loginService: LoginService,
  ) {}

  ngOnInit(): void {
  }

}
