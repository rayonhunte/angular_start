import { Auth } from '../model/auth.model';
import { StoreConfig, Store } from '@datorama/akita';
import { Injectable } from '@angular/core';

export const initialState: Auth = {
    email: null,
    token: null,
    _id: null
}

@Injectable({
    providedIn: 'root'
})

@StoreConfig({name: 'auth'})
export class AuthStore extends Store<Auth> {
    constructor() {
        super(initialState);
    }
}