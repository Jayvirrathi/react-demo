const portfolioData = {
    imageUrl: 'http://localhost:3000/',
    logo: 'images/app-logo.svg',
    logoWhite: 'images/app-logo-white.svg',
    name: 'Jayvir Rathi',
    role: 'Full Stack Developer',
    intro: "Let's keep building amazing stuff.",
    projects: [
        {
            id: 0,
            title: 'WorkerHomeServices using React Native',
            imageUrl: 'images/portfolio/logo512.png',
            link: 'https://github.com/Jayvirrathi/WorkerHomeServices',
            codeLink: 'https://github.com/Jayvirrathi/WorkerHomeServices',
            description:
                'This projects fetches data from mongo atlas. It basically show worker their task. View and search info to next job .',
            technology: ['HTML/CSS', 'React Native', 'MongoDB'],
        },
        {
            id: 1,
            title: 'Nodejs Docker Kubernetes Example',
            imageUrl: 'images/portfolio/logo512.png',
            link: 'https://github.com/Jayvirrathi/nodejs-docker-kubernetes',
            codeLink: 'https://github.com/Jayvirrathi/nodejs-docker-kubernetes',
            description:
                'This projects example how to use docker & kubernetes with nodejs',
            technology: ['Nodejs', 'Docker', 'Kubernetes'],
				},
				{
            id: 2,
            title: 'Deno Docker Kubernetes Example',
            imageUrl: 'images/portfolio/logo512.png',
            link: 'https://github.com/Jayvirrathi/deno-docker-kubernetes',
            codeLink: 'https://github.com/Jayvirrathi/deno-docker-kubernetes',
            description:
                'This projects example how to use docker & kubernetes with deno',
            technology: ['deno', 'Nodejs', 'Nodejs'],
        },
    ],
    skills: [
        {
            name: 'HTML/CSS',
            percentage: 70,
        },
        {
            name: 'SASS/ SCSS',
            percentage: 70,
        },
        {
            name: 'Javascript',
            percentage: 80,
        },
        {
            name: 'REACTJS',
            percentage: 70,
        },
        {
            name: 'NODEJS',
            percentage: 70,
        },
        {
            name: 'Python',
            percentage: 60,
        },
    ],
    workExp: [
        {
            title: 'Software Engineer Intern',
            date: 'Jan 2020- June 2020',
            description: 'Full Stack Developer',
            company: 'Innovify India.',
        },
        {
            title: 'Software Engineer',
            date: 'July 2020- Oct 2020',
            description: 'Full Stack Developer',
            company: 'Innovify India.',
        },
    ],
};

export default portfolioData;
