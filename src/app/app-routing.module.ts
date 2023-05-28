import {Routes} from "@angular/router";
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";

export const routes: Routes = [
  {path: '', component: IntroPageComponent},
  {path:'menu',component:MainMenuComponent}
];
