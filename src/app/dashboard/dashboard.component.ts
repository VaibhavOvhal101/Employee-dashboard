import { Component, ViewChild } from '@angular/core';
import { EmpTableService } from '../services/emp-table.service';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  Users = [];
  empList: any;
  value3: any;
  displayBasic: any;
  // Users: any
  // Name: any
  // showDialog: any
  visible: any;
  valueOfForm: FormData | undefined;
  first: number = 0;
  editId: any

  rows: number = 5;
  data: any;
  result: any;

  constructor(
    private empService: EmpTableService,
    private primengConfig: PrimeNGConfig,
    private http: HttpClient,
    private dialog: ConfirmDialogModule
  ) { }

  // ---------------Employee list From Json.DB------------------
  ngOnInit() {
    this.setTableData();
  }
  setTableData() {
    this.empService.employee().subscribe((response) => {
      this.empList = response;
      console.log(this.empList);
    });
    this.primengConfig.ripple = true;
  }

  // -----------------DialogBox Validations--------------------------

  dialogForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    Address: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required]),
  });
  get Name() {
    return this.dialogForm.get('Name');
  }
  get mobile() {
    return this.dialogForm.get('mobile');
  }
  get Address() {
    return this.dialogForm.get('Address');
  }
  get Age() {
    return this, this.dialogForm.get('Age');
  }

  // ----------------post Method-----------------------
  displayResponsive(userData: any) {
    console.log(userData);
    let valueOfForm;

    valueOfForm = userData.value;
    this.http
      .post('http://localhost:3000/Users', valueOfForm)
      .subscribe((res) => {
        console.log(res);
        this.setTableData();
        this.dialogForm.reset();
        this.visible = false;
      });
    // this.displayBasic = false
  }
  showBasicDialog() {
    this.visible = true;
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }



  // -------------------Edit-----------------
  onEdit(id: any) {
    debugger
    this.editId = id
    this.showBasicDialog();
    this.http.get('http://localhost:3000/Users').subscribe((res) => {
      this.data = res;
      console.log(this.data);
      debugger
      console.log(this.data.filter(i => i.id == id));
      this.result = this.data.filter(i => i.id == id);

      this.dialogForm.patchValue({
        Name: this.result[0].Name,
        mobile: this.result[0].mobile,
        Address: this.result[0].Address,
        Age: this.result[0].Age
      })

    });
  }
  putData() {
    this.http
      .put('http://localhost:3000/Users/id', this.dialogForm.value)
      .subscribe((res) => {
        console.log(res);
        this.setTableData();
        this.dialogForm.reset();
        this.visible = false;
      });
  }

  update() {
    this.empService.update(this.editId, this.dialogForm.value).subscribe((res) => {
      console.log(res);
    })

  }
  onDelete(id) {
    this.empService.delete(id).subscribe((res) => {
      console.log(res);
    }
    )
    this.setTableData()
  }
}