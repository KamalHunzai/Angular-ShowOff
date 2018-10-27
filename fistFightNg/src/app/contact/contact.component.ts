import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'kamal-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.fromBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}

}
