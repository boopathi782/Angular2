/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterPipe',
  pure: false
  
})
let slot_mode: Array<any>;
export class MyFilterPipePipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.slot_mode.indexOf(filter.slot_mode) !== -1);
  }

}
 */