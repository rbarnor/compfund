import { Component } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  data:postData[] = [];

  async ngOnInit() {
    try {
      const query= new Parse.Query("ScoreTable");
      const post = await query.find();
      
      console.log(post);
      
      // this.data = post;  
      
    } catch (error) {
      console.log(error);
      
    }
  }


}

interface postData {   id: string,   get: any, }



Parse.initialize("MNCPhLDfQKYFuwQh0NAslSbcE997jjgnWGui70BC", "eFIWgYsrUuqDrVYqOLBGWEOnsdwFCWKv6pKvJLIG"); 
(Parse as any).serverURL = "<https://parseapi.back4app.com/>"





