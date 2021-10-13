import { createAction, props } from '@ngrx/store';
import { Error } from 'mongoose';
import { Product } from '../../../../../../shared/models/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: Product[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: Error }>()
);



export const createUser = createAction(
  '[User] Create User',
  props<{data: Product}>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ data: Product }>()
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: Error }>()
);

