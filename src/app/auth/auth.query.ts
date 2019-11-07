import {Query} from '@datorama/akita';
import { AuthStore } from './auth.store';
import { AuthState } from '../model/auth.model';

export class AuthQuery extends Query <AuthState> {

    constructor(protected store: AuthStore) {
        super(store);
    }
}


