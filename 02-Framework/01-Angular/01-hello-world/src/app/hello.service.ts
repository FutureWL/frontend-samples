import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(
    private http: HttpClient
  ) {
  }


  hello() {
    return this.http.get("http://localhost:8080/hello?name=world")
  }
}
