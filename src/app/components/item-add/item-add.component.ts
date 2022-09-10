import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/models/Item';
import ItemService from 'src/app/services/item.service';
import { ValidateImageFileType } from 'src/app/validators/imageFileType.validator';
import { ValidateUrl } from 'src/app/validators/url.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  item: Item;

  newItemForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(1)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5)]),
    imageSource: new FormControl("", [ValidateUrl, ValidateImageFileType]),
    price: new FormControl("", [Validators.required, Validators.min(0)]),
    city: new FormControl("", [Validators.required, Validators.minLength(1)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern('[0-9]{8,13}')]),
  });

  constructor(private itemService: ItemService, private router: Router) {
    this.item = new Item(0, "", "", "", 0, "", "");
  }

  ngOnInit(): void {
  }

  saveForm() {
    let name = this.newItemForm.controls["name"].value;
    let description = this.newItemForm.controls["description"].value;
    let imageSource = this.newItemForm.controls["imageSource"].value;
    let price = this.newItemForm.controls["price"].value;
    let city = this.newItemForm.controls["city"].value;
    let phoneNumber = this.newItemForm.controls["phoneNumber"].value;

    this.item = new Item(0, name, description, imageSource, price, city, phoneNumber);

    if (this.newItemForm.valid) {
      this.addNewItem();
    }
  }

  addNewItem() {
    this.itemService.post(this.item)
      .subscribe(data => {
        this.router.navigateByUrl("");
      })
  }
}
