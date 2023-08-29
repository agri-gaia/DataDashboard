import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {protectedRoutes} from '../../app-routing.module';
import {UserProfile} from '../../shared/user-profile';
import {AuthenticationService} from '../../core/authentication/authentication.service';

enum Group {
  AgBRAIN = 'AgBRAIN',
  Amazone = 'Amazone',
  AVF = 'AVF',
  Bosch = 'Bosch',
  Claas = 'Claas',
  DFKI = 'DFKI',
  HSOS = 'HSOS',
  Kotte = 'Kotte',
  Krone = 'Krone',
  LMIS = 'LMIS',
  UOS = 'UOS',
  Wernsing = 'Wernsing'
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  protectedRoutes = protectedRoutes;
  public profile: UserProfile | null = null;
  public isMenuOpen = true;

  @Output() public toggleMenuEvent = new EventEmitter<number>();

  constructor(public authenticationService: AuthenticationService) {}

  public ngOnInit(): void {
    this.authenticationService.userProfile$.subscribe(userProfile => {
      if (!!userProfile) {
        this.profile = userProfile
      }
    })
  }

  public logout(): void {
    this.authenticationService.logout();
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenuEvent.emit(this.isMenuOpen ? 295 : 75);
  }

  getGroupLogoSource(): string {
    let logoDir = "/assets/theme/company-logos/"
    switch (this.profile?.group) {
      case Group.AgBRAIN:
        return logoDir + "agbrain.svg"
      case Group.Amazone:
        return logoDir + "amazone.svg"
      case Group.AVF:
        return logoDir + "avf.svg"
      case Group.Bosch:
        return logoDir + "bosch.svg"
      case Group.Claas:
        return logoDir + "claas.svg"
      case Group.DFKI:
        return logoDir + "dfki.png"
      case Group.HSOS:
        return logoDir + "hsos.svg"
      case Group.Kotte:
        return logoDir + "kotte.svg"
      case Group.Krone:
        return logoDir + "krone.png"
      case Group.LMIS:
        return logoDir + "lmis.svg"
      case Group.UOS:
        return logoDir + "uos.svg"
      case Group.Wernsing:
        return logoDir + "wernsing.svg"
      default:
        throw new Error("Could not determine groupLogoPath.");
    }
  }
}
