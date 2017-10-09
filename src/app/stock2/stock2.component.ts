import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../shared/stock.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
})
export class Stock2Component implements OnInit {

  private stock: Stock;

  constructor(public stockService: StockService) {
  }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
