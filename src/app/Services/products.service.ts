import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Iproduct[] = [];
  filter: any;

  productsList: Iproduct[];
  getProductIDs(prdID: number): number[] {
    return this.productsList.map((product) => product.id);
  }
  public getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product: { id: number; }) => product.id === productId);
  }

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'HUAWEI Mate 20 Pro',
        price: 12000,
        quantity: 4,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/mate20-pro/mate20pro_listimg.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
      },
      {
        id: 2,
        name: 'HUAWEI Mate 20',
        price: 10000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/mate20/mate20_listimg.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 3,
        name: 'HUAWEI Mate 40 Pro',
        price: 15000,
        quantity: 0,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate40-pro/list-img/silver.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 4,
        name: 'HUAWEI WATCH GT 4',
        price: 4000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4/list/46mm-green.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 5,
        name: 'HUAWEI WATCH Buds',
        price: 8000,
        quantity: 0,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/wearables/watch-buds/list/black.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0

        },
      {
        id: 6,
        name: 'HUAWEI Band 8',
        price: 5000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/wearables/band8/list/emerald-green-list-img.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 7,
        name: 'HUAWEI MateBook 14 2020',
        price: 70000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/pc/matebook-14-amd-2020/gray.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 8,
        name: 'HUAWEI MateBook D',
        price: 60000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/support-v3/homepage/matebook-d-silver.png',
          totalPrice:0,
          discount: 50,
          finalPrice:0
        },
      {
        id: 9,
        name: ' HUAWEI MateBook D 15 AMD',
        price: 40000,
        quantity: 5,
        categoryID: 2,
        prdImgURL:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/pc/matebook-d-15-amd/Silver.png',
         totalPrice:0,
         discount: 50,
         finalPrice:0
      },
    ];
  }
  getAllProducts(): Iproduct[] {
    return this.productsList;
  }
  performFilter(filterValue: string): Iproduct[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.name.toLocaleLowerCase().includes(filterValue)
    );
  }


}
