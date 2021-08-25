import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Response } from './response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer';
  response : Response = new Response;

  constructor (private dataservice : DataService) {

  }

  ngOnInit(): void {
    this.dataservice.getBeer().subscribe((data) =>{
      console.log(data);
      this.response = data;
    })
  }
}
