# Employee Management Form using JsonPowerDB

> A web-based Employee Management System developed using HTML, Bootstrap, JavaScript, jQuery, and JsonPowerDB for managing employee information.

The Employee Management Form is a web-based application developed as a micro project using **JsonPowerDB**. It enables users to manage employee information efficiently by performing CRUD operations (Create, Read, Update, and Reset). The application uses **Employee ID** as the primary key to uniquely identify each employee record.

When a user enters an Employee ID, the application checks whether the record already exists in the JsonPowerDB database. If the Employee ID is not found, the user can enter employee details such as **Employee Name**, **Salary**, **HRA**, **DA**, and **Deduction**, and save them as a new record. If the Employee ID already exists, the corresponding employee details are displayed, allowing the user to update the existing information. The application also performs input validation to ensure that all required fields are completed before saving or updating data.

The project is developed using **HTML5**, **Bootstrap 5**, **JavaScript**, **jQuery**, and **JsonPowerDB**, demonstrating seamless integration between a modern web interface and a NoSQL database.

---

## Installation

### Windows

1. Download or clone the repository.

```sh
git clone https://github.com/roshnirawat909/EmployeeManagementForm.git
```

2. Open the project in **Apache NetBeans IDE**.

3. Run the project.

4. Make sure you have an active internet connection because JsonPowerDB APIs are cloud-based.

---

## Usage Example

### Add a New Employee

1. Enter Employee ID.
2. If the Employee ID does not exist:
   - Enter Employee Name
   - Enter Salary
   - Enter HRA
   - Enter DA
   - Enter Deduction
3. Click **Save**.

### Update Existing Employee

1. Enter an existing Employee ID.
2. Existing employee details will be displayed.
3. Modify the required fields.
4. Click **Change**.

### Reset the Form

Click the **Reset** button to clear all fields and start a new operation.

---

## Development Setup

### Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery
- JsonPowerDB

### Database Details

| Item | Value |
|------|-------|
| Database Name | EMP-DB |
| Relation Name | EmpData |
| Primary Key | Employee ID |

---

## Benefits of using JsonPowerDB

- Simple and Easy to Use
- High Performance
- Lightweight Database
- REST API Based
- Schema-Free Database
- Serverless Architecture
- Fast CRUD Operations
- Easy JavaScript Integration
- No SQL Knowledge Required

---

## Features

- Add Employee Details
- Search Employee using Employee ID
- Update Existing Employee
- Reset Form
- Input Validation
- Primary Key Validation
- Fast Database Access

---

## Release History

### Version 1.0 (July 2026)

- Initial Release
- Created Employee Management Form
- Connected with JsonPowerDB
- Implemented Save Functionality
- Implemented Update Functionality
- Implemented Reset Functionality
- Added Input Validation
- Added Primary Key Search

---

## Project Structure

```text
EmployeeManagementForm/
│── index.html
│── index.js
│── README.md
```

---

## Scope of Functionalities

- Add Employee Details
- Search Employee by Employee ID
- Update Existing Employee Information
- Reset Form
- Validate User Input
- Perform CRUD Operations using JsonPowerDB

---

## Future Enhancements

- Delete Employee Record
- Display All Employee Records
- Search Employee by Name
- Employee Dashboard
- Salary Report Generation
- User Authentication
- Export Employee Data to Excel/PDF

---

## Meta

**Developer:** Roshni Rawat

**Course:** B.Tech Computer Science & Information Technology

**College:** Sagar Institute of Research & Technology (SIRT), Bhopal

**GitHub Repository**

https://github.com/roshnirawat909/EmployeeManagementForm

---

## License

This project is developed for educational purposes as a **JsonPowerDB Micro Project**. It demonstrates the integration of JsonPowerDB with a web-based application using HTML, Bootstrap, JavaScript, and jQuery.
