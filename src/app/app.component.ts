
import { Component } from '@angular/core';
import { repos } from './repos';
import { GithubService } from './github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  userName:string = "adarsh";
  'repos':repos[];

  loading: boolean = false;
  errorMessage:any;
constructor(private githubservice:GithubService){}
public GetRepos(){
  this.loading = true;
    this.errorMessage = "";
    this.githubservice.getRepos(this.userName)
    .subscribe((response)=>{console.log('response received')
  this.repos = response;},
  (error)=>{console.log("Request Failed ")
  this.errorMessage = error;
          this.loading = false;
},  
()=>{
  console.log("Request Completed")
  this.loading = false;
}
)
}


}
