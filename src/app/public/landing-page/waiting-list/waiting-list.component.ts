import {Component, inject, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {HlmInput} from "@spartan-ng/helm/input";
import {HlmButton} from "@spartan-ng/helm/button";
import {ApiService} from "../../../core/api.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-waiting-list',
  imports: [
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    HlmInput,
    HlmButton
  ],
  templateUrl: './waiting-list.component.html'
})
export class WaitingListComponent implements OnDestroy{

  fb = inject(FormBuilder);
  ref = inject(MatDialogRef);
  api = inject(ApiService);
  $destroy = new Subject<void>();

  form = this.fb.group({
    fistname: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required, Validators.maxLength(25), Validators.minLength(3)]),
    lastname: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.maxLength(25), Validators.minLength(3)]),
    email: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required, Validators.email]),
  });

  submitData(){
    console.log(this.form.value)
  }

  close() {
    this.form.reset()
    this.ref.close();
  }

  save() {
    if (this.form.invalid) return;
    this.api.joinWaitinglist({
      firstName: this.firstName.value!,
      lastName: this.lastName.value,
      email: this.email.value!
    }).pipe(takeUntil(this.$destroy)).subscribe(res => {
      if (res) {
        console.log(res);
        this.ref.close(this.form.value);
      }
    })
    // this.ref.close(this.form.value);
  }

  ngOnDestroy() {
    this.$destroy.next()
    this.$destroy.complete()
  }

  get firstName(): FormControl<string | undefined> {
    return this.form.controls.fistname;
  }

  get lastName(): FormControl<string | undefined> {
    return this.form.controls.lastname;
  }

  get email(): FormControl<string | undefined> {
    return this.form.controls.email;
  }

}
