import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignInActive = true;
  isSignUpActive = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }
  /*signinTransition(): void {
    this.isSignInActive = true;
    this.isSignUpActive = false;
  }

  signupTransition(): void {
    this.isSignUpActive = true;
    this.isSignInActive = false;
  }*/

  ngAfterViewInit(): void {
    const btnSignin = this.el.nativeElement.querySelector('#signin');
    const btnSignup = this.el.nativeElement.querySelector('#signup');

    this.renderer.listen(btnSignin, 'click', () => {
      this.signinTransition();
    })
    this.renderer.listen(btnSignup, 'click', () => {
      this.signupTransition();
    })
  }

  signinTransition(): void{
    const loginContainer = this.el.nativeElement.querySelector("#login-container");
    this.renderer.removeClass(loginContainer, 'sign-up-ts');
    this.renderer.addClass(loginContainer, 'sign-in-ts');
  }
  signupTransition(): void{
    const loginContainer = this.el.nativeElement.querySelector("#login-container");
    this.renderer.removeClass(loginContainer, 'sign-in-ts');
    this.renderer.addClass(loginContainer, 'sign-up-ts');
  }
}
