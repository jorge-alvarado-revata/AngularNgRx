import { createAction, props } from '@ngrx/store';
import { User } from '../user';

export const maskUserName = createAction(
    '[User] Mask User Name'
);

export const setCurrentUSer = createAction(
    '[User] Set Current User',
    props<{ user: User}>()
);

export const loadUser = createAction(
    '[User] Load'
);

export const loadUserSuccess = createAction(
    '[User] Load Succces'
);

export const loadUserFailure = createAction(
    '[User] Load Fail',
    props<{ error: string }>()
)
