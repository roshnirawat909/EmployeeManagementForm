// ===============================
// JSONPowerDB Configuration
// ===============================

var connToken = "90935086|-31949247936409781|90904045";
var dbName = "EMP-DB";
var relName = "EmpData";

var baseUrl = "http://api.login2explore.com:5577";
var irl = "/api/irl";
var iml = "/api/iml";

var recNo = "";

// ===============================
// Page Load
// ===============================

$(document).ready(function () {
    resetForm();
});

// ===============================
// Reset Form
// ===============================

function resetForm() {

    $("#empForm")[0].reset();

    $("#empId").prop("disabled", false);

    $("#empName").prop("disabled", true);
    $("#salary").prop("disabled", true);
    $("#hra").prop("disabled", true);
    $("#da").prop("disabled", true);
    $("#deduction").prop("disabled", true);

    $("#saveBtn").prop("disabled", true);
    $("#changeBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", true);

    recNo = "";

    $("#empId").focus();
}

// ===============================
// Enable Form
// ===============================

function enableForm() {

    $("#empName").prop("disabled", false);
    $("#salary").prop("disabled", false);
    $("#hra").prop("disabled", false);
    $("#da").prop("disabled", false);
    $("#deduction").prop("disabled", false);

}

// ===============================
// Enable Save Mode
// ===============================

function enableSaveMode() {

    enableForm();

    $("#saveBtn").prop("disabled", false);
    $("#changeBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", false);

    $("#empName").focus();
}

// ===============================
// Enable Change Mode
// ===============================

function enableChangeMode() {

    enableForm();

    $("#empId").prop("disabled", true);

    $("#saveBtn").prop("disabled", true);
    $("#changeBtn").prop("disabled", false);
    $("#resetBtn").prop("disabled", false);

    $("#empName").focus();
}


// ===============================
// Validate Form Data
// ===============================

function validateAndGetFormData() {

    var id = $("#empId").val().trim();
    var name = $("#empName").val().trim();
    var salary = $("#salary").val().trim();
    var hra = $("#hra").val().trim();
    var da = $("#da").val().trim();
    var deduction = $("#deduction").val().trim();

    if (id === "") {
        alert("Employee ID Required");
        $("#empId").focus();
        return "";
    }

    if (name === "") {
        alert("Employee Name Required");
        $("#empName").focus();
        return "";
    }

    if (salary === "") {
        alert("Salary Required");
        $("#salary").focus();
        return "";
    }

    if (hra === "") {
        alert("HRA Required");
        $("#hra").focus();
        return "";
    }

    if (da === "") {
        alert("DA Required");
        $("#da").focus();
        return "";
    }

    if (deduction === "") {
        alert("Deduction Required");
        $("#deduction").focus();
        return "";
    }

    var jsonObj = {
        id: id,
        name: name,
        salary: salary,
        hra: hra,
        da: da,
        deduction: deduction
    };

    return JSON.stringify(jsonObj);
}


// ===============================
// Get Employee
// ===============================

function getEmployee() {

    var empId = $("#empId").val().trim();

    if (empId === "") {
        resetForm();
        return;
    }

    var getReq = createGET_BY_KEYRequest(
            connToken,
            dbName,
            relName,
            JSON.stringify({
                id: empId
            })
            );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
            getReq,
            baseUrl,
            irl
            );

    $.ajaxSetup({
        async: true
    });

    if (typeof resultObj === "string") {
        resultObj = JSON.parse(resultObj);
    }

    console.log(resultObj);

    // Employee Not Found
    if (resultObj.status === 400) {

        enableSaveMode();
        return;

    }

    // Employee Found

    var dataObj = JSON.parse(resultObj.data);

    recNo = dataObj.rec_no;

    var emp = dataObj.record;

    $("#empName").val(emp.name);
    $("#salary").val(emp.salary);
    $("#hra").val(emp.hra);
    $("#da").val(emp.da);
    $("#deduction").val(emp.deduction);

    enableChangeMode();

}


// ===============================
// Save Employee
// ===============================

function saveData() {

    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    var putReqStr = createPUTRequest(
        connToken,
        jsonStr,
        dbName,
        relName
    );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
        putReqStr,
        baseUrl,
        iml
    );

    $.ajaxSetup({
        async: true
    });

    console.log(resultObj);

    if (resultObj.status === 200) {

        alert("Employee Saved Successfully");

        resetForm();

    } else {

        alert("Unable to Save Employee");

    }
}



// ===============================
// Change Employee
// ===============================

function changeData() {

    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    var updateRequest = createUPDATERecordRequest(
        connToken,
        jsonStr,
        dbName,
        relName,
        recNo
    );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
        updateRequest,
        baseUrl,
        iml
    );

    $.ajaxSetup({
        async: true
    });

    console.log(resultObj);

    if (resultObj.status === 200) {

        alert("Employee Updated Successfully");

        resetForm();

    } else {

        alert("Unable to Update Employee");

    }

}

