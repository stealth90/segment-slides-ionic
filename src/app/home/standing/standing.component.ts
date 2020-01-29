import { Component, OnInit } from '@angular/core';
import { WorldcupService } from '../worldcup.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
})
export class StandingComponent implements OnInit {

  public standings : Standing[];
  constructor(private worldcupService : WorldcupService) { }

  async ngOnInit() {
    this.standings = await this.worldcupService.getStanding();
  }

}
