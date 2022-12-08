import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-error-help',
  templateUrl: './error-help.component.html',
  styleUrls: ['./error-help.component.css']
})

export class ErrorHelpComponent {
@Input ()
control: FormControl | undefined;
}

