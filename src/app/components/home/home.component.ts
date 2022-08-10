import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticserviceService } from 'src/app/services/staticservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
    public staticData: StaticserviceService) { }

  ngOnInit(): void {
  }

  menuClicked(menu: any) {
    if (menu.submenus?.length) {
        menu.active = !menu.active;
    }
    else if (menu.route)
        this.router.navigate([menu.route]);
}

subMenuClicked(submenu: any) {
    if (submenu.route)
        this.router.navigate([submenu.route]);
}

}
