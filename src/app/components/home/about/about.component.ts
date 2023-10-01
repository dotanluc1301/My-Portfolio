import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import JSonData from './../../../../assets/i18n/en.json'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  paragraphs: string[] = JSonData['AboutMe.Paragraphs'];
  skills: string[] = JSonData['AboutMe.Skills'];


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
