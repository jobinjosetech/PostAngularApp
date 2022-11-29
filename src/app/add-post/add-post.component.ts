import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  userid=""
  id=""
  title=""
  body=""
  readValues = ()=>{
    let data:any = {
      "userid":this.userid,
      "id":this.id,
      "title":this.title,
      "body":this.body
    }
    console.log(data)
  }

}
