import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from 'src/app/components/input/input.component';
import { ContactsComponent } from './contacts.component';

@NgModule({
    declarations:[
        ContactsComponent,
        InputComponent
    ],
    imports:[
        BrowserModule
    ],
    exports:[
        InputComponent
    ]
})
export class ContactsModule{}