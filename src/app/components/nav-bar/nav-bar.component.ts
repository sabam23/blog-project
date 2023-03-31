import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  logged: boolean = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

}
