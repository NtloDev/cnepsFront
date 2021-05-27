import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-surveillant-general',
  templateUrl: './home-surveillant-general.component.html',
  styleUrls: ['./home-surveillant-general.component.scss']
})
export class HomeSurveillantGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  odooLink() {
  //  console.log(window.location.href)
    window.location.href = "cneps-thies.odoo.com"
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
