import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(8)],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value).subscribe(() => {
      //   this.router.navigate(['/dashboard']);
      // });
    }
  }
}
