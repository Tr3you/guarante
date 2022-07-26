import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: 'create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
  })
  export class CreateAccountComponent {
    
    identityForm: FormGroup;
    personalInformationForm: FormGroup;
    financialInformation: FormGroup;
    fileList: any = []
    isChecked = '';
    isLoading = false;
    hide = true;


    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private cookies:  CookieService
    ){
      this.identityForm = this.formBuilder.group({
        idDocumentType: ['', [Validators.required]],
        idDocumentNumber: [null, [Validators.required]],
        idDocumentDate: [null, [Validators.required]],
        idDocumentCountry: ['', [Validators.required]],
        idDocumentCity: [null, [Validators.required]],
        countryBirth: ['', [Validators.required]],
        cityBirth: [null, [Validators.required]],
        dateBirth: [null, [Validators.required]],
        gender: [null, [Validators.required]], 
      });
      this.personalInformationForm = this.formBuilder.group({
        firstName: [null, [Validators.required]],
        middleName: [null],
        lastNames: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password:[null, [Validators.required]],
        passwordRepeat: [null, [Validators.required]],
        residenceCity: [null, [Validators.required]],
        residenceAddress: [null, [Validators.required]],
        cellphoneNumber: [null, [Validators.required]]
      });
      this.financialInformation = this.formBuilder.group({
        economicActivity: ['', [Validators.required]],
        incomeRange: ['', [Validators.required]],
        expensesRange: [null, [Validators.required]]
      })
    }

    handleFileInput(e: Event) {
      const files = (e.target as HTMLInputElement).files
      if(typeof files != null){
        for (let i = 0; i < files!.length; i++) {
          this.fileList.push({
            name: files![i].name.split('.')[0],
            size: files![i].size,
            type: files![i].type
          })
        }
      }
    }

    createAccount(){
      this.isLoading = true;
      setTimeout(()=>{
        this.cookies.set("isLogged", "true")
        this.isLoading = false;
        this.router.navigate(['/home'])
    }, 3000)
    }

  }