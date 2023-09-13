import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(private router: Router, private keycloak: KeycloakService) { }

  ngOnInit(): void {
    this.keycloak.isLoggedIn().then(isLoggedIn => {
      if(isLoggedIn) { 
        this.router.navigate(['/catalog-browser']);
      }
    })
}

  onRegisterClick() {
    this.router.navigate(['/registration']); 
  }

  onLoginClick() {
    this.keycloak.login()
  }
}
