import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string,
  title: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menuItems: MenuItem[] = [
    {route: '/graphs/barra', title: 'Barra'},
    {route: '/graphs/barra-doble', title: 'Barra doble'},
    {route: '/graphs/dona', title: 'Dona'},
    {route: '/graphs/dona-http', title: 'Dona Http'}
  ];

}
