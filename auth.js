let userRole = '';
let users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

function register() {
    const username = document.getElementById('regUsername')?.value.trim();
    const password = document.getElementById('regPassword')?.value.trim();
    const role = document.getElementById('regRole')?.value;
    if (!username || !password) {
        alert('Username and password are required.');
        return;
    }
    if (users.find(user => user.username === username)) {
        alert('Username already exists.');
        return;
    }
    users.push({ username, password, role });
    alert('Registration successful! You can now log in.');
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regRole').value = 'user';
}

function login() {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        userRole = user.role;
        const adminLink = document.getElementById('admin-link');
        if (adminLink) adminLink.style.display = userRole === 'admin' ? 'block' : 'none';
        
        const loginSection = document.getElementById('login');
        const nav = document.querySelector('nav');
        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const mapSection = document.getElementById('map-section');
        const mapContainer = document.getElementById('map-container');
        const sidebar = document.querySelector('.sidebar');
        const controlPanel = document.querySelector('.control-panel');
        const dataSection = document.getElementById('data-section');
        const adminSection = document.getElementById('admin-section');
        const contact = document.getElementById('contact');
        const footer = document.querySelector('footer');

        if (loginSection) loginSection.style.display = 'none';
        if (nav) nav.style.display = 'block';
        if (home) home.style.display = 'flex';
        if (about) about.style.display = 'block';
        if (mapSection) mapSection.style.display = 'block';
        if (mapContainer) mapContainer.style.display = 'block';
        if (sidebar) sidebar.style.display = 'block';
        if (controlPanel) controlPanel.style.display = 'block';
        if (dataSection) dataSection.style.display = 'block';
        if (adminSection && userRole === 'admin') adminSection.style.display = 'block';
        if (contact) contact.style.display = 'block';
        if (footer) footer.style.display = 'block';

        try {
            initializeMap();
            displayLandData();
            if (userRole === 'admin') displayAdminData();
        } catch (error) {
            console.error('Error during login initialization:', error);
            alert('An error occurred while loading the application. Please try again.');
        }
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    userRole = '';
    const loginSection = document.getElementById('login');
    const nav = document.querySelector('nav');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const mapSection = document.getElementById('map-section');
    const mapContainer = document.getElementById('map-container');
    const sidebar = document.querySelector('.sidebar');
    const controlPanel = document.querySelector('.control-panel');
    const dataSection = document.getElementById('data-section');
    const adminSection = document.getElementById('admin-section');
    const contact = document.getElementById('contact');
    const footer = document.querySelector('footer');

    if (loginSection) loginSection.style.display = 'flex';
    if (nav) nav.style.display = 'none';
    if (home) home.style.display = 'none';
    if (about) about.style.display = 'none';
    if (mapSection) mapSection.style.display = 'none';
    if (mapContainer) mapContainer.style.display = 'none';
    if (sidebar) sidebar.style.display = 'none';
    if (controlPanel) controlPanel.style.display = 'none';
    if (dataSection) dataSection.style.display = 'none';
    if (adminSection) adminSection.style.display = 'none';
    if (contact) contact.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    if (window.map) {
        window.map.remove();
        window.map = null;
    }
}