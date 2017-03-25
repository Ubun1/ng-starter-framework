import { Component, OnInit } from '@angular/core';
import {FramewokConfigService} from "../services/framewok-config.service";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public configService: FramewokConfigService) { }

  ngOnInit() {
  }

}
