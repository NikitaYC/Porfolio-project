// resume btn
document.addEventListener('DOMContentLoaded', function() {

    let resumeButton = document.getElementById('Resumebtn');

    resumeButton.addEventListener('click', function() {
        let link = document.createElement('a');
        link.href = 'Nikita Chaudhari-129-Frontend Developer.pdf';
        link.download = 'Nikita_Chaudhari_Resume.pdf';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    });
});




document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openGithub(superhero_resume) {
    window.location.href = "https://github.com/NikitaYC/Superhero-project";
}

function openGithub2(expedia_project) {
    window.location.href = "https://github.com/NikitaYC/web_development_project";
}

function openLive(netlifyLink) {
    window.location.href = netlifyLink;
}



