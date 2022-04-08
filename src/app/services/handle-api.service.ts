import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlApi = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class HandleApiService {

  constructor( private http : HttpClient ) {  }

  getRecords(tableName: string){

    return this.http.get(`${urlApi}/${tableName}`)

  }

  getRecord(tableName: string, id:number){

    return this.http.get(`${urlApi}/${tableName}/${id}`)

  }

  createRecord(
    tableName: string,
     data: { 
      name: string,
      description: string,
      price: number, 
      image: string, 
      status: number
    }){

      return this.http.post(`${urlApi}/${tableName}`, data)
  
  }

  updateRecord(
    tableName: string, 
    id: number,
    data: {
      name: string,
      description: string,
      price: number, 
      image: string, 
      status: number
    }
    ){

      return this.http.put(`${urlApi}/${tableName}/${id}`, data)

    }

    deleteRecord(tableName: string, id:number){

      return this.http.delete(`${urlApi}/${tableName}/${id}`)

    }
}
