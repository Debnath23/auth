import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  baseUrl:string= "http://localhost:8000/api/v1/"
  
  async registerUser(username: string, email: string, password: string) {
    const {data} = await axios.post('http://localhost:8000/api/v1/users/sign-up', {
     username, email, password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  console.log("Data", data);
  return data;
  }

  async loginUser(email: string, password: string) {
    const {data} = await axios.post('http://localhost:8000/api/v1/users/sign-in', {
       email, password
     }, {
       headers: {
         'Content-Type': 'application/json'
       }
   })
   console.log("Data", data);
   return data;
  }

  async getCookie(){
    await axios.get('http://localhost:8000/api/v1/users/refresh-token')
  }
  
}
