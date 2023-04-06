import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { EmpTableService } from '../services/emp-table.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../Dashboard/dashboard.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  // Users = [];
  empList: any;
  visible: any;
  editId: any
  updateBtn: boolean
  saveBtn: boolean
  dialogLabel = "Add New Employee";
  data: Object;
  result: any;
  // messages: any
  // showDialog: boolean;

  constructor(private popup: ConfirmationService,
    private http: HttpClient,
    private empService: EmpTableService,
    private route: Router,
    private ref: DynamicDialogRef) {
  }
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
  resetValue() {
    this.ref.close()
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

  displayResponsive(userData: any) {
    let valueOfForm;
    valueOfForm = userData.value;
    this.http
      .post('http://localhost:3000/Users', valueOfForm)
      .subscribe((res) => {
        // console.log(res);
        this.visible = false;
        this.ref.close()
        this.dialogForm.reset();
      });
  }
  onEdit(id: any) {
    this.dialogLabel = "Update Employee";
    this.saveBtn = false
    this.updateBtn = true
    this.editId = id
    // this.showBasicDialog();
    this.http.get('http://localhost:3000/Users').subscribe((res) => {
      this.data = res;
      // console.log(this.data);
      // console.log(this.data.filter(i => i.id == id));
      // this.result = this.data.filter(i => i.id == id);
      // this.dialogForm.patchValue({
      //   Name: this.result[0].Name,
      //   mobile: this.result[0].mobile,
      //   Address: this.result[0].Address,
      //   Age: this.result[0].Age
      // })
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
    console.log("object");
    this.dialogLabel = "Update Employee";
    this.empService.update(this.editId, this.dialogForm.value).subscribe((res) => {
      // console.log(res);
      this.setTableData();
      this.dialogForm.reset();
      this.visible = false;
    })
  }
}
