import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  constructor(private router: Router) {}

  width = 600;
  height = 400;
  data = [
    { name: 'Food', value: 890 },
    { name: 'Transport', value: 500 },
    { name: 'Travel', value: 700 },
    { name: 'Shopping', value: 300 },
    { name: 'Health', value: 200 },
    { name: 'Entertainment', value: 400 },
    { name: 'Other', value: 100 },
  ];

  ngAfterViewInit(): void {
    const rect = this.chartContainer.nativeElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const rect = this.chartContainer.nativeElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
  }

  redirectToTransaction(type: 'income' | 'expense') {
    this.router.navigate(['/transactions'], { queryParams: { type } });
  }
}
