import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/Item';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  sortByDateAsc: boolean = true;
  sortByPriceAsc: boolean = true;

  constructor(private itemService: ItemService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.itemService.get().subscribe(response => {
      this.items = response as Item[];
    });
  }

  onItemDeleteHandler(id: any) {
    this.items = this.items.filter(item => item.id != id);
  }

  addNewItemHandler(item: Item) {
    this.items.push(item);
  }

  sortByPrice() {
    if(this.sortByPriceAsc === true){
      this.items.sort((a, b) => a.price - b.price);
      this.sortByPriceAsc = false;
      this.sortByDateAsc = true;
    }
    else{
      this.items.sort((a, b) => b.price - a.price);
      this.sortByPriceAsc = true;
      this.sortByDateAsc = true;
    }
  }

  sortByDate() {
    if(this.sortByDateAsc === true){
      this.items.sort((a, b) => <any>new Date(a.publishDate) - <any>new Date(b.publishDate));
      this.sortByDateAsc = false;
      this.sortByPriceAsc = true;
    }
    else{
      this.items.sort((a, b) => <any>new Date(b.publishDate) - <any>new Date(a.publishDate));
      this.sortByDateAsc = true;
      this.sortByPriceAsc = true;
    }
  }
}
