import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'muffeez-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
   
  ) {
  }
  ngOnInit(): void {

   

    this.titleService.setTitle("Luc Do | Business Analyst");
    this.metaService.addTags([
      { name: 'keywords', content: 'Business Analyst and Developer' },
      { name: 'description', content: 'With the experience developing systems, interfaces, technological solutions to make the web a better place.' },
    ]);
    
    AOS.init();


  }
}
