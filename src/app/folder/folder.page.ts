import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  NavController: any;

  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController , public menu: MenuController) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  } 
 
  ionViewDidLeave() {
    this.menu.enable(true);
  } 

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

    login(){
      this.navCtrl.navigateRoot('/CategoriasPage');
    }
}
