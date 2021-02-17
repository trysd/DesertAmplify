import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCheckService {

  constructor() { }

  public existsSpecifiedKeyValuesInObjects(objList: object[], key: string, values: any[]) {
    return !values.map(
       v => objList.map(a => a[key]).includes(v)
    ).includes(false)
  }

  //

}
