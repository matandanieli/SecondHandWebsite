import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  goToDetails(id: number){
    this.router.navigateByUrl("/details/" + id);
  }

  Purchase() {
    this.itemService.delete(this.item.id).subscribe(data => {
      this.ondelete.emit(this.item.id)
      this.router.navigateByUrl("");
    })
  }
}
