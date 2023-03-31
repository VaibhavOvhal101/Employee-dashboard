import { Component, ViewChild } from '@angular/core';
import { EmpTableService } from '../services/emp-table.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ServiceService } from '../services/service.service';
import { ConfirmationService } from 'primeng/api'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  notificationMessage: any = ''
  Users = [];
  empList: any;
  value3: any;
  displayBasic: any;
  visible: any;
  valueOfForm: FormData | undefined;
  first: number = 0;
  rows: number = 5;
  data: any;
  result: any;
  editId: any
  updateBtn: boolean
  saveBtn: boolean
  dialogLabel = "Add New Employee";
  messages: any

  constructor(
    private empService: EmpTableService,
    private http: HttpClient,
    private dialog: ConfirmDialogModule,
    private notification: ServiceService,
    private popup: ConfirmationService
  ) { }

  // ---------------Employee list From Json.DB------------------
  ngOnInit() {
    this.setTableData();
  }
  setTableData() {
    this.saveBtn = true
    this.empService.employee().subscribe((response) => {
      this.empList = response;
      // console.log(this.empList);
      this.empList.reverse()
      this.dialogForm.reset();
    });
  }
  // -----------------DialogBox Validations--------------------------
  dialogForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    Address: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
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
    // console.log(userData);
    let valueOfForm;
    valueOfForm = userData.value;
    this.http
      .post('http://localhost:3000/Users', valueOfForm)
      .subscribe((res) => {
        // console.log(res);
        this.setTableData();
        this.dialogForm.reset();
        this.visible = false;
      });
  }
  showBasicDialog() {
    this.visible = true;
    // window.location.reload()
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  // -------------------Edit-----------------
  onEdit(id: any) {
    this.dialogLabel = "Update Employee";
    this.saveBtn = false
    this.updateBtn = true
    this.editId = id
    this.showBasicDialog();
    this.http.get('http://localhost:3000/Users').subscribe((res) => {
      this.data = res;
      // console.log(this.data);
      // console.log(this.data.filter(i => i.id == id));
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
        // console.log(res);
      });
  }
  update() {
    this.empService.update(this.editId, this.dialogForm.value).subscribe((res) => {
      // console.log(res);
      this.setTableData();
      this.dialogForm.reset();
      this.visible = false;
    })
  }
  resetValue() {
    this.dialogForm.reset();
    // this.onEdit.reset();
  }
  // -----------------------Delete-------------------
  onDelete(id) {
    if (confirm("Are you sure want to delete?")) {
      this.empService.delete(id).subscribe((res) => {
      })
    }
    this.setTableData()
    // onDelete(id) {
    //   this.popup.confirm({
    //     icon: 'pi pi-info-circle',
    //     message: 'Are you sure that you want to delete?',
    //     accept: () => {
    //       console.log("id:---", id);

    //       this.empService.delete(id).subscribe((res) => {
    //         console.log("res:-", res);

    //         this.setTableData
    //       })
    //     },
    //     reject: () => {
    //       this.setTableData
    //     }
    //   });
    // }
  }
}