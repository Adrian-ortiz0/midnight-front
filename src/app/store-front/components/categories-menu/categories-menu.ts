import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-categories-menu',
  imports: [RouterLink],
  templateUrl: './categories-menu.html',
})
export class CategoriesMenu { }
