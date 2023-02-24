import { Component, OnInit } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-connect2',
  templateUrl: './connect2.page.html',
  styleUrls: ['./connect2.page.scss'],
})
export class Connect2Page implements OnInit {

  // Input variables
  public email = '';
  public password = '';

  constructor(private toastController: ToastController) { }

  public applyPushed() {
    console.log("Settings applied in connect2");
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Success!",
      duration: 1500,
      position: 'top'
    });
    toast.present()
  }

  ngOnInit() {
  }

}
