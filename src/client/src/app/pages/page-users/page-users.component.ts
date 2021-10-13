import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { usersSelector} from 'src/app/store/selectors/user/user.selectors';
import { Product } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private store: Store<AppState>,
  ) {
    this.products$ = this.store.select(usersSelector);
   }

  ngOnInit(): void {
  }

}
