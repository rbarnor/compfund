import { Component } from '@angular/core';
import * as Parse from 'parse';


interface postData {   id: string,   get: any, }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor() {
  Parse.initialize("MNCPhLDfQKYFuwQh0NAslSbcE997jjgnWGui70BC", "eFIWgYsrUuqDrVYqOLBGWEOnsdwFCWKv6pKvJLIG"); 
  (Parse as any).serverURL = 'https://parseapi.back4app.com/';   
  }
  data:postData[] = [];
  
  async ngOnInit() {
    try {
      const query= new Parse.Query("ScoreTable");
      const post = await query.find();
      this.data = post;  
    } catch (error) {
      console.log("this run");
      console.log(error);
    }
    this.orderDataByScore();
  }

  orderDataByScore(){
    this.data.sort((a, b) =>  b.get("Score") - a.get("Score") )
    console.log(this.data);
    
  }

  

}