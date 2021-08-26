import { Beer } from './beer';
import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { Response } from './response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer';
  beer : Beer[] = [];

  constructor (private dataservice : DataService) {

  }

  ngOnInit(): void {
    this.dataservice.getBeer().subscribe((data) =>{
      console.log(data);
      this.beer = data;
    })
  }
}
