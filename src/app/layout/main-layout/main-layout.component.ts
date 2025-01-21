import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  menuVisible: boolean = true;
  constructor(private sidebarService: SidebarService){}
  ngOnInit(): void{
    this.sidebarService.MenuVisible$.subscribe(visible => {
      this.menuVisible = visible
    } );
  }

}
