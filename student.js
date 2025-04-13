function enroll(courseName) {
    // Open the modal
    openModal();
  
    // Auto-select the course in the dropdown
    const courseDropdown = document.getElementById("courseSelect");
    courseDropdown.value = courseName;
  }
  
  
  function openModal() {
    document.getElementById("registerModal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("registerModal").classList.add("hidden");
  }
  
  document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("courseSelect").value;
  
    if (name && email && course) {
      alert(`✅ Registration Successful!\n\nName: ${name}\nEmail: ${email}\nCourse: ${course}`);
      closeModal();
      this.reset(); // clear form
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const streakCountEl = document.getElementById('streakCount');

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();
const key = 'loginDays_' + currentYear + '_' + currentMonth;

// Load previous login days from localStorage
let loginDays = JSON.parse(localStorage.getItem(key)) || [];

// Check if user logged in today
if (!loginDays.includes(currentDate)) {
  loginDays.push(currentDate);
  localStorage.setItem(key, JSON.stringify(loginDays));
}

// Calculate streak
loginDays.sort((a, b) => a - b);
let streak = 1;
for (let i = loginDays.length - 2; i >= 0; i--) {
  if (loginDays[i + 1] - loginDays[i] === 1) {
    streak++;
  } else {
    break;
  }
}
streakCountEl.textContent = streak;

// Display month and year
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
monthYear.textContent = `${monthNames[currentMonth]}${currentYear}`;

// Generate calendar
const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
for (let day = 1; day <= totalDays; day++) {
  const dayBox = document.createElement('div');
  dayBox.classList.add('day');
  dayBox.textContent = day;

  if (loginDays.includes(day)) {
    dayBox.classList.add('logged');
  }

  calendar.appendChild(dayBox);
}
function openCourseModal() {
    document.getElementById('courseModal').classList.remove('hidden');
  }
  
  function closeCourseModal() {
    document.getElementById('courseModal').classList.add('hidden');
  }
 
 
  const cEditor = CodeMirror.fromTextArea(document.getElementById("cCode"), {
    lineNumbers: true,
    mode: "text/x-csrc",
    theme: "dracula",
    matchBrackets: true,
    autoCloseBrackets: true
  });

  function closeCEditor() {
    document.getElementById("cEditor").classList.add("hidden");
  }

  async function runCCode() {
    const code = cEditor.getValue();

    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId: 'YOUR_CLIENT_ID',         // ← Replace with JDoodle credentials
        clientSecret: 'YOUR_CLIENT_SECRET',
        script: code,
        language: 'c',
        versionIndex: '5'                   // Check JDoodle docs for versionIndex
      })
    });

    const result = await response.json();
    document.getElementById('cOutput').textContent = result.output;
  }

