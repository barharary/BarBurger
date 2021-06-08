import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lays',
  templateUrl: './lays.component.html',
  styleUrls: ['./lays.component.css']
})
export class LaysComponent implements OnInit {

@Input()
public className?;


  constructor() { }

  ngOnInit(): void {
  }

}
