import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {

  @ViewChild('continueRequestDialog') continueRequestDialogRef!: TemplateRef<any>;

  dialogContinueOpenend = false;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngDoCheck(): void {
    if (this.dialogContinueOpenend == false) {
      setTimeout(()=>{
        this.openDialog()
        this.dialogContinueOpenend = true
      }, 5000)
    }
  }

  goToRequest() {
    this.dialog.closeAll();
    this.router.navigate(['/leasing-request']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.continueRequestDialogRef, {
        width: '900px',
        height: '400px'
    });
}

}
