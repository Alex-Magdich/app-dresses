import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Dress} from './dress';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit {
   title = 'app-dress';

   dresses: Dress[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(){

        this.httpService.getData().subscribe(data => this.dresses=data["dresses"]);
    }
}
