import { EntityStore, EntityState} from '@datorama/akita';
import { Auth } from '../model/auth.model';
import { Injectable } from '@angular/core';

export interface  State extends EntityState<Auth> {}

@Injectable({
    providedIn: 'root'
})

export class AuthStore extends EntityStore<State, Auth> {
    constructor() {
        super(initialState);
    }
}

