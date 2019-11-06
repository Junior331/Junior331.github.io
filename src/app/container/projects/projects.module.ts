import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from 'src/app/components/input/input.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        CardComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        ProjectsComponent,
        CardComponent
    ]
})
export class ProjectsModule {

}