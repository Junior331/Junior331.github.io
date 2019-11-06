import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
    declarations:[
        HomeComponent,
        ButtonComponent,
    ],

    imports:[
        BrowserModule,
        ProjectsModule
    ],
    exports:[
        HomeComponent,
        ButtonComponent,
    ]
})
export class HomeModule {}