import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'app/data';
import { TodoService } from 'app/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  arrContent: any = [];
  objectEdit:any ={};
  index:number  =0;
  tieude:String = '';
  parent:String = '';
  menuchinh:String = '';
  trangthai:String = '';
  constructor(private router: Router,private todoService: TodoService) { }
  ngOnInit() {
    
    // console.log(this.router.url)
    const id = location.pathname.split("/")[3];
    // this.todoService.getOne().subscribe((edit){
        
    // })
    // this.arrContent = JSON.parse(localStorage.getItem('data'));
    // this.objectEdit = this.arrContent.find(item=>{
    // return  item.id ==id;
    // });
    // this.index = this.arrContent.findIndex(item=>{
    //   return item.id = id;
    // });
    // this.tieude = this.objectEdit.tieude;
    // this.parent = this.objectEdit.parent;
    // this.menuchinh = this.objectEdit.menuchinh;
    // this.trangthai = this.objectEdit.trangthai;
    // console.log(this.tieude)
  }

  edit(){
    this.objectEdit.tieude = this.tieude;
    this.objectEdit.parent = this.parent;
    this.objectEdit.menuchinh = this.menuchinh;
    this.objectEdit.trangthai = this.trangthai;
    this.arrContent[this.index] = this.objectEdit;
    localStorage.setItem('data',JSON.stringify(this.arrContent));
    this.router.navigate(['/contacts']);
  }

}
