function navigateTo(section) {
    const content = document.getElementById('content');
    switch(section) {
        case 'home':
            content.innerHTML = '<h2>Home</h2><p>Welcome to my portfolio!</p>';
            break;
        case 'about':
            content.innerHTML = '<h2>About</h2><p>This is the about section.</p>';
            break;
        case 'projects':
            content.innerHTML = '<h2>Projects</h2><p>Here are some of my projects.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h2>Contact</h2><p>Get in touch with me.</p>';
            break;
        default:
            content.innerHTML = '<h2>Home</h2><p>Welcome to my portfolio!</p>';
    }
}