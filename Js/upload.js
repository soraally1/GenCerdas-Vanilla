    // Get all file inputs
    const fileInputs = document.querySelectorAll('.file-input');
    const progressBar = document.querySelector('.progress-fill');
    const toast = document.querySelector('.toast');
    
    // Add event listeners to all file inputs
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                const fileLabel = this.previousElementSibling;
                
                // Start upload simulation
                document.body.classList.add('uploading');
                
                // Change button text during upload
                fileLabel.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
                
                // Simulate upload process
                setTimeout(() => {
                    // Upload completed
                    document.body.classList.remove('uploading');
                    fileLabel.innerHTML = '<i class="fas fa-check"></i> Uploaded';
                    fileLabel.style.backgroundColor = '#4CAF50';
                    fileLabel.style.color = 'white';
                    
                    // Show toast notification
                    toast.classList.add('show');
                    toast.querySelector('span').textContent = `${fileName} berhasil diupload!`;
                    
                    // Hide toast after 3 seconds
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 3000);
                }, 3000);
            }
        });
    });
    
    // Add random entrance delay to cards
    document.querySelectorAll('.upload-card').forEach((card, index) => {
        card.style.animationDelay = `${0.1 * index}s`;
    });
    
    // Add hover effect to upload buttons
    const uploadButtons = document.querySelectorAll('.upload-btn');
    uploadButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.parentElement.style.transform = 'translateY(-8px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.parentElement.style.transform = 'translateY(-5px)';
        });
    });