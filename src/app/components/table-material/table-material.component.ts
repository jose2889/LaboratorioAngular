import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../modelo/user';

@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.css']
})
export class TableMaterialComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  unir = 3;
  data = [
    {"estado":"Metropolitana", "ciudad":"Caracas", "sector":"Las Mercedes"},
    {"estado":"Metropolitana", "ciudad":"Caracas", "sector":"Altamira"},
    {"estado":"Metropolitana", "ciudad":"Miranda", "sector":"Chacao"},
    {"estado":"Falcon", "ciudad":"Coro", "sector":"San Jose"},
    {"estado":"Falcon", "ciudad":"Coro", "sector":"Manaure"},
    {"estado":"Falcon", "ciudad":"Punto Fijo", "sector":"Universitario"},
    {"estado":"Lara", "ciudad":"Barquisimeto", "sector":"Trinitarias"},
    {"estado":"Lara", "ciudad":"Barquisimeto", "sector":"Cabudare"},
  ];
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}