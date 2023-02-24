import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/PersonService';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public folder!: string;

  // Our input variables
  public name = '';
  public gender = '';

  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService, private toastController: ToastController) { }


  public settingsChanged() {
    if (this.name) {
      this.personService.setName(this.name);
    }

    if (this.gender) {
      this.personService.setGender(this.gender);
    }

    this.presentToast()
    console.log(this.personService.getPerson().getName());
    console.log(this.personService.getPerson().getGender());

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
