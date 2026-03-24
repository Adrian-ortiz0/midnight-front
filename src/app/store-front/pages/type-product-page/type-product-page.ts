import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductInput } from "../../../products/components/product-input/product-input";
import { CategoriesMenu } from "../../components/categories-menu/categories-menu";
import { ProductCard } from "../../../products/components/product-card/product-card";
import { Pagination } from "../../../shared/pagination/pagination";

@Component({
  selector: 'app-type-product-page',
  imports: [ProductInput, CategoriesMenu, ProductCard, Pagination],
  templateUrl: './type-product-page.html',
})
export class TypeProductPage { }
