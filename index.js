document.addEventListener('DOMContentLoaded', function() {
    fetch('db.json') // Fetch data from db.json file
                .then(response => response.json()) // Parse JSON response
                .then(data => {
                    const outputDiv = document.getElementById('output');
                    data.lecturers.forEach(lecturer => {
                        const lecturerDiv = document.createElement('div');
                        lecturerDiv.classList.add('lecturer');
                        lecturerDiv.innerHTML = `
                            <h3>${lecturer.name}</h3>
                            <p><strong>Email:</strong> ${lecturer.email}</p>
                            <div class="courses">
                                <h4>Courses</h4>
                                <ul>
                                    ${lecturer.courses.map(course => `<li>${course.course_name} (${course.course_id})</li>`).join('')}
                                </ul>
                            </div>
                        `;
                        outputDiv.appendChild(lecturerDiv);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
    // Event listener for login button click
    document.getElementById('loginBtn').addEventListener('click', login);
    
    // Event listener for signup button click
    document.getElementById('signupBtn').addEventListener('click', signup);
    
    // Event listener for showing signup form
    document.getElementById('showSignupForm').addEventListener('click', showSignupForm);
    
    // Event listener for showing login form
    document.getElementById('showLoginForm').addEventListener('click', showLoginForm);
});

// Sample array iteration
const lecturers = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];

// Displaying lecturer information using array iteration
const outputDiv = document.getElementById('output');
lecturers.forEach(lecturer => {
    const lecturerInfo = document.createElement('div');
    lecturerInfo.innerHTML = `<strong>Name:</strong> ${lecturer.name}, <strong>Email:</strong> ${lecturer.email}`;
    outputDiv.appendChild(lecturerInfo);
});

// Function to handle login
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Here, you can implement your own logic for authentication.
    // For simplicity, let's just check if username and password are non-empty.
    if (username && password) {
        alert('Login successful!');
        // Redirect to attendance page or perform other actions as needed
    } else {
        alert('Invalid username or password');
    }
}

// Function to handle signup
function signup() {
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    // Here, you can implement your own logic for signing up a new lecturer.
    // For simplicity, let's just alert that the account is created.
    if (newUsername && newPassword) {
        alert('Account created successfully!');
        // You can also automatically switch to login after signup if needed
        showLoginForm();
    } else {
        alert('Please provide a username and password');
    }
}

// Function to show signup form
function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Function to show login form
function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}