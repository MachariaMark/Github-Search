import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../classes/user";
import { environment } from "src/environments/environment";
import { Repository } from "../classes/repository";


@Injectable({
  providedIn: "root"
})

export class ProfileService {

  userdata: User;
  repodata: Repository;
  

  constructor(private http: HttpClient) {
    console.log('service is now ready .'); 
    this.userdata = new User("","",0,0,0) ;
    this.repodata = new Repository("","","","")
  }

  // getProfileInfo(){
  //   interface ApiResponse{
  //     name: string;
  //   }
  // }

  // let promise = new Promise((resolve, reject) => {
  //   this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" + environment.accessToken)
  //     .toPromise()
  //     .then(
  //       profile => {
  //         this.user = profile;
  //         resolve();
  //       },
  //       error => {
  //         throw new error(
  //           "Something went wrong while trying to load resource"
  //         );
  //         reject(error);
  //       }
  //     );
  // });
  // return promise;

  // getRepos() {
    
  //   interface RepoResponse {
  //     name: string;
  //     description: string;
  //     html_url: string;
  //   }
    
  //   let promise = new Promise((resolve, reject) => {this.http.get<RepoResponse>("https://api.github.com/users/" + this.username + "/  repos?access_token=" + environment.accessToken)
  //       .toPromise()
  //       .then(
  //         repo => {
  //           this.repos = repo;
  //           resolve();
  //         },
  //         error => {
  //           throw new error(
  //             "something went wrong while trying to load resource"
  //           );
  //           reject(error);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  // getGithubUser(username) {
  //   console.log(username);
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.get(environment.ApiUrl + 'users/' + username + '?access_token=' + environment.accessToken).toPromise().then(response => {
  //       this.userdata = response;
  //       resolve(this.userdata);
  //     },
  //     error => {
  //       console.log(error);
  //       reject(error);
  //     });
  //   });
  //   return promise;
  // }

  // getGithubRepos(username) {
  //   console.log(username);
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.get(environment.ApiUrl + 'users/' + username + '/repos?access_token=' + environment.accessToken).toPromise().then(response => {
  //       this.repodata = response;
  //       resolve(this.repodata);
  //     },
  //     error => {
  //       console.log(error);
  //       reject(error);
  //     });
  //   });
  }
