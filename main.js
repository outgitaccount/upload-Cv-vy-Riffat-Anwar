var _a, _b;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get form values
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workDuration = document.getElementById('work-duration').value;
    var skills = document.getElementById('skills').value;
    // Set resume preview values and make them editable
    var makeEditable = function (id, value, defaultValue) {
        var element = document.getElementById(id);
        if (element) {
            element.innerText = value || defaultValue;
            element.setAttribute('contentEditable', 'true'); // Make the element editable
            element.style.border = '1px solid #ccc'; // Optional: Add border to indicate editability
            element.style.padding = '5px'; // Optional: Add padding for better UX
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
    document.getElementById('resume-preview').style.display = 'block';
    // Show the "Download Resume" button after generating the resume
    document.getElementById('download-resume').style.display = 'inline-block';
});
// Add download functionality
(_b = document.getElementById('download-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    // Get the resume content
    var resumeContent = "\n        Name: ".concat((_a = document.getElementById('preview-name')) === null || _a === void 0 ? void 0 : _a.innerText, "\n\n        Title: ").concat((_b = document.getElementById('preview-title')) === null || _b === void 0 ? void 0 : _b.innerText, "\n\n        Email: ").concat((_c = document.getElementById('preview-email')) === null || _c === void 0 ? void 0 : _c.innerText, "\n\n        Phone: ").concat((_d = document.getElementById('preview-phone')) === null || _d === void 0 ? void 0 : _d.innerText, "\n\n        Degree: ").concat((_e = document.getElementById('preview-degree')) === null || _e === void 0 ? void 0 : _e.innerText, "\n\n        School: ").concat((_f = document.getElementById('preview-school')) === null || _f === void 0 ? void 0 : _f.innerText, "\n\n        Graduation Year: ").concat((_g = document.getElementById('preview-year')) === null || _g === void 0 ? void 0 : _g.innerText, "\n\n        Company: ").concat((_h = document.getElementById('preview-company')) === null || _h === void 0 ? void 0 : _h.innerText, "\n\n        Position: ").concat((_j = document.getElementById('preview-position')) === null || _j === void 0 ? void 0 : _j.innerText, "\n\n        Work Duration: ").concat((_k = document.getElementById('preview-work-duration')) === null || _k === void 0 ? void 0 : _k.innerText, "\n\n        Skills: ").concat((_l = document.getElementById('preview-skills')) === null || _l === void 0 ? void 0 : _l.innerText, "\n    ");
    // Create a Blob from the resume content
    var blob = new Blob([resumeContent], { type: 'text/plain' });
    // Create a link element
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Resume.txt'; // The file will be downloaded as Resume.txt
    // Simulate a click on the link to start the download
    link.click();
});
