import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hello from settings html page")
    console.log(this.activatedRoute.snapshot.paramMap)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
