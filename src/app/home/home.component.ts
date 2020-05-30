import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeMockData } from '../mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  homeData: HomeMockData;
   ngOnInit() {
    this.getAllText();
  }

  getAllText(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});  
    this.http.get("/homeData",{headers})
    .pipe(map(
      ( response )=> response
   )).
   subscribe((data) => this.setData(data));
  }

  setData(data) {
     this.homeData = data["home"];
  }
}
