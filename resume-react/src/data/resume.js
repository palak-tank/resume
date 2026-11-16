// All resume content lives here. Edit this file to update the site —
// the components render whatever is in these objects.

export const profile = {
  name: 'Palak Tank',
  title: 'Senior Software Engineer',
  location: 'Melbourne, Australia',
  tagline:
    'building scalable .NET and ASP.NET Core platforms, multi-tenant SaaS products and cloud services on AWS and Microsoft Azure.',
  email: 'palaktank1111@gmail.com',
  linkedin: 'https://linkedin.com/in/palak-tank-712155b6',
};

export const stats = [
  { value: '8+', label: 'Years in .NET & C#' },
  { value: '~10%', label: 'Faster API responses' },
  { value: 'AI-200', label: 'Azure certified' },
  { value: 'MSc', label: 'Software Engineering' },
];

// Wrap phrases in **double asterisks** to bold them.
export const summary =
  'Senior software engineer with **over 8 years of experience** designing, building and maintaining web applications on .NET and C#, with a focus on **ASP.NET Core and multi-tenant SaaS platforms**. Experienced across the full stack, including REST API design, third-party integrations such as Stripe and Twilio, AWS and Microsoft Azure cloud infrastructure, Elasticsearch and Grafana-based monitoring. Has led sprints, worked directly with clients and mentored junior developers. Holds a Master’s degree in Software Engineering (Information Technology) and the **Microsoft Certified: Azure AI Cloud Developer Associate** certification (AI-200).';

export const skills = [
  {
    group: 'Languages & Frameworks',
    items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
  },
  {
    group: 'Backend, Data & Architecture',
    items: ['RESTful APIs', 'GraphQL', 'Microservices', 'Test-Driven Development', 'MongoDB', 'Microsoft SQL Server', 'Elasticsearch'],
  },
  {
    group: 'Cloud & AI',
    items: ['AWS Lambda', 'AWS hosting & deployment', 'Microsoft Azure', 'Azure SDKs', 'Vector search', 'Retrieval-augmented generation', 'Docker'],
  },
];

// `highlights` = the first bullets, always visible.
// `more` = extra bullets, shown under "More responsibilities".
export const experience = [
  {
    role: 'Software Engineer',
    company: 'Compass Education & MSP Photography',
    location: 'Melbourne, Australia',
    period: '2020 – 2026',
    tags: ['ASP.NET Core', 'Multi-tenant SaaS', 'Elasticsearch', 'MongoDB', 'Grafana', 'Playwright'],
    highlights: [
      'Reduced API response time by ~10% by profiling slow endpoints using DotTrace and optimising database queries and service calls.',
      'Designed and implemented RESTful APIs using ASP.NET Core, enabling reliable communication between services in a distributed architecture.',
      'Contributed to the development of a multi-tenant SaaS platform, building backend services that support scalable product features and integrations.',
      'Developed an advanced search module using Elasticsearch, incorporating logging and analytics to improve search performance and observability.',
      'Improved data retrieval performance by implementing MongoDB indexes and validation rules to maintain data consistency.',
      'Built Grafana dashboards to monitor service health and application metrics, enabling faster detection of system issues.',
    ],
    more: [
      'Implemented end-to-end testing using Cypress and Playwright, improving release quality and reducing regression defects.',
      'Assisted with data migration across systems, ensuring accurate transformation and minimal disruption during transitions.',
      'Investigated and resolved production issues in collaboration with support teams, analysing logs and system metrics to restore platform stability.',
      'Participated in code reviews and technical discussions, helping maintain high coding standards and improve team practices.',
      'Refactored existing components to improve performance, scalability and maintainability.',
      'Documented APIs, services and system functionality for internal teams and external integrations.',
      'Provided guidance and mentoring to other developers, sharing best practices and improving overall team productivity.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'ReadyTeacher',
    location: 'Melbourne, Australia',
    period: '2019 – 2020',
    tags: ['AWS', 'Stripe', 'Twilio', 'Python', 'Sprint leadership', 'Mentoring'],
    highlights: [
      'Conducted investor meetings, demonstrated the project, and successfully obtained scholarship funding for a startup.',
      'Led sprint planning to define goals and tasks, and conducted sprint reviews for progress assessment and stakeholder feedback.',
      'Developed an AWS Lambda function to automate PDF generation with a company watermark.',
      'Integrated Twilio SMS scheduling based on Google Calendar events.',
      'Added Stripe payment functionality for customised user payment options.',
      'Deployed and maintained the platform on AWS.',
    ],
    more: [
      'Enhanced a Python-based chatbot by adding new features and fixing bugs to improve functionality and performance.',
      'Facilitated knowledge transfer sessions for team members and new hires, assisting with development environment setup.',
      'Participated in intern interviews, supporting team development and fostering a learning-oriented team culture.',
      'Provided guidance and mentorship to interns, assisting with projects and skill-building.',
      'Handled on-call duties to monitor and resolve production environment issues.',
      'Created documentation for best practices in source code management, including version control and branching strategies.',
      'Organised and led client meetings to gather platform requirements.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tatvasoft',
    location: 'Ahmedabad, India',
    period: '2015 – 2017',
    tags: ['C#', 'Entity Framework', 'ASP.NET MVC', 'CI/CD', 'Agile / Scrum'],
    highlights: [
      'Refactored legacy code, upgraded frameworks, and implemented CI/CD to enhance performance and maintainability.',
      'Built N-tier architecture applications with C# and Entity Framework, including MVC, business, orchestration and persistence layers (Repository pattern), following Agile (Scrum) and TDD methodologies.',
      'Utilised libraries such as MVC Awesome, AutoMapper, Fluent Validation, RDLC and iTextSharp to extend functionality.',
    ],
    more: [
      'Optimised and enhanced user interfaces with HTML5, CSS, Bootstrap, jQuery and JavaScript, improving user experience and code efficiency.',
      'Conducted unit, system and manual testing, including compatibility tests across Windows, Mac, Android, iOS and various browsers.',
    ],
  },
];

export const education = [
  {
    icon: 'graduation',
    title: 'Master’s in Software Engineering',
    detail: 'Information Technology',
    tag: 'Postgraduate degree',
  },
  {
    icon: 'award',
    title: 'Microsoft Certified: Azure AI Cloud Developer Associate',
    detail: 'AI-enabled back-end services, Azure SDKs, vector search and retrieval-augmented generation.',
    tag: 'Exam AI-200',
  },
];

export const contact = {
  heading: 'Let’s work together',
  message: 'Open to senior .NET, backend and cloud engineering opportunities in Melbourne and remote.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
