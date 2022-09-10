import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './routes';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import ItemService from './services/item.service';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ShekelCurrencyPipe } from './pipes/shekelCurrency.pipe';
import { HighlightDirective } from './directives/highlight.directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemDetailsComponent,
    ShekelCurrencyPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
