import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from  '../crud.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[CrudService]
})
export class UserComponent implements OnInit {

  constructor(private user:CrudService) { }
  users:any;

  ngOnInit() {
    this.listUsers();
  }
  
  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      //success
      this.users=res.data;
      console.log(res.data);
    },(err:any)=>{
      //failure
    }
    );
  }

}
