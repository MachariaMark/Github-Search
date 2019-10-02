import { Component, OnInit, } from '@angular/core';
import { User } from "src/app/classes/user";
import { Repository } from "src/app/classes/repository";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // router: any;

  // goToUrl(id) {
  //   this.router.navigate(["/searchapp", id]);
  // }
  // repo: Repository[];
  // user: User;

  constructor() { }

  ngOnInit() {
  }

}






