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