declare const google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
      google.accounts.id.initialize({
        client_id:'171252878087-l3ba7g2anmpti1154b2omvk14mfllklv.apps.googleusercontent.com',
        callback:(resp:any)=>this.handleLogin(resp)
      });
      google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme:'filled_blue',
        size:'large',
        shape: 'rectangle',
        width:250
      })
  }
  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }


  handleLogin(response:any){
    if(response){
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem("loggerInUser",JSON.stringify(payLoad));
      this.router.navigate(['home'])
    }
  }

}
