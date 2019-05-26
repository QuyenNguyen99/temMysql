import { Component, OnInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'app/data';
import { TodoService } from 'app/todo.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  newTieude = '';
  newParent = '';
  arrContent: any = [];
  idRemove:Number = null;
  constructor(private router: Router,private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe((todos)=>{
        console.log('hello world', todos);
        this.arrContent = todos;
    });    
  }

  // xử lý để hiển thị bảng confirm
  removeContact(id: number) {
    this.an_hien = true; 
    this.idRemove = id;
  }
  an_hien:any = false;

  // xử lý xác nhận delete:

  removeContacts(){
    if(this.an_hien = true){
      const index = this.arrContent.findIndex(contact => contact.id === this.idRemove);
      console.log(index);
      this.arrContent.splice(index,1);
      this.an_hien = false;       
    }
  }

  // xử lý xác nhận cancel:
  cancelContact(){
    this.an_hien = false;
  }

}
