import { RouterModule, Routes } from "@angular/router";
import { ItemAddComponent } from "./components/item-add/item-add.component";
import { ItemDetailsComponent } from "./components/item-details/item-details.component";
import { ItemListComponent } from "./components/item-list/item-list.component";


const appRouters: Routes = [
    { path: "", component: ItemListComponent },
    { path: "new", component: ItemAddComponent },
    { path: "details/:id", component: ItemDetailsComponent }
];

export const routing = RouterModule.forRoot(appRouters);