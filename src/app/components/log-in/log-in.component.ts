import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProviderService } from '../../services/data-provider.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
loginFormGroup: FormGroup;
errorMessage = '';
isProcessing = false;
  constructor(
    private dataProvider: DataProviderService
    
  ) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  LogIn(data: FormGroup) {
    if(data.valid){
      this.isProcessing = true;
      this.dataProvider.login(data.value)
      .subscribe(
        (success: any) => {
          this.isProcessing = false;
          localStorage.setItem("token", success.token);
          localStorage.setItem("userInfo", JSON.stringify(success.user))
          
        },
        (error: HttpErrorResponse) => {
          this.isProcessing = false;
          if(error.status === 400) {
            this.errorMessage = 'Invalid email or password';
          } else{
            this.errorMessage = 'An error occured when processing your request. our engineers are working on it';
          }
        }
      )

    }
  }
get email() {return this.loginFormGroup.get("email");}
get password() {return this.loginFormGroup.get("password"); }
}

