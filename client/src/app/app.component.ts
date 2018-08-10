import {Component, OnInit} from '@angular/core';
import {BackendService} from './backend.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'app';
  users = this.backend.users();
  constructor(private backend: BackendService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
