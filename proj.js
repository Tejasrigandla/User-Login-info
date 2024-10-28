function getAll() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    
    if (localStorage.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No data found</td></tr>";
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const row = `
            <tr>
                <td>${key}</td>
                <td>${value}</td>
                <td><button class="edit-btn" onclick="edit('${key}')">Edit</button></td>
                <td><button class="delete-btn" onclick="delet('${key}')">Delete</button></td>
            </tr>`;
        tableBody.innerHTML += row;
    }
}

function save() {
    const loginname = document.getElementById("loginname").value;
    const password = document.getElementById("password").value;

    if (loginname === "" || password === "") {
        alert("Please enter both login name and password.");
        return;
    }

    localStorage.setItem(loginname, password);
    alert("User info saved successfully.");

    document.getElementById("loginname").value = "";
    document.getElementById("password").value = "";
    getAll();
}

function edit(loginname) {
    const password = localStorage.getItem(loginname);
    
    document.getElementById("loginname").value = loginname;
    document.getElementById("password").value = password;
    document.getElementById("updateBtn").disabled = false;
}

function update() {
    const loginname = document.getElementById("loginname").value;
    const password = document.getElementById("password").value;

    if (loginname === "" || password === "") {
        alert("Please enter both login name and password.");
        return;
    }

    localStorage.setItem(loginname, password);
    alert("User info updated successfully.");

    document.getElementById("loginname").value = "";
    document.getElementById("password").value = "";
    document.getElementById("updateBtn").disabled = true;
    getAll();
}

function delet(loginname) {
    localStorage.removeItem(loginname);
    getAll();
}

function deleteall() {
    if (confirm("Are you sure you want to delete all users?")) {
        localStorage.clear();
        getAll();
    }
}
