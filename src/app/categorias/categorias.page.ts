import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketURL: string = API_CONFIG.bucketBaseURL;

  items: CategoriaDTO[];

  constructor(
    public categoriaService: CategoriaService) {
   }

  ngOnInit() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      _error => {});
  }

}
