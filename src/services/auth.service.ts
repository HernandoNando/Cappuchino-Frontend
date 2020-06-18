import { Injectable } from '@angular/core';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { LocalUser } from 'src/models/local_user';
import { StorageService } from './storage.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();
    
    constructor(public http: HttpClient, public storege: StorageService){

    }

    authenticate(creds : CredenciaisDTO){
        this.http.post(`${API_CONFIG.baseURL}/login`,
        creds,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    refreshToken(){
        this.http.post(`${API_CONFIG.baseURL}/auth/refresh_token`,
        {},
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storege.setLocalUser(user);
    }

    logout() {
        this.storege.setLocalUser(null);
    }
}