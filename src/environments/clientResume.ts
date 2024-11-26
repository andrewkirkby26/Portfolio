import {Social} from "../app/interfaces/social";
import {Education} from "../app/interfaces/education";
import {Certificate} from "../app/interfaces/certificate";

export const ClientResume =  {
    about: {
        name: 'Andrew Kirkby',
        about_photo: 'about_photo.png',
        landing_photo: 'landing_photo.png',
        address: 'New Britain, CT',
        phone: '(860) 795-3675',
        extras: '',
        email: 'andrew.kirkby26@gmail.com',
        career: 'Software Engineer',
        summary:
            "In my career, I've had the fortunate opportunity to develop software for robot communication and control, interact with databases, write REST APIs, and create comprehensive user interfaces for a diverse range of users. These experiences have equipped me with the ability to embrace any new challenge with an open mind and the confidence to solve them no matter how large. Collaborating with teams of varying sizes, alongside mechanical engineers, project managers, and QA engineers, has also enhanced my communication skills, enabling me to discuss complex issues with peers across different fields. Despite this, I also enjoy the challenge of handling an entire project as the sole developr from start to finish." +
            '<br><br>' +
            "Throughout my career, I've found great joy in mentoring my peers. Whether it's a new hire, an intern assigned to me, or a colleague who's been around for a few years, I've realized how rewarding it is to witness and help them excel, becoming the best software engineers they can be. I have had, and still have, many mentors who have helped me become more efficient and shown me the incredible aspects of our profession. I hope to do the same for my peers.",
        salutations: [
            'A user interface is like a joke. <br> If you have to explain it, <br> it’s not that good. <br>- Anonymous'
        ]
    },
    traitsCircle: [
        {
            name: 'Communication',
            confidence: 100
        },
        {
            name: 'Efficiency',
            confidence: 100
        },
        {
            name: 'Leadership',
            confidence: 100
        }
    ],
    traitsBar: [
        {
            name: 'Web Interface',
            confidence: 100
        },
        {
            name: 'Software Architecture ',
            confidence: 95
        },
        {
            name: 'Data Structures',
            confidence: 90
        }
    ],
    skills: [
        {
            name: 'Skills',
            skills: [
                'Angular',
                'HTML/CSS',
                'JS/TS',
                'Java',
                'Spring',
                'Python',
                'Swift'
            ]
        },
        {
            name: 'Other',
            skills: [
                'SQL',
                'Mongo',
                'Node',
                'Docker',
                'AWS',
                'Firebase/GCloud',
                'REST'
            ]
        }
    ],
    socials: [
        {
            type: Social.LINKED_IN,
            url: 'https://www.linkedin.com/in/andrewskirkby/'
        },
        {
            type: Social.IG,
            url: 'https://www.instagram.com/kirkby_andrew/?igsh=MTR3YmR0ZDc4YTI3Yw%3D%3D&utm_source=qr'
        },
        {
            type: Social.GITHUB,
            url: 'https://github.com/andrewkirkby26?tab=repositories'
        }
    ],
    education: [
        {
            level: Education.LEVEL_COLLEGE,
            name: 'Western New England University',
            location: 'Springfield, MA',
            startDate: {
                display: '2015',
                year: 2015,
                month: 8
            },
            finishDate: {
                display: '2019',
                year: 2019,
                month: 5
            },
            concern: [
                'Bachelor of Science in Mechanical Engineering',
                'Mechatronics Concentration'
            ]
        }
    ],
    professions: [
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Paid Software Intern',
            startDate: {
                display: 'May 2017',
                month: 5,
                year: 2017
            },
            finishDate: {
                display: 'August 2018',
                month: 8,
                year: 2018
            },
            description: [
                '(Worked part time during school year)',
                'Research/Experiment with modern technologies the team was considering adding to our stack',
                'Develop web based user interface for products using HTML/CSS/AngularJS'
            ]
        },
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Software Technician',
            startDate: {
                display: 'August 2018',
                month: 8,
                year: 2018
            },
            finishDate: {
                display: 'May 2019',
                month: 5,
                year: 2019
            },
            description: [
                '(Full time student and full time employee)',
                'Continuous full stack development for new features and bug fixes on both new and legacy products',
                '24/7 Support for dozens of large scale production devices in the field if customer care was unable to solve problem',
                'Develop several simple Spring Boot (v2.x) microservices to perform queries and fetch data from MongoDB'
            ]
        },
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Associate Software Engineer',
            startDate:  {
                display: 'May 2019',
                month: 5,
                year: 2019
            },
            finishDate:  {
                display: 'September 2021',
                month: 9,
                year: 2021
            },
            description: [
                'Design/Develop several SpringBoot services to query and modify data stored in MongoDB and MySQL',
                'Upgrade web interfaces from AngularJS to leverage latest version of Angular',
                'Lead SW Engineer on AMR (Autonomous Mobile Robot) project, integrating third party AMR with our internal services via REST.'
            ]
        },
        {
            company: 'Protedyne',
            location: 'Bloomfield, CT',
            position: 'Software Engineer',
            startDate: {
                display: 'September 2021',
                month: 9,
                year: 2021
            },
            finishDate: null,
            description: [
                'Be a mentor for interns and newest employees, ensuring they have a smooth integration and have the support they need',
                'Rapidly develop prototype services/interfaces to show management and make changes based on feedback'
            ]
        }
        // {
        //     company: 'KPI',
        //     location: 'CT',
        //     position: 'Chief Technology Officer',
        //     startDate: {
        //         display: 'March 2023',
        //         month: 3,
        //         year: 2023
        //     },
        //     finishDate: null,
        //     description: [
        //         'CTO and sole developer of startup, designing web sites for various customers & use cases.'
        //     ]
        // }
    ],
    activities: [

    ],
    projects: [
        {
            name: 'KPI',
            position: 'Chief Technology Officer',
            location: 'Weatogue, CT',
            startDate: {
                display: 'May 2023',
                month: 5,
                year: 2023
            },
            finishDate: null,
            description: [
                'Sole developer of front end interfaces for all clients.',
                "Worked on a range of projects from start to finish (including the one you're viewing), interacting with the customer the whole way."
            ],
            media: [
                // './resources/images/KPI Video.mp4',
                './resources/images/photo6.png',
                './resources/images/photo7.png',
                './resources/images/photo8.png',
                './resources/images/photo9.png'
            ]
        },
        {
            name: 'BrightLife',
            position: 'Personal IoT Smart Home Project',
            location: 'CT',
            startDate: {
                display: '2020',
                month: 1,
                year: 2020
            },
            finishDate: null,
            description: [
                'Design and develop IoT devices that leverage BalenaOS (Docker)',
                'Leverage Firebase for authentication of users, hosting interface, Firebase functions to purge expired states',
                'Integrate with GoogleCloud Pub/Sub for sending/receiving messages with devices',
                'Create sleek interface/IOS app for users to register/control their devices'
            ],
            media: [
                './resources/images/photo1.png',
                './resources/images/photo2.png',
                './resources/images/photo3.png',
                './resources/images/photo4.png',
                './resources/images/photo5.png'
            ]
        },
        {
            name: 'Web User Interfaces',
            position: 'Lead Developer',
            location: 'Windsor, CT',
            startDate: {
                display: 'May 2017',
                month: 5,
                year: 2017
            },
            finishDate: null,
            description: [
                'Identified inconsistency and outdated frameworks across multiple user interfaces. Proposed and implemented modular Angular libraries to streamline code, enhance design consistency, and unify user experience across all interfaces.',
                '- Programmed modularized Angular libraries that are consumed by downstream interfaces. The downstream interface would contain only the unique code needed to run it.',
                '- Integrated with Microsoft Azure Single Sign-on for a smoother experience for users',
                '- Leverage modern libraries such as Materials for new products, as well as create unit tests for components/services/etc.',
                '- (Unable to show images)'
            ],
            media: [

            ]
        },
        {
            name: 'Autonomous Mobile Robot (AMR)',
            position: 'Lead Developer',
            location: 'Windsor, CT',
            startDate: {
                display: '2019',
                month: 5,
                year: 2019
            },
            finishDate: null,
            description: [
                'Addressed a challenge at Protedyne involving operators manually transporting large quantities of tubes in bins across a laboratory, a task that detracted from their core responsibilities. Recommended and facilitated the implementation of an Autonomous Mobile Robot (AMR) to efficiently handle the transport of filled bins to various lab destinations and return empty bins, thereby optimizing operator productivity.',
                '- Pour over any and all documentation provided by third party AMR vendo for communication with device via REST',
                '- Develop a middle man layer in our stack that would integrate the AMRs REST API with our existing stack',
                '- Provide front end to control/schedule the AMR and view its current tasks',
                '- (Unable to show images)'
            ],
            media: [

            ]
        },
        {
            name: 'Help Service',
            position: 'Lead Developer',
            location: 'Windsor, CT',
            startDate: {
                display: '2018',
                month: 5,
                year: 2019
            },
            finishDate: null,
            description: [
                'Designed a centralized documentation service at Protedyne for managing and maintaining system information. The service required multi-layered, access-level based content organization (similar to a tree structure) and support for diverse media formats (text, images, videos). Additionally, integrated a user-friendly help feature directly into the system\'s UI for quick, intuitive access to documentation across various platforms.',
                '- Leveraged several MongoDB collections to house the data & tree. ',
                '- Spring Boot REST API (Java) to query & save the data via a dedicated web interface',
                '- Angular library containing component & service for easy embedding of help inside existing UIs',
                '- Used Azure access levels to filter data returned from DB to ensure the correct data was shown to the proper user',
                '- (Unable to show images)'
            ],
            media: [

            ]
        },
        {
            name: 'Build Cell Test Suite',
            position: 'Lead Developer',
            location: 'Windsor, CT',
            startDate: {
                display: '2023',
                month: 9,
                year: 2019
            },
            finishDate: null,
            description: [
                'Developed an interface and service solution for Protedyne to support the rapid deployment of a new product line, involving thousands of devices. Created a system for build technicians to efficiently construct and test devices before shipment.',
                '- Saw need for project prior to management asking, wrote documentation/a presentation to pitch concept to management and got project approved',
                '- Designed an easily scalable architecture that fit all unique steps in the build workflow into one simple and intuitive interface',
                '- Wrote backend that acquired more and more tasks each day as the rest of the company saw the power & potential in the service.',
                '- The service is becoming the backbone to the build process',
                '- (Unable to show images)'
            ],
            media: [

            ]
        }
    ],
    certificates: [
        {
            name: 'WNE Best Innovative and Creative Design in a Senior Project',
            location: 'Westen New England University',
            date: {
                display: 'April 2019',
                month: 4,
                year: 2019
            },
            concern: null,
            description: '',
            type: Certificate.TYPE_AWARD
        },
        {
            name: 'LabCorp IT Leadership Award',
            location: 'Protedyne',
            date: {
                display: 'December 2023',
                month: 12,
                year: 2023
            },
            concern: null,
            description: '',
            type: Certificate.TYPE_AWARD
        }
    ]
};