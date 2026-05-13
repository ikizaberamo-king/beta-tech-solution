const form = document.getElementById("employeeForm");

/* TEMPORARY MEMORY */

window.employees = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const employee = {

        fullname: document.getElementById("fullname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        gender: document.getElementById("gender").value,

        department: document.getElementById("department").value,

        position: document.getElementById("position").value,

        hiredate: document.getElementById("hiredate").value,

        address: document.getElementById("address").value
    };

    /* SAVE TEMPORARILY */

    window.employees.push(employee);

    alert("Employee Registered Successfully!");

    form.reset();

});