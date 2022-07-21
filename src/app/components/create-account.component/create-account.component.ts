import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
  })
  export class CreateAccountComponent {
    
    identityForm: FormGroup;
    personalInformationForm: FormGroup;
    financialInformation: FormGroup;
    idDocumentType =  "";

    constructor(
      private formBuilder: FormBuilder
    ){
      this.identityForm = this.formBuilder.group({
        idDocumentNumber: [null, [Validators.required]],
        idDocumentDate: [null, [Validators.required]],
        idDocumentCountry: [null, [Validators.required]],
        idDocumentCity: [null, [Validators.required]],
        countryBirth: [null, [Validators.required]],
        cityBirth: [null, [Validators.required]],
        DateBirth: [null, [Validators.required]],
        gender: [null, [Validators.required]]  
      });
      this.personalInformationForm = this.formBuilder.group({
        firstName: [null, [Validators.required]],
        secondName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        secondLastName: [null, [Validators.required]],
        residenceCity: [null, [Validators.required]],
        residenceAddress: [null, [Validators.required]],
        cellphoneNumber: [null, [Validators.required]]
      });
      this.financialInformation = this.formBuilder.group({
        incomeSource: [null, [Validators.required]],
        incomeRange: [null, [Validators.required]],
        expensesRange: [null, [Validators.required]]
      })
    }
  }