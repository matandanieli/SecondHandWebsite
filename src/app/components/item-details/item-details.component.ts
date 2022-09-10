import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Item from 'src/app/models/Item';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  id: number = 0;
  item: Item = new Item(0, "", "", "", 0, "", "");
  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    });

    this.itemService.getById(this.id).subscribe(data => {
      this.item = data as Item
    })
  }

  Purchase() {
    this.itemService.delete(this.item.id).subscribe(data => {
      this.ondelete.emit(this.item.id)
      this.router.navigateByUrl("");
    })
  }
}
