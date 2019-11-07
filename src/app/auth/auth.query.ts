import { Query, toBoolean } from '@datorama/akita';
import { Auth } from '../model/auth.model';
import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthQuery extends Query<Auth> {
    isLoggedin$ = this.select(state => toBoolean(state.token))

    constructor(protected store: AuthStore) {
        super(store)
    }
}