import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SidebarService } from '../../services/sidebar.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, MatSidenavModule, MatToolbarModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  menuVisible: boolean = false;

  constructor(private loginService: LoginService, private sidebarService: SidebarService) {

  }
  ngOnInit(): void {
    this.sidebarService.MenuVisible$.subscribe(visible => {
      this.menuVisible = visible;
    });
    console.log("menuVisible em ngOnInit", this.menuVisible);
  }

  logout(): void {
    this.loginService.deslogar();
  }
}

