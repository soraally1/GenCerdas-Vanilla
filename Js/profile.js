// DOM Elements
const sidebarToggle = document.getElementById('toggleSidebar');
const mainContent = document.querySelector('.main-content');
const sidebar = document.querySelector('.sidebar');
const sidebarIcon = document.getElementById('sidebarIcon');

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    mainContent.classList.toggle('sidebar-expanded');
    sidebarIcon.classList.toggle('bx-chevron-left');
    sidebarIcon.classList.toggle('bx-chevron-right');
});

// Progress Circle Animation
function setProgress(percent) {
    const circle = document.querySelector('.progress-circle-value');
    const circumference = 282.7; // 2 * π * (radius = 45)
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

// Dummy Data
const achievementsData = [
    {
        icon: 'fa-trophy',
        title: 'First Course Completed',
        description: 'Completed your first course',
        date: '2024-03-15',
        xp: 500
    },
    {
        icon: 'fa-fire',
        title: '7-Day Streak',
        description: 'Maintained a 7-day learning streak',
        date: '2024-03-10',
        xp: 300
    },
    {
        icon: 'fa-star',
        title: 'Top Performer',
        description: 'Ranked in top 10% of learners',
        date: '2024-03-05',
        xp: 1000
    },
    {
        icon: 'fa-certificate',
        title: 'TOEFL Master',
        description: 'Completed TOEFL preparation course',
        date: '2024-03-01',
        xp: 800
    }
];

const recentActivities = [
    {
        type: 'course',
        icon: 'fa-graduation-cap',
        title: 'Completed TOEFL Speaking Module',
        description: 'Finished with 95% score',
        time: '2 hours ago',
        color: 'text-green-500'
    },
    {
        type: 'document',
        icon: 'fa-file-upload',
        title: 'Uploaded IELTS Certificate',
        description: 'Document pending verification',
        time: '5 hours ago',
        color: 'text-blue-500'
    },
    {
        type: 'achievement',
        icon: 'fa-trophy',
        title: 'Earned New Achievement',
        description: 'Perfect Score Streak',
        time: '1 day ago',
        color: 'text-yellow-500'
    },
    {
        type: 'scholarship',
        icon: 'fa-gift',
        title: 'Applied for STEM Scholarship',
        description: 'Application under review',
        time: '2 days ago',
        color: 'text-purple-500'
    }
];

const completedCourses = [
    {
        title: 'TOEFL Speaking',
        progress: 100,
        icon: 'fa-comments'
    },
    {
        title: 'IELTS Writing',
        progress: 100,
        icon: 'fa-pen'
    },
    {
        title: 'Interview Preparation',
        progress: 100,
        icon: 'fa-user-tie'
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial progress
    setProgress(75);
    
    // Load achievements
    loadAchievements();
    
    // Load recent activities
    loadRecentActivities();
    
    // Load completed courses
    loadCompletedCourses();
});

// Load Achievements
function loadAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = achievementsData.map(achievement => `
        <div class="achievement-item">
            <div class="achievement-icon">
                <i class="fas ${achievement.icon}"></i>
            </div>
            <div class="achievement-content">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
                <div class="achievement-meta">
                    <span>${new Date(achievement.date).toLocaleDateString()}</span>
                    <span class="achievement-xp">+${achievement.xp} XP</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Recent Activities
function loadRecentActivities() {
    const activityTimeline = document.getElementById('activityTimeline');
    activityTimeline.innerHTML = recentActivities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.color}">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <span class="activity-date">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

// Load Completed Courses
function loadCompletedCourses() {
    const completedCoursesContainer = document.getElementById('completedCourses');
    completedCoursesContainer.innerHTML = completedCourses.map(course => `
        <div class="completed-course">
            <div class="course-icon">
                <i class="fas ${course.icon}"></i>
            </div>
            <div class="course-info">
                <h4>${course.title}</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle button clicks
function handleOpenClass() {
    window.location.href = 'course.html';
}

function handleDailyTarget() {
    // Implement daily target functionality
    console.log('Daily target clicked');
}

function handleLogout() {
    // Implement logout functionality
    console.log('Logout clicked');
} 