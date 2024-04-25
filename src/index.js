document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API
    fetch('http://localhost:8080/emp/getAll')
        .then(response => response.json())
        .then(data => {
            // Populate the table with employee data
            const employeeTable = document.getElementById('employee-data');
            data.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                `;
                employeeTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
