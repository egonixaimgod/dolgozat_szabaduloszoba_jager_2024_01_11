import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-foglalasok-get',
  templateUrl: './foglalasok-get.component.html',
  styleUrls: ['./foglalasok-get.component.css']
})
export class FoglalasokGETComponent implements OnInit {
  foglalasok: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getFoglalasok();
  }
  getFoglalasok() {
    this.ApiService.getFoglalasok().subscribe(data => {
      this.foglalasok = data.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
    });
  }
}
