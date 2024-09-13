document.getElementById('generate-resume')?.addEventListener('click', () => {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const workDuration = (document.getElementById('work-duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Set resume preview values and make them editable
    const makeEditable = (id: string, value: string, defaultValue: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = value || defaultValue;
            element.setAttribute('contentEditable', 'true');  // Make the element editable
            element.style.border = '1px solid #ccc';          // Optional: Add border to indicate editability
            element.style.padding = '5px';                    // Optional: Add padding for better UX
        }
    };

    makeEditable('preview-name', name, 'Your Name');
    makeEditable('preview-title', title, 'Job Title');
    makeEditable('preview-email', email, 'example@example.com');
    makeEditable('preview-phone', phone, '000-000-0000');
    makeEditable('preview-degree', degree, 'Your Degree');
    makeEditable('preview-school', school, 'Your School');
    makeEditable('preview-year', year, '2020');
    makeEditable('preview-company', company, 'Your Company');
    makeEditable('preview-position', position, 'Your Position');
    makeEditable('preview-work-duration', workDuration, 'Work Duration');
    makeEditable('preview-skills', skills, 'Skill 1, Skill 2, Skill 3');

    // Display the resume preview
    document.getElementById('resume-preview')!.style.display = 'block';

    // Show the "Download Resume" button after generating the resume
    document.getElementById('download-resume')!.style.display = 'inline-block';
});

// Add download functionality
document.getElementById('download-resume')?.addEventListener('click', () => {
    // Get the resume content
    const resumeContent = `
        Name: ${document.getElementById('preview-name')?.innerText}\n
        Title: ${document.getElementById('preview-title')?.innerText}\n
        Email: ${document.getElementById('preview-email')?.innerText}\n
        Phone: ${document.getElementById('preview-phone')?.innerText}\n
        Degree: ${document.getElementById('preview-degree')?.innerText}\n
        School: ${document.getElementById('preview-school')?.innerText}\n
        Graduation Year: ${document.getElementById('preview-year')?.innerText}\n
        Company: ${document.getElementById('preview-company')?.innerText}\n
        Position: ${document.getElementById('preview-position')?.innerText}\n
        Work Duration: ${document.getElementById('preview-work-duration')?.innerText}\n
        Skills: ${document.getElementById('preview-skills')?.innerText}
    `;

    // Create a Blob from the resume content
    const blob = new Blob([resumeContent], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Resume.txt';  // The file will be downloaded as Resume.txt

    // Simulate a click on the link to start the download
    link.click();
});