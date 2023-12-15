import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  employeeObj: any = {
    "name": "",
    "age": ""
  };

  relative: any[] = [];
  editIndex: number | null = null; // Nullable to check if in edit mode

  addEmployee() {
    if (this.editIndex !== null) {
      // If in edit mode, update the existing element
      this.relative[this.editIndex].name = this.employeeObj.name;
      this.relative[this.editIndex].age = this.employeeObj.age;
      this.editIndex = null; // Exit edit mode
    } else {
      // If not in edit mode, add a new element
      this.relative.unshift({ name: this.employeeObj.name, age: this.employeeObj.age });
    }

    // Clear the input after adding or updating
    this.employeeObj.name = "";
    this.employeeObj.age = "";
  }

  editEmployee(index: number) {
    // Enter edit mode
    this.editIndex = index;

    // Set the input values to the selected element
    this.employeeObj.name = this.relative[index].name;
    this.employeeObj.age = this.relative[index].age;
  }

  deleteEmployee(index: number) {
    // Exit edit mode when deleting
    this.editIndex = null;

    this.relative.splice(index, 1);
  }
}
