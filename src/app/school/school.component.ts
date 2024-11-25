import { Component } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  schools: any = [];
  term: string = '';
  constructor(private _schoolService: SchoolService) {
    _schoolService.getSchool().subscribe(
      (data: any) => {
        this.schools = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  filter() {
    this._schoolService.getFilteredSchools(this.term).subscribe(
      (data: any) => {
        this.schools = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  column: string = "";
  order: string = "";
  sort() {
    this._schoolService.getSortedSchools(this.column, this.order).subscribe(
      (data: any) => {
        this.schools = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  limit: number = 0;
  page: number = 0;
  pagination() {
    this._schoolService.getPagedSchools(this.limit, this.page).subscribe(
      (data: any) => {
        this.schools = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  delete(id: string) {
    this._schoolService.deleteSchools(id).subscribe(
      (data: any) => {
        alert("Deleted  Succesfully");
        location.reload();
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
}
