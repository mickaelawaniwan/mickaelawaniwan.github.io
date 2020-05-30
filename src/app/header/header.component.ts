import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderMockData } from '../mock-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  textData: HeaderMockData;
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
     this.textData = data["header"];
  }
}
