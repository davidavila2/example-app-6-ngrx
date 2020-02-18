import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from './computer';

const BASE_URL = 'https://server-30-x-30.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  model = 'computers'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }


  findOne(computer: Computer) {
    return this.httpClient.get(this.getUrlForId(computer));
  }

  create(computer: Computer) {
    return this.httpClient.post(this.getUrl(), computer);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(computer: Computer) {
    return this.httpClient.patch(this.getUrlForId(computer.id), computer)
  }

  delete(computer: Computer) {
    return this.httpClient.delete(this.getUrlForId(computer.id))
  }
}
