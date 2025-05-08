import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit {

  @Input() type: 'income' | 'expense' = 'income';

  transactionOptions = [
    { name: 'Food 🍕', value: 890 },
    { name: 'Transport 🚍', value: 500 },
    { name: 'Travel 🧳', value: 700 },
    { name: 'Shopping 👚', value: 300 },
    { name: 'Health 🏥', value: 200 },
    { name: 'Entertainment 🎳', value: 400 },
    { name: 'Other', value: 100 },
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['type']) {
        this.type = params['type'];
      }
    });
  }

  goHome() {
    window.location.href = '/dashboard';
  }
}
