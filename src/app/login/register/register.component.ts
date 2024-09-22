
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'login-register',
  template: `<p>register works!</p>`,
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent { }
