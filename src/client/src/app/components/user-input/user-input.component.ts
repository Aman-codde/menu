import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import {
  createUser,
  //updateUser,
} from 'src/app/store/actions/user/user.actions';
import { Product } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  addProduct: FormGroup;
  @Input() selectedUser: Product | null = null;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.addProduct = this.fb.group({
      product_name: ['', Validators.required],
      categories: [''],
    });
  }

  ngOnInit(): void {}


  postProduct() {
    this.store.dispatch(createUser({ data: this.addProduct.value }));
    this.addProduct.reset();
  }
  
}
