import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  email: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService) { 
    }

  ionViewDidLoad(){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email){
      this.email = localUser.email;
    }
  }

  ngOnInit() {
  }

}