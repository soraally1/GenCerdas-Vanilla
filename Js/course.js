document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");
    const mainContent = document.querySelector(".utama");
    const icon = document.getElementById("sidebarIcon");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("active");

        // Tambahkan efek rotasi
        if (sidebar.classList.contains("active")) {
            icon.classList.replace("bx-chevron-right", "bx-chevron-left");
            icon.style.transform = "rotate(360deg)";
            icon.style.color = "#ffffff";
        } else {
            icon.classList.replace("bx-chevron-left", "bx-chevron-right");
            icon.style.transform = "rotate(0deg)";
            icon.style.color = "";
        }
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove("active");
            mainContent.classList.remove("active");

            icon.classList.replace("bx-chevron-left", "bx-chevron-right");
            icon.style.transform = "rotate(0deg)";
        }
    });
});

const DocumentCourses = [
    { title: "Persiapan Dokumen", image: "../Assets/Course/Persiapan1.jpeg", level: "Level 1", description: "Panduan lengkap menyiapkan dokumen aplikasi beasiswa", tags: ["level1", "Sertifikat", "Populer"] },
    { title: "Essay Writing", image: "../Assets/Course/English1.png", level: "Level 1", description: "Tips dan trik menulis essay beasiswa yang menarik", tags: ["level1", "Sertifikat", "Populer"] },
    { title: "Interview Skills", image: "../Assets/Course/Lanjutan1.png", level: "Level 1", description: "Persiapan menghadapi wawancara beasiswa dengan percaya diri", tags: ["level1", "Sertifikat", "Populer"] },
    { title: "Research Proposal", image: "../Assets/Course/Lanjutan2.png", level: "Level 2", description: "Cara menyusun proposal penelitian untuk beasiswa S2", tags: ["level2", "Sertifikat"] }
];

const container = document.getElementById("card-container");

DocumentCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-image">
            <img src="${course.image}" alt="${course.title}">
        </div>
        <div class="card-content">
            <div class="tags">
                ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
            </div>
            <div class="title">${course.title}</div>
            <div class="description">${course.description}</div>
            <div class="btn-wrap">
            <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff' ></i></a>
            </div>
        </div>
    `;

    container.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            image: "../Assets/Course/English2.png",
            duration: "33 Menit",
            modules: "4 Modul",
            level: "level1",
            title: "IELTS Preparation",
            description: "Persiapan tes IELTS untuk memenuhi syarat beasiswa luar...",
            tags: ["level1", "Sertifikat", "Populer"]
        },
        {
            image: "../Assets/Course/English3.png",
            duration: "33 Menit",
            modules: "4 Modul",
            level: "level2",
            title: "TOEFL Preparation",
            description: "Strategi dan latihan untuk mencapai skor TOEFL yang tinggi",
            tags: ["level2", "Sertifikat", "Populer"]
        },
        {
            image: "../Assets/Course/English4.png",
            duration: "121 Menit",
            modules: "4 Modul",
            level: "level2",
            title: "Statement of Purpose",
            description: "Panduan menulis Statement of Purpose yang meyakinkan",
            tags: ["level2", "Sertifikat"]
        },
        {
            image: "../Assets/Course/Persiapan2.png",
            duration: "121 Menit",
            modules: "4 Modul",
            level: "level2",
            title: "Motivation Letter",
            description: "Cara menulis motivation letter yang persuasif",
            tags: ["level2", "Sertifikat"]
        },
        {
            image: "../Assets/Course/Japan4.png",
            duration: "121 Menit",
            modules: "4 Modul",
            level: "level2",
            title: "Motivation Letter",
            description: "Cara menulis motivation letter yang persuasif",
            tags: ["level4", "Sertifikat"]
        }
    ];

    const courseList = document.getElementById("course-list");

    courses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
                </div>
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="btn-wrap">
                <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff' ></i></a>
                </div>
            </div>
        `;

        courseList.appendChild(card);
    });
});

