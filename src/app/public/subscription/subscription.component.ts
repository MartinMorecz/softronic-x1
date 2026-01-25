import {Component, inject, OnDestroy} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/input";

@Component({
  selector: 'subscription',
  imports: [
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatError
  ],
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent implements OnDestroy{

  formBuilder = inject(FormBuilder);

  subscriptionForm = this.formBuilder.group({
    firstName: this.formBuilder.nonNullable.control<string | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    secondName: this.formBuilder.nonNullable.control<string | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: this.formBuilder.nonNullable.control<string | undefined>(undefined, [Validators.email, Validators.required, Validators.minLength(10)]),
    notification: this.formBuilder.nonNullable.control<boolean>(false)
  })

  ngOnDestroy() {
    this.subscriptionForm.reset();
  }

  get firstName() {
    return this.subscriptionForm.controls.firstName;
  }

}
