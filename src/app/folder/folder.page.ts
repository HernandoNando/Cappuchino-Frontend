import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  NavController: any;

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController , 
    public menu: MenuController,
    public auth: AuthService) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  } 
 
  ionViewDidLeave() {
    this.menu.enable(true);
  } 

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter(){
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.navigateRoot('/CategoriasPage');
    },
    _error => {});
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.navigateRoot('/CategoriasPage');
      },
      _error => {});
  }

  sugnup(){
    this.navCtrl.navigateRoot('/SignupPage');
  }
}
