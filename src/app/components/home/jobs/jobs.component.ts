import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import JSonData from './../../../../assets/i18n/en.json'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  experiences: any[] = JSonData['Experience.Jobs'];
  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
