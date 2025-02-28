export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Complete 2022 Web development Bootcamp' ,
        position: 'udemy',
        img: 'assets/review1.png',
        link:'https://www.udemy.com/certificate/UC-6ed6925d-10f7-4375-9e01-e3ce7e848600/',
        review: 'Completed a comprehensive web development bootcamp on Udemy in 2022, gaining hands-on experience in building dynamic and responsive websites. This bootcamp provided a strong foundation in modern web technologies.',
    },
    {
        id: 2,
        name: 'Deloitte',
        position: 'Salesforce Developer Intern',
        img: 'assets/review2.png',
        link: 'https://smartinternz.com/internships/salesforce_certificates/dd560513ce9a8f22602978b85cb8d921',
        review:'Completed a 3-month Salesforce Development internship at Deloitte, gaining practical experience in customizing and developing on the Salesforce platform. I learned to build and deploy solutions using Apex, Lightning Web Components, and Salesforce\'s declarative tools.',
    },
    {
        id: 3,
        name: 'BrainWave Matrix Solutions',
        position: 'Web Development Intern',
        img: 'assets/review3.png',
        review:'Interned as a Web Developer at Brainwave Matrix Solutions, where I applied my knowledge of web development principles to create functional and user-friendly web solutions. I learned to collaborate effectively within a development team and gained valuable insights into the software development lifecycle'
    },
    {
        id: 4,
        name: 'Data Analytics Foundation',
        position: 'Google Data Analytics Foundation',
        img: 'assets/review4.png',
        link: 'https://www.coursera.org/account/accomplishments/records/3M3JX45PFDOG',
        review: 'Successfully completed the Google Data Analytics Professional Certificate, gaining proficiency in data cleaning, analysis, visualization, and utilizing tools like SQL and Tableau."',
    },

];

export const myProjects = [
    {
        title: 'Real Time Messenger',
        desc: 'The real-time messaging platform utilizing Next.js for server-side rendering and API routes, React for a dynamic frontend, Prisma for efficient data modeling and querying, MongoDB for flexible data storage, NextAuth.js for secure user authentication, and TypeScript for enhanced code reliability and maintainability.',
        subdesc:
            'Built as a unique conversation platform for a web  app with Next.js 14, Tailwind CSS, TypeScript. Real Time Messenger is designed for optimal performance and scalability.',
        href: 'https://messenger-chat-pi.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/assets/MongoDB.png',
            },
            {
                id: 5,
                name: 'NextJs',
                path: '/assets/Next.png',
            },
        ],
    },
    {
        title: 'Football Analysis tracker',
        desc: 'This project leverages computer vision and deep learning to analyze football matches through video. Using YOLO for object detection, the system accurately tracks players, referees, and the ball throughout gameplay. Players are assigned to their respective teams through K-means clustering based on uniform colors, enabling calculation of team ball possession percentages. ',
        subdesc:
            'Transforming football video into performance analytics through advanced computer vision — from player tracking and team identification to real-world movement metrics.',
        href: 'https://github.com/Abhishek17-10/Football_analysis_Tracker',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'yolo',
                path: '/assets/yolo.png',
            },
            {
                id: 2,
                name: 'jupyter',
                path: 'assets/jupyter.png',
            },
            {
                id: 3,
                name: 'python',
                path: '/assets/python.png',
            },
        ],
    },
    {
        title: 'Movie Recommendation System',
        desc: 'Developed a personalized movie recommendation engine using collaborative filtering algorithms and content-based analysis to suggest relevant films based on user preferences and viewing history.',
        subdesc:
            'Engineered a recommendation algorithm that processes user-movie interactions through NumPy\'s efficient matrix operations, enabling accurate prediction of viewer preferences. The system analyzes patterns in the Kaggle dataset to identify similarities between users and content, creating personalized suggestions that improve as users rate more films.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'jupyter',
                path: 'assets/jupyter.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/kaggle.png',
            },
        ],
    },
    {
        title: 'Eager to see more? ',
        desc: 'Eager to see more? Explore my full project repository on GitHub.where you can find a comprehensive collection of my work, demonstrating my commitment to clean, efficient, and innovative code',
        subdesc:
            'Explore my full project repository on GitHub to delve into the technical details and see the breadth of my coding experience across various projects.',
        href: 'https://github.com/Abhishek17-10/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Github.js',
                path: '/assets/github.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Salesforce Developer',
        pos: 'Internship',
        duration: '3 Months',
        title: "As an intern at Salesforce, I collaborated with cross-functional teams to implement custom solutions using Apex, Visualforce, and Lightning components. while also developing and maintaining integrations with third-party applications via REST APIs.",
        icon: '/assets/review2.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Brainwave Matrix Solution',
        pos: 'Web Developer Intern',
        duration: '6 months',
        title: "Contributed to the design, development, and optimization of dynamic web applications. I gained hands-on experience in front-end and back-end development, collaborating with the team to enhance user experience and improve website functionality. ",
        icon: '/assets/review3.png',
        animation: 'clapping',
    },

];