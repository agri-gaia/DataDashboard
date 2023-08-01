import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      benutzername: ['', Validators.required], 
      dataUrl: ['', Validators.required],
      idsUrl: ['', Validators.required],
      storageEndpoint: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const recipientEmail = 'test3@lmis.de';
    const subject = `Registrierung für Agri-Gaia-Marktplatz`;
    const body = `
      Benutzername: ${this.registrationForm.get('benutzername')?.value}
      DataUrl des Connectors: ${this.registrationForm.get('dataUrl')?.value}
      IdsUrl des Connectors: ${this.registrationForm.get('idsUrl')?.value}
      StorageEndpoint: ${this.registrationForm.get('storageEndpoint')?.value}
    `;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    window.open(mailtoLink);
  }
}