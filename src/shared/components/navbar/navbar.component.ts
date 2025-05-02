import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent implements OnInit {

  isOpen = false; // Controla se o menu está aberto ou fechado
  menuOptions = [

    {
      name: 'Sobre',
      link: '#about'
    },
    {
      name: 'Missão e Visão',
      link: '#mission'
    },
    {
      name: 'Diferenciais',
      link: '#differentials'
    },
    {
      name: 'Equipe',
      link: '#team'
    },
    {
      name: 'Area de Atuação',
      link: '#area'
    },
    {
      name: 'Contato',
      link: '#contact',
      only_sm: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
