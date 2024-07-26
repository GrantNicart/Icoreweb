document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdown = document.querySelector('.dropdown-content');

    menuBtn.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
