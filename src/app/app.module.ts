import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ProjectActivityService} from './project-activity.service.ts'
import { HttpModule } from '@angular/http';


import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { InvolvedTeamComponent } from './involved-team/involved-team.component';
import { ManagersActivityComponent } from './managers-activity/managers-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectActivityComponent,
    InvolvedTeamComponent,
    ManagersActivityComponent
  ],
  imports: [
    BrowserModule,
MatSidenavModule,
BrowserAnimationsModule,
NoopAnimationsModule,
MatIconModule,
ChartsModule,
HttpClientModule,
HttpModule,

  ],
  providers: [MatIconRegistry,ProjectActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
