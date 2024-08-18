document.addEventListener('DOMContentLoaded', function() {
    function checkAuthStatus() {
        const loginLink = document.getElementById('login-link');
        const signupLink = document.getElementById('signup-link');
        const logoutLink = document.getElementById('logout-link');
        const recruitVolunteersLink = document.getElementById('recruit-volunteers-link');
        const accessToken = localStorage.getItem('access_token');

        console.log('Checking auth status. Access Token:', accessToken); // Debugging line

        if (accessToken) {
            loginLink.style.display = 'none';
            signupLink.style.display = 'none';
            logoutLink.style.display = 'block';
            // No change to recruitVolunteersLink display, always visible
        } else {
            loginLink.style.display = 'block';
            signupLink.style.display = 'block';
            logoutLink.style.display = 'none';
            // recruitVolunteersLink is always visible
        }

        // Add click event to "RECRUIT VOLUNTEERS" link
        if (recruitVolunteersLink) {
            recruitVolunteersLink.addEventListener('click', function(event) {
                if (!accessToken) {
                    event.preventDefault(); // Prevent default link behavior
                    alert('You need to be logged in to access this page.');
                    // Optionally redirect to the login page
                    window.location.href = './login.html';
                }
            });
        }
    }

    function handleLogout() {
        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', function() {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                console.log('User logged out, tokens removed.');
                window.location.href = './index.html'; // Optionally redirect to the homepage or login page
            });
        }
    }

    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            checkAuthStatus();
            handleLogout();
        })
        .catch(error => console.error('Error loading header:', error));

    // Optional: Add a listener for events that may change authentication state
    window.addEventListener('storage', function(event) {
        if (event.key === 'access_token' || event.key === 'refresh_token') {
            checkAuthStatus();
        }
    });
});
