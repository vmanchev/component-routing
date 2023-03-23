import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title: string = this.route.snapshot.data['title'];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log((new Date()).toString(), this.route.snapshot.data);
  }

}
