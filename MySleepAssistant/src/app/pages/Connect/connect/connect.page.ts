import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../../PersonService';
import { ToastController} from "@ionic/angular";

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  public email = '';
  public password = '';

  constructor(public personService: PersonService, private toastController: ToastController) {}

  public applyPushed() {
    console.log("Settings applied in connect1");
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
    console.log(this.personService.getPerson().sleep_availability);
  }
}
