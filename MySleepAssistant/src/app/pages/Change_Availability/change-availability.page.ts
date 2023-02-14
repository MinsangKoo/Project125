import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-availability',
  templateUrl: './change-availability.page.html',
  styleUrls: ['./change-availability.page.scss'],
})
export class ChangeAvailabilityPage implements OnInit {

  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
