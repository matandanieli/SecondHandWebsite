import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Item from "../models/Item";

@Injectable()
export default class ItemService {

    constructor(private httpService: HttpClient) {
    }

    get(){
        return this.httpService.get("http://localhost:4100/items");
    }

    getById(id: number){
        return this.httpService.get("http://localhost:4100/items/" + id);
    }

    post(item: Item){
        return this.httpService.post("http://localhost:4100/items", item);
    }

    delete(id: any){
        return this.httpService.delete("http://localhost:4100/items/" + id);
    }

    put(item: Item){
        return this.httpService.put("http://localhost:4100/items/" + item.id, item);
    }
}