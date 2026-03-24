import { Routes } from '@angular/router';
import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';
import { HomePage } from './pages/home-page/home-page';
import { ProductPage } from './pages/product-page/product-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { TypeProductPage } from './pages/type-product-page/type-product-page';
import { CartPage } from './pages/cart-page/cart-page';

export const storeFrontRoutes: Routes = [
    {
        path: '',
        component: StoreFrontLayout,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
                path: 'product/:productId',
                component: ProductPage
            },
            {
                path: 'category/:categoryName',
                component: TypeProductPage
            },
            {
                path: 'cart',
                component: CartPage
            },
            {
                path: '**',
                component: NotFoundPage
            }
        ],
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default storeFrontRoutes;
