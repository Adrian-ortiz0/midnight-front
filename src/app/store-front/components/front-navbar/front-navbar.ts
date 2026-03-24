import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-front-navbar',
  imports: [RouterLink],
  templateUrl: './front-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontNavbar { }
