/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ketul's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ketul's Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ketul Panchal",
  logo_name: "Ketulpanchal",
  nickname: "Full Stack Developer",
  subTitle:
    "I'm a full stack web developer with expertise in MERN, Next.js, Flutter. My strengths lie in building scalable and reliable applications, with a focus on creating intuitive user experiences. I'm skilled in both backend and frontend development.",
  resumeLink:
    "https://drive.google.com/file/d/1UbK2JWwgEFSIuvong6QYrl3cVxq-nBd7/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/kpanchal9",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/kpanchal9",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ketul10",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@CodingWaliBaatcheet",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ketulpanchal5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/ketulpanchal.__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter,",
        "⚡ Creating application backend in Node, Express.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "red",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "blue",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          skillName: "express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "green",
          },
        },
        {
          skillName: "typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "blue",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764abc",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "skyblue",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "black",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "purple",
          },
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        //"⚡ Deploying deep learning models on cloud to use on mobile devices",
        //"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "yellow",
          },
        },
        {
          skillName: "cpanel",
          fontAwesomeClassname: "simple-icons:cpanel",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "skyblue",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "black",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kp343274/",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sardar Patel Education Campus",
      subtitle: "BCA",
      logo_path: "Spec_mainlogo.png",
      alt_name: "SPEC",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic computer application subjects like C/C++, DBMs/RDBMS, ASP.NET, VB.NET, PHP, HTML, CSS, Javascript etc.",
        "⚡ Apart from this, I have done courses on DSA And Full Stack Development.",
        "⚡ I got many trophies and medals for exam ranking in all over SPU.",
      ],
      website_link: "https://spec.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work And Internship",
  description:
    "I have worked with startups as Web Developer. contribute in their projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Brainbean Technolabs Pvt Ltd",
          company_url: "https://www.linkedin.com/company/brain-bean-technolabs/mycompany/",
          logo_path: "brain_bean_technolabs_logo.jpg",
          duration: "June 2024 - Present",
          location: "Anand, Gujarat, India",
          description:
            "Brainbean is USA base company. here i Building real world project and work as software developer.",
          color: "#000000",
        },
        {
          title: "Full Stack web development Intern",
          company: "TechnoGuide Infosoft Private Limited",
          company_url: "https://technoguideinfo.com/",
          logo_path: "technoguid.jpeg",
          duration: "oct 2023 - feb 2024",
          location: "Anand, Gujarat, India",
          description:
            "Building a website that base on QR code an help the people in accident provide all infromations about partition.",
          color: "#000000",
        },
        // {
        //   title: "Software Developer",
        //   company: "Brainbean Technolabs Pvt Ltd",
        //   company_url: "https://www.linkedin.com/company/brain-bean-technolabs/mycompany/",
        //   logo_path: "brain_bean_technolabs_logo.jpg",
        //   duration: "June 2024 - Present",
        //   location: "Anand, Gujarat, India",
        //   description:
        //     "Brainbean is USA base company. here i Building real world project and work as software developer",
        //   color: "#000000",
        // },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "web development Intern",
          company: "TechnoGuide Infosoft Private Limited",
          company_url: "https://technoguideinfo.com/",
          logo_path: "technoguid.jpeg",
          duration: "oct 2023 - feb 2024",
          location: "Anand, Gujarat, India",
          description:
            "Building a website that base on QR code an help the people in accident provide all infromations about partition.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "My Projects",
  description: "Some of my Projects made on Web development And Android.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Rakshak",
      createdAt: ": Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap",
      description: "Rakshak QR code Base Website Providing all madical & personal information on person.",
      // url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "neuro-symbolic-sudoku",
      name: "FlyerFLow 2026 ",
      createdAt: "Flutter (Dart), Laravel – Admin Panel, MySQL",
      description: "An Application from the future, FlyerFlow 2026, creates flyers automatically. Our team of graphic designers at Brainbeans, where I work, is really tired of creating flyers by hand and finds it time-consuming. However, using FlyerFlow, they can create flyers and even clients with ease. Flyerflow has an AI generator background, an automated background remover for products, and a single click that displays all product and business info with a comprehensive layout.",
      // url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "Wunderlust",
      // createdAt: "2023-10-19T00:00:00Z",
      createdAt: "Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap",
      description: "Taravel & Hotel Website",
      url: "https://mainproject-ia3w.onrender.com/listings",
    },
    {
      id: "mdp-medium",
      name: "Medium",
      // createdAt: "2023-10-19T00:00:00Z",
      createdAt: "React.js,PostgreSQL, Hono, Cloudflare",
      description: "Medium is a simple blog website where anyone can post their blogs and also read other blogs",
      url: "https://medium-sigma-eosin.vercel.app/signin",
    },
    {
      id: "mdp-newwbsite",
      name: "News Website",
      // createdAt: "2023-10-19T00:00:00Z",
      createdAt: "Next.js, HTML, CSS, Bootstrap",
      description: "this is simple news website that gives you lest information and get you up to date with current news",
      url: "https://news-ashen-three.vercel.app/news",
    },
    {
      id: "mdp-newwbsite",
      name: "PayTM Clone",
      // createdAt: "2023-10-19T00:00:00Z",
      createdAt: "Next.js, typescript, tailwindCSS, PostgreSQL, Node.js, Express.js,Turborepo, Docker,",
      description: "This is Paytm Clone where user can can store and exchange money",
      url: "https://github.com/ketul-panchal/paytm",
    },
    {
      id: "consistency-models",
      name: "E-commerce Food App",
      createdAt: "Flutter (Dart), Laravel, MySQL",
      description: "Food App that's help people easly order food and fast delivery",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "consistency-models",
      name: "Yummy - Restaurant website",
      createdAt: "HTML, EJS, Bootstrap, CSS, JavaScript, Node.js, Express.js, MongoDB.",
      description: "Yummy is a restaurant website with both admin and user side,Users can book a table ,add food. Admin dashboard can perform CRUD operations",
      url: "https://github.com/ketul-panchal/yummy-restorent-website",
    },
    {
      id: "consistency-models",
      name: "BAZAR E-commerce Website - MERN Stack",
      createdAt: "React, Node.js, Express.js, MongoDB, Bootstrap, Tailwind CSS",
      description: "Bazar is an E-commerce website both admin and user side. Admin panel using restful API, MVC Framework, complete CRUD operations. Users can show the products and detail",
      url: "https://github.com/ketul-panchal/ecommerce-mern-website",
    },
    {
      id: "consistency-models",
      name: "Bus Ticket Booking",
      createdAt: "Visual C#.Net, MySQL Server",
      description: "Admin can easly book bus and print customer ticket has time of registration",
      url: "https://github.com/ketul-panchal/BusTicketBooking",
    },
    {
      id: "consistency-models",
      name: "TouristGuide",
      createdAt: "Visual C#.Net, MySQL Server",
      description: "Tuurist can easly explore new place according to their choice and fine the best place for travel",
      url: "https://github.com/ketul-panchal/turist-guide",
    },
    {
      id: "consistency-models",
      name: "Product Deshoard - Next14",
      createdAt: "Next.js, Express.js, Node.js, MongoDB",
      description: "Admin can login and manage the products, sells and insert product, Sells",
      url: "https://github.com/ketul-panchal/Next-js-dashboard",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myimg1.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Cloud and Opensource Development, Web development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Anand, Gujarat, India",
    locality: "Anand",
    country: "India",
    // region: "California",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
