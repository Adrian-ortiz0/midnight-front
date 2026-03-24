import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesMenu } from "../../components/categories-menu/categories-menu";
import { ProductCard } from "../../../products/components/product-card/product-card";
import { Pagination } from "../../../shared/pagination/pagination";
import { ProductInput } from "../../../products/components/product-input/product-input";

@Component({
  selector: 'app-home-page',
  imports: [CategoriesMenu, ProductCard, Pagination, ProductInput],
  templateUrl: './home-page.html',
})
export class HomePage { }
