import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../../../../../shared/models/user.model';
import { createUserSuccess, loadUsersSuccess} from '../../actions/user/user.actions';

export const userFeatureKey = 'user';

export interface State {
  products: Product[];

}

export const initialState: State = {
  products: [],
};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return { ...state, products: action.data }
  }),
  on(createUserSuccess, (state, action) => {
    const products = [...state.products];
    products.push(action.data);
    return {...state, products}
  })
  
);

