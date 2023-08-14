import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // object=new class
   @Output()onMenuBtnClick=new EventEmitter

  menubuttonClicked(){

    //to occur an userdefined event 

    this.onMenuBtnClick.emit() // emit is a method of eventEmitter class

  }

}
