// DOM Elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const mainContent = document.querySelector('.main-content');
const sidebar = document.querySelector('.sidebar');

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
    mainContent.classList.toggle('sidebar-expanded');
    sidebar.classList.toggle('expanded');
    
    // Update toggle icon
    const icon = sidebarToggle.querySelector('i');
    if (sidebar.classList.contains('expanded')) {
        icon.classList.replace('fa-chevron-right', 'fa-chevron-left');
    } else {
        icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
    }
});

// Progress Circle Animation
function setProgress(percent) {
    const circle = document.querySelector('.progress-circle-value');
    const circumference = 282.7; // 2 * π * (radius = 45)
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

// Initialize progress
document.addEventListener('DOMContentLoaded', () => {
    // Set initial progress (example: 75%)
    setProgress(75);
    
    // Initialize tooltips if using a tooltip library
    if (typeof tippy !== 'undefined') {
        tippy('[data-tippy-content]');
    }
    
    // Load user data
    loadUserData();
    
    // Load achievements
    loadAchievements();
    
    // Load recent activity
    loadRecentActivity();
    
    // Load documents
    loadDocuments();
    
    // Load scholarships
    loadScholarships();
});

// Load User Data
async function loadUserData() {
    try {
        // Example data - replace with actual API call
        const userData = {
            name: 'John Doe',
            level: 'Advanced Learner',
            streak: 15,
            stats: {
                coursesCompleted: 12,
                documentsUploaded: 8,
                achievementsEarned: 25,
                scholarshipsApplied: 5
            }
        };
        
        updateUserInterface(userData);
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Update UI with user data
function updateUserInterface(userData) {
    // Update user info
    document.querySelector('.user-name').textContent = userData.name;
    document.querySelector('.user-level').textContent = userData.level;
    document.querySelector('.streak-count').textContent = `${userData.streak} day streak`;
    
    // Update stats
    const stats = userData.stats;
    document.querySelector('.courses-completed').textContent = stats.coursesCompleted;
    document.querySelector('.documents-uploaded').textContent = stats.documentsUploaded;
    document.querySelector('.achievements-earned').textContent = stats.achievementsEarned;
    document.querySelector('.scholarships-applied').textContent = stats.scholarshipsApplied;
}

// Load Achievements
async function loadAchievements() {
    try {
        // Example data - replace with actual API call
        const achievements = [
            { icon: 'fa-trophy', title: 'First Course Completed', date: '2024-03-15' },
            { icon: 'fa-star', title: '10-Day Streak', date: '2024-03-10' },
            { icon: 'fa-certificate', title: 'Top Performer', date: '2024-03-05' }
        ];
        
        const achievementsGrid = document.querySelector('.achievements-grid');
        achievementsGrid.innerHTML = achievements.map(achievement => `
            <div class="achievement-item">
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <h3>${achievement.title}</h3>
                <p>${new Date(achievement.date).toLocaleDateString()}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading achievements:', error);
    }
}

// Load Recent Activity
async function loadRecentActivity() {
    try {
        // Example data - replace with actual API call
        const activities = [
            { type: 'course', title: 'Completed Python Basics', date: '2024-03-15' },
            { type: 'document', title: 'Uploaded Certificate', date: '2024-03-14' },
            { type: 'scholarship', title: 'Applied for STEM Scholarship', date: '2024-03-13' }
        ];
        
        const timeline = document.querySelector('.activity-timeline');
        timeline.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <h4>${activity.title}</h4>
                <p>${new Date(activity.date).toLocaleDateString()}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading activities:', error);
    }
}

// Load Documents
async function loadDocuments() {
    try {
        // Example data - replace with actual API call
        const documents = [
            { title: 'Certificate.pdf', type: 'PDF', date: '2024-03-15' },
            { title: 'Transcript.pdf', type: 'PDF', date: '2024-03-10' },
            { title: 'Resume.docx', type: 'DOCX', date: '2024-03-05' }
        ];
        
        const documentsGrid = document.querySelector('.documents-grid');
        documentsGrid.innerHTML = documents.map(doc => `
            <div class="document-card">
                <div class="document-icon">
                    <i class="fas fa-file-${doc.type.toLowerCase()}"></i>
                </div>
                <h3>${doc.title}</h3>
                <p>Uploaded on ${new Date(doc.date).toLocaleDateString()}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading documents:', error);
    }
}

// Load Scholarships
async function loadScholarships() {
    try {
        // Example data - replace with actual API call
        const scholarships = [
            { title: 'STEM Excellence', deadline: '2024-04-15', status: 'Applied' },
            { title: 'Future Leaders', deadline: '2024-04-20', status: 'In Progress' },
            { title: 'Tech Innovation', deadline: '2024-04-25', status: 'Not Started' }
        ];
        
        const scholarshipsGrid = document.querySelector('.scholarships-grid');
        scholarshipsGrid.innerHTML = scholarships.map(scholarship => `
            <div class="scholarship-card">
                <h3>${scholarship.title}</h3>
                <p>Deadline: ${new Date(scholarship.deadline).toLocaleDateString()}</p>
                <span class="status ${scholarship.status.toLowerCase().replace(' ', '-')}">${scholarship.status}</span>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading scholarships:', error);
    }
}

// Handle View All buttons
document.querySelectorAll('.view-all').forEach(button => {
    button.addEventListener('click', (e) => {
        const section = e.target.closest('.card-header').dataset.section;
        // Navigate to the full section view
        // window.location.href = `/${section}`;
        console.log(`Viewing all ${section}`);
    });
}); 