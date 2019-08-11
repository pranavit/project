import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from  '../crud.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers:[CrudService]
})
export class ViewUserComponent implements OnInit {

  constructor(private user:CrudService,private route:ActivatedRoute) { }

  userInfo:any={};

  ngOnInit() {
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      this.viewUser(res.id);
    },()=>{

    })
    
  }
  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
    
      this.userInfo = res.data;
      console.log(this.userInfo);
    },(err:any)=>{

    })
  }

 
  
}
