// Load data from JSON file
let portfolioData = null;

async function loadData() {
    try {
        portfolioData = {
  "personal": {
    "name": "Your Name",
    "title": "Lead Developer",
    "location": "Sydney, Australia",
    "tagline": "Leading and managing teams to deliver exceptional software solutions",
    "profilePhoto": "",
    "social": {
      "email": "your.email@example.com",
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername",
      "website": ""
    }
  },
  "about": {
    "summary": "I am a software developer who loves to write code for customers. I started my career as a junior .Net backend developer, then progressed to be a senior full stack engineer and now I am leading and managing a team of 6 developers.\n\nIn my current role, I am managing multiple projects in parallel and ensuring the project deliverables are met properly. I also raise concerns and negotiate expectations with stakeholders as needed in both technical and non-technical ways. I also manage resource allocation, task priorities, project planning etc. to ensure smooth business operation and minimal friction.\n\nI also participate in architectural discussions with engineering lead, do technical research as needed prior to making any architectural decision, negotiate with 3rd party providers and do early adoption of their offerings when necessary. In addition, I perform code reviews, documentation and development to keep myself up to date with the latest changes.",
    "highlights": [
      "8+ years of software development experience",
      "Leading team of 6 developers",
      "Full stack expertise from .NET to modern cloud architecture",
      "Strong stakeholder management and technical leadership"
    ]
  },
  "experience": [
    {
      "id": "exp-1",
      "company": "Company Name 1",
      "location": "Sydney, Australia",
      "website": "https://company-website.com",
      "role": "Lead Developer",
      "employmentType": "Full time permanent",
      "startDate": "Month Year",
      "endDate": "Present",
      "isCurrentJob": true,
      "description": "Leading a team of 6 developers, managing multiple projects and ensuring delivery of high-quality software solutions.",
      "achievements": [
        "Successfully delivered X projects on time and within budget",
        "Improved team productivity by X% through process improvements",
        "Led architectural decisions for enterprise-scale applications",
        "Mentored junior and senior developers in best practices"
      ],
      "projects": [
        {
          "name": "Project Name",
          "description": "Brief description of the project and your role",
          "techStack": [
            "C#",
            "ASP.NET MVC",
            "SQL Server",
            "Azure",
            "SignalR"
          ],
          "highlights": [
            "Key achievement or metric",
            "Technical challenge solved"
          ]
        }
      ]
    },
    {
      "id": "exp-2",
      "company": "Company Name 2",
      "location": "Sydney, Australia",
      "website": "https://company-website.com",
      "role": "Sr. Product Engineer",
      "employmentType": "Full time permanent",
      "startDate": "Month Year",
      "endDate": "Month Year",
      "isCurrentJob": false,
      "description": "Developed and maintained enterprise applications using modern cloud architecture.",
      "achievements": [
        "Built serverless applications handling X requests per day",
        "Reduced infrastructure costs by X%",
        "Implemented microservices architecture"
      ],
      "projects": [
        {
          "name": "Serverless Platform",
          "description": "AWS-based serverless architecture for scalable applications",
          "techStack": [
            "AWS Lambda",
            "NodeJs",
            "DynamoDB",
            "API Gateway",
            "Apigee",
            "Splunk"
          ],
          "highlights": [
            "Scaled to handle 10K+ concurrent users",
            "99.9% uptime achieved"
          ]
        },
        {
          "name": "Microservices Application",
          "description": "Full-stack application with microservices architecture",
          "techStack": [
            ".NET Core",
            "C#",
            "AWS",
            "MongoDB",
            "NodeJs",
            "NestJs",
            "TypeScript"
          ],
          "highlights": [
            "Improved deployment speed by 50%",
            "Modular architecture for better maintainability"
          ]
        },
        {
          "name": "React Dashboard",
          "description": "Modern web dashboard with real-time updates",
          "techStack": [
            "React",
            ".NET Core",
            "C#",
            "AWS",
            "MongoDB",
            "TypeScript"
          ],
          "highlights": [
            "Real-time data visualization",
            "Enhanced user experience"
          ]
        }
      ]
    },
    {
      "id": "exp-3",
      "company": "Company Name 3",
      "location": "Sydney, Australia",
      "website": "https://company-website.com",
      "role": "Sr. Software Engineer",
      "employmentType": "Full time permanent",
      "startDate": "Month Year",
      "endDate": "Month Year",
      "isCurrentJob": false,
      "description": "Designed and developed enterprise software solutions.",
      "achievements": [
        "Led development of critical business applications",
        "Improved code quality through code reviews",
        "Collaborated with cross-functional teams"
      ],
      "projects": [
        {
          "name": "Enterprise Platform",
          "description": "Core business platform with MongoDB backend",
          "techStack": [
            ".NET Core",
            "C#",
            "AWS",
            "MongoDB"
          ],
          "highlights": []
        }
      ]
    }
  ],
  "skills": {
    "Languages": [
      "C#",
      "JavaScript",
      "TypeScript",
      "SQL"
    ],
    "Frontend": [
      "React",
      "Angular",
      "ASP.NET MVC",
      "HTML/CSS",
      "jQuery"
    ],
    "Backend": [
      "ASP.NET Core",
      "Node.js",
      "NestJs",
      "WebAPI",
      "Express"
    ],
    "Cloud & DevOps": [
      "AWS (Lambda, DynamoDB, API Gateway, S3, EC2)",
      "Azure",
      "Docker",
      "Serverless"
    ],
    "Architecture": [
      "Microservices",
      "Serverless",
      "MVC",
      "RESTful APIs",
      "Event-Driven"
    ],
    "Databases": [
      "SQL Server",
      "MongoDB",
      "DynamoDB"
    ],
    "Tools & Practices": [
      "Git",
      "GitLab",
      "GitHub",
      "Jira",
      "Confluence",
      "TDD",
      "Pair Programming",
      "Code Review"
    ],
    "Monitoring": [
      "Splunk",
      "Apigee"
    ],
    "Leadership": [
      "Team Leading",
      "Architecture Design",
      "Technical Research",
      "Stakeholder Collaboration",
      "Documentation",
      "Resource Management"
    ]
  },
  "education": [
    {
      "degree": "Master of Science (MSc)",
      "field": "Computer Science and Engineering",
      "major": "Software Engineering",
      "institution": "University Name",
      "location": "City, Country",
      "startYear": "Year",
      "completionYear": "Year",
      "isCompleted": true,
      "result": "CGPA 3.45 out of 4",
      "description": "Focused on advanced software engineering principles and practices."
    },
    {
      "degree": "Bachelor of Science (BSc)",
      "field": "Computer Science and Engineering",
      "major": "Software Engineering",
      "institution": "University Name",
      "location": "City, Country",
      "startYear": "Year",
      "completionYear": "Year",
      "isCompleted": true,
      "result": "CGPA 3.67 out of 4",
      "description": "Strong foundation in computer science fundamentals and software development."
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "issueDate": "Month Year",
      "expiryDate": "Month Year",
      "credentialId": "",
      "credentialUrl": ""
    }
  ],
  "achievements": [
    {
      "title": "Achievement Title",
      "description": "Description of the achievement",
      "date": "Month Year"
    }
  ],
  "personalProjects": [
    {
      "id": "check-on-me",
      "name": "Check On Me",
      "shortDescription": "Emergency alert system with Flutter mobile app, Node.js backend, and React admin dashboard.",
      "description": "A comprehensive emergency alert system that helps users stay safe through automated wellness checks and emergency contact notifications.",
      "technologies": [
        "Flutter",
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis"
      ],
      "features": [
        "Scheduled wellness check alerts",
        "Emergency contact management",
        "Real-time notifications via SMS and Email",
        "Location sharing with emergency contacts",
        "Admin dashboard for monitoring and analytics",
        "Offline support with job queuing"
      ],
      "challenges": [
        "Implementing reliable background task scheduling across iOS and Android",
        "Designing a scalable notification system with retry logic",
        "Creating an intuitive UX for emergency situations"
      ],
      "github": "https://github.com/yourusername/check-on-me",
      "live": null,
      "icon": "\ud83d\udea8"
    }
  ]
};
        populatePage();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function populatePage() {
    if (!portfolioData) return;

    // Profile Section
    document.getElementById('heroName').textContent = portfolioData.personal.name;
    document.getElementById('heroTitle').textContent = portfolioData.personal.title;
    
    // Update profile photo or initials
    const profilePhoto = document.getElementById('profilePhoto');
    const profileInitials = document.getElementById('profileInitials');
    
    if (portfolioData.personal.profilePhoto && portfolioData.personal.profilePhoto.trim() !== '') {
        // Show photo
        profilePhoto.src = portfolioData.personal.profilePhoto;
        profilePhoto.style.display = 'block';
        profileInitials.style.display = 'none';
    } else {
        // Show initials
        const initials = portfolioData.personal.name.split(' ').map(n => n[0]).join('');
        profileInitials.textContent = initials;
        profilePhoto.style.display = 'none';
        profileInitials.style.display = 'block';
    }

    // About Section
    const aboutText = portfolioData.about?.summary || portfolioData.about;
    document.getElementById('aboutText').innerHTML = aboutText.split('\n').map(p => `<p>${p}</p>`).join('');

    // Experience Timeline
    const experienceTimeline = document.getElementById('experienceTimeline');
    experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
            <h3 class="timeline-company">${exp.company}</h3>
            <h4 class="timeline-role">${exp.role}</h4>
            <div class="timeline-description">
                <p>${exp.description}</p>
                ${exp.achievements && exp.achievements.length > 0 ? `
                    <ul>
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                ` : ''}
                ${exp.projects && exp.projects.length > 0 ? `
                    <div class="experience-projects">
                        <h5 style="font-weight: 600; color: var(--primary-color); margin-top: 1rem; margin-bottom: 0.5rem;">Key Projects:</h5>
                        ${exp.projects.map(project => `
                            <div class="experience-project" style="margin-bottom: 1rem; padding-left: 1rem; border-left: 2px solid var(--border-color);">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.25rem;">
                                    <div style="font-weight: 600; color: var(--text-primary);">${project.name}</div>
                                    ${project.detailPage ? `<a href="${project.detailPage}" style="font-size: 0.85rem; color: var(--primary-color); text-decoration: none; white-space: nowrap;" target="_blank">View Details →</a>` : ''}
                                </div>
                                <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.25rem;">${project.description}</div>
                                <div style="font-size: 0.85rem; color: var(--primary-color); font-style: italic;">
                                    ${Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack}
                                </div>
                                ${project.highlights && project.highlights.length > 0 ? `
                                    <ul style="margin-top: 0.5rem; font-size: 0.9rem;">
                                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Personal Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');
    const personalProjects = portfolioData.personalProjects || portfolioData.projects || [];
    projectsGrid.innerHTML = personalProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.icon || '<i class="fas fa-code"></i>'}
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
                ${project.live ? `<a href="${project.live}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                ${project.detailPage ? `<a href="${project.detailPage}" class="project-link"><i class="fas fa-info-circle"></i> Details</a>` : ''}
            </div>
        </div>
    `).join('');

    // Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Education Section
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-school">${edu.school}</div>
            <div class="education-date">${edu.startDate} - ${edu.endDate}</div>
            ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
        </div>
    `).join('');

    // Contact Methods
    const contactMethods = document.getElementById('contactMethods');
    contactMethods.innerHTML = `
        <a href="mailto:${portfolioData.personal.social.email}" class="contact-method">
            <i class="fas fa-envelope"></i>
            <span>${portfolioData.personal.social.email}</span>
        </a>
        <a href="${portfolioData.personal.social.linkedin}" class="contact-method" target="_blank">
            <i class="fab fa-linkedin"></i>
            <span>Connect on LinkedIn</span>
        </a>
        <a href="${portfolioData.personal.social.github}" class="contact-method" target="_blank">
            <i class="fab fa-github"></i>
            <span>View GitHub Profile</span>
        </a>
    `;

    // Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = portfolioData.personal.name;

    // Generate individual project pages
    generateProjectPages();
}

function openProjectDetails(projectId) {
    window.location.href = `project-${projectId}.html`;
}

function generateProjectPages() {
    // This function would generate individual project pages
    // In a static site, you'd create these pages manually or use a build tool
    portfolioData.projects.forEach(project => {
        // Store project details for individual pages
        localStorage.setItem(`project-${project.id}`, JSON.stringify(project));
    });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect (only if navbar exists)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        }
        
        lastScroll = currentScroll;
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Load data
    loadData();
});
