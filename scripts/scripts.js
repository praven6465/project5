// Load header HTML dynamically
document.getElementById('header-container').innerHTML = fetch('components/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
})
.catch(err => console.error('Error loading header:', err));