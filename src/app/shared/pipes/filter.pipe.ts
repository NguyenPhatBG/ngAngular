import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], id: string, name: string, price: string, status: string): any {
    if (!id && !name && !price && !status) {
      return products;
    } else {
      if (id) {
        products = products.filter(x => {
          return x.id.toString().indexOf(id) !== -1;
        });
      }
      if (name) {
        products = products.filter(x => {
          return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        });
      }
      if (price) {
        products = products.filter(x => {
          return x.price.toString().indexOf(price) !== -1;
        });
      }
      if (status) {
        products = products.filter(x => {
          return x.status.toString().toLowerCase().indexOf(status.toLowerCase()) !== -1;
        });
      }
    }
    return products;
  }

}
