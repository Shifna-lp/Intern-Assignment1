import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any
  constructor(private fb:FormBuilder,private log:LoginService,private router:Router) {
    this.loginForm = this.fb.group({
      username : ['',[Validators.required,Validators.compose([
        Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')
      ])]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    }) ;
   }

  ngOnInit(): void {
  }
login(){
  console.log(this.loginForm.value)
  console.log(this.loginForm.value.username)
  console.log("function called");
  this.log.loginuser(this.loginForm.value.username,this.loginForm.value.password)
  .subscribe((data)=>{
    console.log(this.loginForm.value)
    alert("login successfull")
    this.router.navigate(['dash'])
  })
  
}
}
