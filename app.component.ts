import { Component, OnInit } from '@angular/core';
import { ServiceBackService } from './service-back.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bosch_Technical_University';

  constructor (private _UserRol:ServiceBackService){
  }

  ngOnInit(): void {
      this._UserRol.getUserRol().then((response: any) => {
        console.log(response);
        localStorage.setItem("rol", JSON.stringify(response.rol))
        localStorage.setItem("username", JSON.stringify(response.usernt))
      })
  }
}
