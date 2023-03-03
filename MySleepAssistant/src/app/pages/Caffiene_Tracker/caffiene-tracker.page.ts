import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/PersonService';

@Component({
  selector: 'app-caffiene-tracker',
  templateUrl: './caffiene-tracker.page.html',
  styleUrls: ['./caffiene-tracker.page.scss'],
})
export class CaffieneTrackerPage implements OnInit {

  public numberOfCups = '';

  

  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService) { }

  public setCaffiene()
  {
    if (!this.numberOfCups)
    {
      this.numberOfCups = '0';
    }
    // console.log(this.numberOfCups);
    let p = this.personService.getPerson();
    p.getCurDay().setCaffiene(parseInt(this.numberOfCups))
  }

  ngOnInit() {
  }

}
