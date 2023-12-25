import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgFor,
    UserInfoComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
  ],
  providers: [HttpService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  newName: string = '';
  newEmail: string = '';
  users: User[] = [];

  constructor(private httpService: HttpService) { }
  
  ngOnInit() {
    this.httpService.getUsers().subscribe((data: any) => (this.users = data));
  }

  userNameValidator(control: FormControl): null | { [s: string]: boolean } {
    if (control.value === 'test') {
      return { userName: true };
    }
    return null;
  }

  myForm = new FormGroup({
    userName: new FormControl('Tom', [
      Validators.required,
      this.userNameValidator,
    ]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit2() {
    console.log(this.myForm.value);
    // const {userName, userEmail} = this.myForm.value;
    let userName: any = this.myForm.value.userName;
    let userEmail: any = this.myForm.value.userEmail;

    const user = new User(userName, userEmail, '');
    this.httpService.addUser(user).subscribe((data: any) => (this.users.push(data)));

  }

  /*  onSubmit(myForm: NgForm) {
    this.users.push({
      id: 3,
      ...myForm.value,
    });
    //console.log(myForm.value);
    console.log(this.newName);
    console.log(this.newEmail);
  } */
}
