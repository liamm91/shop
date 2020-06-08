import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
const {MongoClient} = require('mongodb').MongoClient; 

const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false"
const client = new MongoClient(uri)
const dbName = "shop"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  async fetchProducts(): Promise<any> {
    // connecting to the database
    client.connect(function(err, client) {
      // if there is an error, return false
      if (err) {
        return of(err)
      } else {
        console.log("Connected to the database successfully!")

        // querying the database
        const db = client.db(dbName)
        return (db.collection("products").find({}))
      }
    })
  }
}