const JapaneseCourses = [
    { 
        title: "Basic Japanese", 
        image: "../Assets/Course/Japan1.png", 
        level: "Level 2", 
        description: "Pengenalan dasar bahasa Jepang untuk pemula", 
        tags: ["level2", "Sertifikat"] 
    },
    { 
        title: "Intermediate Japanese", 
        image: "../Assets/Course/Japan2.png", 
        level: "Level 3", 
        description: "Peningkatan kemampuan bahasa Jepang untuk level menengah", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Advanced Japanese", 
        image: "../Assets/Course/Japan3.png", 
        level: "Level 3", 
        description: "Penguasaan bahasa Jepang tingkat lanjut", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Japanese Writing", 
        image: "../Assets/Course/Japan4.png", 
        level: "Level 3", 
        description: "Teknik menulis dalam bahasa Jepang", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Japanese Speaking", 
        image: "../Assets/Course/Japan1.png", 
        level: "Level 3", 
        description: "Meningkatkan kemampuan berbicara bahasa Jepang", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Japanese Reading", 
        image: "../Assets/Course/Japan2.png", 
        level: "Level 3", 
        description: "Meningkatkan kemampuan membaca teks Jepang", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Japanese Research Writing", 
        image: "../Assets/Course/Japan3.png", 
        level: "Level 4", 
        description: "Teknik menulis karya ilmiah dalam bahasa Jepang", 
        tags: ["level4", "Sertifikat"] 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const jpcontainer = document.getElementById("jepang-list");

    JapaneseCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
                </div>
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="btn-wrap">
                    <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff'></i></a>
                </div>
            </div>
        `;

        jpcontainer.appendChild(card);
    });
});

const ChineseCourses = [
    { 
        title: "Basic Japanese", 
        image: "../Assets/Course/Japan1.png", 
        level: "Level 2", 
        description: "Pengenalan dasar bahasa Jepang untuk pemula", 
        tags: ["level2", "Sertifikat"] 
    },
    { 
        title: "Intermediate Japanese", 
        image: "../Assets/Course/Japan2.png", 
        level: "Level 3", 
        description: "Peningkatan kemampuan bahasa Jepang untuk level menengah", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Advanced Japanese", 
        image: "../Assets/Course/Japan3.png", 
        level: "Level 3", 
        description: "Penguasaan bahasa Jepang tingkat lanjut", 
        tags: ["level3", "Sertifikat"] 
    },
    { 
        title: "Japanese Writing", 
        image: "../Assets/Course/Japan4.png", 
        level: "Level 3", 
        description: "Teknik menulis dalam bahasa Jepang", 
        tags: ["level3", "Sertifikat"] 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const cncontainer = document.getElementById("china-list");

    ChineseCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
                </div>
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="btn-wrap">
                    <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff'></i></a>
                </div>
            </div>
        `;

        cncontainer.appendChild(card);
    });
});

const KoreaCourses = [
    { 
        title: "Persiapan Bahasa Korea", 
        image: "../Assets/Course/Lanjutan3.png", 
        level: "Level 5", 
        description: "Dasar-dasar bahasa Korea untuk beasiswa", 
        tags: ["level5", "Sertifikat"] 
    },
    { 
        title: "TOPIK Preparation", 
        image: "../Assets/Course/Lanjutan4.png", 
        level: "Level 5", 
        description: "Persiapan tes TOPIK untuk beasiswa ke Korea", 
        tags: ["level5", "Sertifikat"] 
    },
    { 
        title: "Korean Academic Writing", 
        image: "../Assets/Course/English1.png", 
        level: "Level 5", 
        description: "Teknik menulis akademik dalam bahasa Korea", 
        tags: ["level5", "Sertifikat"] 
    },
    { 
        title: "Korean Interview Skills", 
        image: "../Assets/Course/English2.png", 
        level: "Level 5", 
        description: "Persiapan wawancara dalam bahasa Korea", 
        tags: ["level5", "Sertifikat"] 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const krcontainer = document.getElementById("korea-list");

    KoreaCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
                </div>
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="btn-wrap">
                    <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff'></i></a>
                </div>
            </div>
        `;

        krcontainer.appendChild(card);
    });
});

const JaringanCourses = [
    { 
        title: "Scholarship Network Building", 
        image: "../Assets/Course/English3.png", 
        level: "Level 6", 
        description: "Membangun jaringan untuk kesuksesan beasiswa", 
        tags: ["level6", "Sertifikat"] 
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const jarcontainer = document.getElementById("jaringan-list");

    JaringanCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="card-content">
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag ${tag}">${tag.replace(/level(\d+)/, "Level $1")}</span>`).join("")}
                </div>
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="btn-wrap">
                    <a href="#" class="button">Mulai Belajar<i class='bx bxs-chevron-right' style='color:#ffffff'></i></a>
                </div>
            </div>
        `;

        jarcontainer.appendChild(card);
    });
});