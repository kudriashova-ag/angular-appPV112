import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';
  @Input() userWebsite: string = '';

  date = new Date();
  price= 2.50
}
