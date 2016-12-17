import { Component, OnInit } from '@angular/core';
import { User} from './datos.model';

import { DatosService } from './datos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    let users$: Observable<any> = this.datosService.getUsers();
    users$.subscribe(users => {
      // console.log(users); 
      this.users = users;
    });
  }

}
