import Main from '@/containers/main/Main.vue'
import ProductGrid from '@/containers/products-grid/ProductsGrid.vue'
import HeaderBasket from '@/containers/header-basket/HeaderBasket.vue'

export const routes = [
  {
    path: '',
    name: 'index',
    component: Main,
    redirect: {
      name: 'ProductGrid'
    },
    children: [
      {
        path: 'product-grid/:page?',
        name: 'ProductGrid',
        components: {
          default: ProductGrid,
          header: HeaderBasket
        }
      }
    ]
  }
]
