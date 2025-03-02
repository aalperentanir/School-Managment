import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-permits',
  templateUrl: './all-permits.component.html',
  styleUrl: './all-permits.component.scss'
})
export class AllPermitsComponent {
  isSpinning = false;
  permits: any;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllPermits();
  }

  getAllPermits() {
    this.isSpinning = true;
    this.adminService.getAllAppliedPermits().subscribe((res) => {
      console.log(res);
      this.isSpinning = false;
      this.permits = res;
    })
  }

  changePermitStatus(permitId: number, status: string) {
    this.isSpinning = true;
    this.adminService.changePermitStatus(permitId, status).subscribe((res) => {
      console.log(res);
      this.isSpinning = false;
      if (res.id != null) {
        this.snackBar.open("Permit approved successfully", "SUCCESS", { duration: 5000 })
        this.getAllPermits();
      } else {
        this.snackBar.open("Something went wrong", "ERROR", { duration: 5000 });
      }
    })
  }
}
