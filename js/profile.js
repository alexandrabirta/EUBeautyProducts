document.addEventListener("DOMContentLoaded", function() {
    fetch('php/get_user_info.php')
    .then(response => response.json())
    .then(userInfo => {
        const profileSection = document.getElementById('profile-info');
        profileSection.innerHTML = `
            <form id="profileForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value="${userInfo.username}" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="${userInfo.email}" required>
                
                <button type="submit">Update Profile</button>
            </form>
        `;

        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            updateProfile();
        });
    })
    .catch(error => console.error('Error loading user info:', error));
});

function updateProfile() {
    const formData = new FormData(document.getElementById('profileForm'));

    fetch('php/update_user_info.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error updating profile:', error));
}
