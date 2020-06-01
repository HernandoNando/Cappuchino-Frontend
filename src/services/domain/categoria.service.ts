import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseURL}/categorias`);
    }
}