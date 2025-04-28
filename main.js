

let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
    }

function hideMenu() {
    navLinks.style.right = "-200px";
    }



//Display current section in about us page

function showContent(sectionId) {
    const allSections = document.querySelectorAll('.about-us, .philosophy-of-education, .um-seal, .university-history, .admission-guidelines, .admission-policies' );
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function showSection(sectionId) {
    showContent(sectionId);
}

function initPage() {
    const allSections = document.querySelectorAll('.about-us, .philosophy-of-education, .um-seal, .university-history, .admission-guidelines,  .admission-policies');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    const defaultSection = document.getElementById('university-president');
    if (defaultSection) {
        defaultSection.style.display = 'block';
    }
    
    const navButtons = document.querySelectorAll('.about-navigation button');
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
    }
}

window.onload = initPage;