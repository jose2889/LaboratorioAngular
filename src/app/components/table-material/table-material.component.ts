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