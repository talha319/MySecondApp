import {NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  step:any;


  cliclTab(item:any){
     this.step=item;
  }
}
