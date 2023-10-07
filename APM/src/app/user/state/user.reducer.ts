import { createReducer, on, createAction, createFeatureSelector, createSelector} from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
    users: User[];

}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null,
    users: []
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
);


export const userReducer = createReducer(
    { maskUserName: true},
    on(createAction('[User] Mask user name'), state =>{
        console.log('original state: ' + JSON.stringify(state));
        return {
            ...state, 
            maskUserName: !state.maskUserName
        }
    })
);