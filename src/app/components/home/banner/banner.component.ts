import { Component, OnInit, AfterViewInit } from '@angular/core';
import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import JSonData from './../../../../assets/i18n/en.json'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
  pretitle: string = JSonData['Banner.Pretitle'];
  fullName: string = JSonData['AboutMe.FullName'];
  jobTitle: string = JSonData['AboutMe.JobTitle'];
  email: string = JSonData['Contact.Email'];
  description: string = JSonData['Banner.Description'];


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void { 
  }
  

}
