import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, labelKey?: string): any {
    return this.filterIt(items, searchTerm);
  }

  private filterIt(arr, searchKey) {
    // return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
    const results: Array<any> = [];
    for (let i = 0; i < arr.length; i++) {
      for (const key in arr[i]) {
        if (
          arr[i][key] != null &&
          typeof arr[i][key] !== "boolean" &&
          typeof arr[i][key] !== "number"
        ) {
          if (Array.isArray(arr[i][key])) {
            if (this.checkSearchValueInChild(arr[i][key], searchKey)) {
              results.push(arr[i]);
            }
          } else if (arr[i][key].includes(searchKey)) {
            results.push(arr[i]);
          }
        }
      }
    }
    return results;
  }
  private checkSearchValueInChild(arr, searchKey) {
    let searchFounded = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(searchKey)) {
        searchFounded = true;
        break;
      }
    }
    return searchFounded;
  }
}
