import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'app/data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newTieude = '';
  newParent = '';
  menuchinh = '';
  trangthai = '';
  arrContent: any = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.arrContent = data.list_contact;
  }

  add() {
    this.arrContent.push({
      id: this.arrContent.length+1,
      tieude: this.newTieude,
      parent: this.newParent,
      menuchinh: 'on',
      trangthai: 'on'
    })
    this.router.navigate(['/contacts']);
  }
}
