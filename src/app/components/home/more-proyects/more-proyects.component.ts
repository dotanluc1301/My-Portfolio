import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import JSonData from './../../../../assets/i18n/en.json';

@Component({
  selector: 'app-skills-and-tools',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
  requirementManagementTitle: string = JSonData['AboutMe.Tools.RequirementManagement.Title'];
  modelingToolsTitle: string = JSonData['AboutMe.Tools.ModelingTools.Title'];
  officeProductivityTitle: string = JSonData['AboutMe.Tools.OfficeProductivity.Title'];
  databaseManagementToolsTitle: string = JSonData['AboutMe.Tools.DatabaseManagementTools.Title'];
  skillsTitle: string = JSonData['AboutMe.Skills.Title'];
  tools: string = JSonData['AboutMe.Tools.Title'];

  requirementManagement: string[] = JSonData['AboutMe.Tools.RequirementManagement'];
  modelingTool: string[] = JSonData['AboutMe.Tools.ModelingTools'];
  officeProductivity: string[] = JSonData['AboutMe.Tools.OfficeProductivity'];
  databaseManagementTools: string[] = JSonData['AboutMe.Tools.DatabaseManagementTools'];
  skills: string[] = JSonData['AboutMe.Skills'];
  

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
