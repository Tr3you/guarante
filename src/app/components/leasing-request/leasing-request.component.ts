import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leasing-request',
  templateUrl: './leasing-request.component.html',
  styleUrls: ['./leasing-request.component.scss']
})
export class LeasingRequestComponent implements OnInit {

  leasingTerms: FormGroup;
  selectedPlan = ''
  costs = {
    product: 1654877,
    canon: 0,
    plan: 0,
    IVA: 0,
    option: 0,
    total: 0
  }
  formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  @ViewChild('doRequestDialog') doRequestDialogRef!: TemplateRef<any>;
  @ViewChild('signContractDialog') signContractDialogRef!: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { 
    this.leasingTerms = this.formBuilder.group({
      leasingLenght: ['', [Validators.required]],
      leasingAddress: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  selectPlan() {

    const basicCard = document.getElementById('basic');
    const diamondCard = document.getElementById('diamond');

    basicCard?.addEventListener('click', ()=>{
      if(!basicCard.classList.contains('selectedPlan')){
        basicCard?.classList.add('selectedPlan');
        diamondCard?.classList.remove('selectedPlan')
        this.selectedPlan = 'Basic'
      }
    });

    diamondCard?.addEventListener('click', ()=>{
      if(!diamondCard.classList.contains('selectedPlan')){
        diamondCard?.classList.add('selectedPlan');
        basicCard?.classList.remove('selectedPlan')
        this.selectedPlan = 'Diamond+'
      }
    })
  }

  openDialog(): void {
    this.calculateCosts()
    const dialogRef = this.dialog.open(this.doRequestDialogRef, {
        width: '530px',
        height: '420px'
    });
  }

  private calculateCosts(){
    const leasingLenght = parseInt(this.leasingTerms.get('leasingLenght')?.value) * 12
    const productPrice = leasingLenght/12 == 1 ? this.costs.product * 0.45 : leasingLenght/12 == 2 ? this.costs.product *0.8 : this.costs.product
    this.costs.canon = productPrice / leasingLenght
    this.costs.plan = this.selectedPlan == 'Basic'? this.costs.product * 0.005 : this.costs.product * 0.01
    this.costs.IVA = (this.costs.canon + this.costs.plan) * 0.19
    this.costs.total = this.costs.IVA + this.costs.canon + this.costs.plan
    if (this.selectedPlan == "Basic") {
      this.costs.option = leasingLenght/12 == 1 ? this.costs.product * 0.55 : leasingLenght/12 == 2 ? this.costs.product *0.2 : this.costs.product * 0.1
    } else if (this.selectedPlan == "Diamond+") {
      this.costs.option = leasingLenght/12 == 1 ? this.costs.product * 0.55 : leasingLenght/12 == 2 ? this.costs.product *0.1 : this.costs.product * 0
    }
  }

  requestLease(){
    const dialogRef = this.dialog.open(this.signContractDialogRef, {
      width: '900px',
      height: '550px'
    });
  }

}
