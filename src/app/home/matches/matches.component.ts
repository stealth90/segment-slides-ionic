import { Component, OnInit } from '@angular/core';
import { WorldcupService } from '../worldcup.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {

  public matches : Match[]=[];
  constructor(private worldcupService : WorldcupService) { }
  async ngOnInit() {
    this.matches = await this.worldcupService.getMatches();
  }
}
