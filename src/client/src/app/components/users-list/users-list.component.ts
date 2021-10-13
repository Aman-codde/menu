import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import {  loadUsers } from 'src/app/store/actions/user/user.actions';
import {  usersSelector } from 'src/app/store/selectors/user/user.selectors';
import { Category } from '../../../../../shared/models/category.model';
import { Product } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public $categories : Observable<any[]>;
  @Input() public products: Product[] = [];

  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    ) {
      this.$categories = this.userService.getCategories();
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    
  }
}
