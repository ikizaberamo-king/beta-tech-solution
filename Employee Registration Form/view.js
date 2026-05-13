const employeeContainer = document.getElementById("employeeContainer");

/* GET DATA FROM FIRST PAGE */

const employees = window.opener?.employees || [];

if(employees.length === 0){

    employeeContainer.innerHTML = `
        <h2>No Employees Registered</h2>
    `;
}

/* DISPLAY EMPLOYEES */

employees.forEach(employee => {

    const card = document.createElement("div");

    card.classList.add("employee-card");

    card.innerHTML = `
    
        <h3>${employee.fullname}</h3>

        <p><strong>Email:</strong> ${employee.email}</p>

        <p><strong>Phone:</strong> ${employee.phone}</p>

        <p><strong>Gender:</strong> ${employee.gender}</p>

        <p><strong>Department:</strong> ${employee.department}</p>

        <p><strong>Position:</strong> ${employee.position}</p>

        <p><strong>Hire Date:</strong> ${employee.hiredate}</p>

        <p><strong>Address:</strong> ${employee.address}</p>
    `;

    employeeContainer.appendChild(card);

});