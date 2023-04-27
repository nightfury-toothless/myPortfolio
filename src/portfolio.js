/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lukas Thomas's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Lukas Thomas Hathidara Portfolio",
    type: "website",
    url: "http://lukasthomashathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Lukas Thomas's Hathidara",
  logo_name: "LukasThomasHathidara",
  nickname: "nightfury_toothless",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    // "resume(ecommerce).pdf",
    "https://drive.google.com/file/d/1kYlx5H0IIRWSO1LzTAxrP8ru8FHoodZS/view?usp=sharing",
  portfolio_repository: "https://github.com/nightfury-toothless/myPortfolio",
  githubProfile: "https://github.com/nightfury-toothless",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/lukasthomas1919",
  // linkedin: "https://www.linkedin.com/in/lukasthomas-hathidara-88710b138/",
  // gmail: "lukasthomashathidara98@gmail.com",
  // gitlab: "https://gitlab.com/lukasthomashathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/lukasthomas_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/nightfury-toothless",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/in/lukasthomas1919/",
  //   fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //   backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  // },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:lukas19940702thomas@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/lukasthomas_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "E-Commerce Website&Apps",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Strong understanding of eCommerce platforms",
        "⚡ Proficient understanding of client-side scripting and JavaScript frameworks",
        "⚡ Strong knowledge of Order and Email marketing Management Module",
        "⚡ Experience working with Google services",
        "⚡ Working knowledge of databases",
      ],
      softwareSkills: [
        {
          skillName: "shopify",
          fontAwesomeClassname: "logos:shopify",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "magento",
          fontAwesomeClassname: "devicon:magento",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "php",
          fontAwesomeClassname: "skill-icons:php-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "react",
          fontAwesomeClassname: "skill-icons:react-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "sql",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "E-commerce platform",
      fileName: "EcommercePlatform",
      skills: [
        "⚡ Strong understanding of eCommerce platforms",
        "⚡ Integrate the application to the eCommerce platforms",
        "⚡ Integrate the marketing automation platforms to the eCommerce platforms",
        "⚡ Integrate the cloud collaboration service  to the eCommerce platforms",
      ],

      softwareSkills: [
        {
          skillName: "shopify",
          fontAwesomeClassname: "logos:shopify",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "woocommerce",
          fontAwesomeClassname: "devicon:woocommerce",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "magento",
          fontAwesomeClassname: "logos:magento",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "airtable",
          fontAwesomeClassname: "tabler:brand-airtable",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "marketing",
          fontAwesomeClassname: "nimbus:marketing",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "wordpress",
          fontAwesomeClassname: "skill-icons:wordpress",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "webflow",
          fontAwesomeClassname: "simple-icons:webflow",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ translating designs and wireframes into responsive interfaces using modern web technologies",
        "⚡ Good knowledge of web development technologies",
        "⚡ Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery and other web standard languages to develope application for eCommerce platform",
        "⚡ Experience of scripting languages, such as PHP or server side javascript",
        "⚡ Working knowledge of databases such as MongoDB, Oracle, MySQL, DB2, and SQL Serve",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
          skillName: "api",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "php",
          fontAwesomeClassname: "skill-icons:php-dark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "json",
          fontAwesomeClassname: "bi:filetype-json",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "teenyicons:python-outline",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "django",
          fontAwesomeClassname: "bxl:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "mongodb",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Google service",
      fileName: "GoogleService",
      skills: [
        "⚡ Optimized ecommerce platform for better search engine visibility and faster page loading times",
        "⚡ Experience working with Google services",
      ],
      softwareSkills: [
        {
          skillName: "google-search",
          fontAwesomeClassname: "logos:google-search-console",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "google-analytics",
          fontAwesomeClassname: "tabler:brand-google-analytics",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "google-developer",
          fontAwesomeClassname: "logos:google-developers",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "amazon",
          fontAwesomeClassname: "ant-design:amazon-circle-filled",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "facebook",
          fontAwesomeClassname: "bi:facebook",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/lukasthomas_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@lukasthomas391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "trebas_institute.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have development and design to ensure that the end produvt is both functional and aesthetically pleasing.",
        "⚡ I have learned hpw tp develop effective strategies for attracting and retaining customers, optimizing their sales funnels, and managing their inventory and fulfillent processes",
        "⚡ I have learned valuable skills in project management, including how to create project plans, manage budgets, allocate resources, and communicate effectively with team members and clients.",
      ],
      website_link: "https://www.trebas.com/",
    },
    {
      title: "University of Toronto",
      subtitle: "M.S. in Computer Science",
      logo_path: "UofT_Centered.png",
      alt_name: "University of Toronto",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have learned programming languages such as Java, Python, and HTML/CSS, as well as design principles for creating effective user interfaces and visual communication.",
        "⚡ I take part in Rotman School of Management to learn about digital marketing, e-commerce and entrepreneurship",
        "⚡ I have learned how to plan, execute, and evaluate projects effectively and efficiently from small-scale initiatives to large-scale projects",
      ],
      website_link: "https://www.utoronto.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "eCommerce SEO Course",
      subtitle: "- Andrew Ng",
      logo_path: "reliablesoft-academy-logo3200x1440.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "eCmmerce marketing Course(Hubspot)",
      subtitle: "- Andrew Ng",
      logo_path: "hubspot-academy-courses.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "How to Create an eCommerce Store(Udemy)",
      subtitle: "- GCP Training",
      logo_path: "udemy-online-courses.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "eCommerce Email Marketing(Shopify)",
      subtitle: "- Alex Aklson",
      logo_path: "shopify-academy.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google Marketing Platform(Google)",
      subtitle: "- Alex Aklson",
      logo_path: "google-marketing-platform.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as eCommerce Developer, Designer and Software Architect. I have also worked with some well established companies mostly as eCommerce. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior ecommerce developer",
          company: "The Pointer",
          company_url: "https://thepointer.com/",
          logo_path: "pointer.png",
          duration: "Sep 2020 - Present",
          location: "Ottawa",
          description:
            "I managed all aspects of ecommerce operations including performance reporting, presenting proposals for new features and functionality, coordinating redesign efforts with multiple teams, and overseeing website maintenance, order fulfillment, customer service, and marketing initiatives.",
          color: "#0879bf",
        },
        {
          title: "Ecommerce developer",
          company: "Signify",
          company_url: "https://www.signify.com/",
          logo_path: "signify.png",
          duration: "March 2018 - Sep 2020",
          location: "Montreal",
          description:
            "I demonstrated proficiency in multiple programming languages and independently developed complex ecommerce applications, while also integrating platforms with existing websites, assessing code changes for risk, reducing development time through Agile methodologies, formulating successful marketing campaigns, streamlining order processing and fulfillment, and optimizing platform performance for improved search engine visibility and traffic.",
          color: "#9b1578",
        },
        {
          title: "Junior ecommerce developer",
          company: "webhoster.ca",
          company_url: "https://webhoster.ca/",
          logo_path: "webhoster.png",
          duration: "April 2016 - March 2018",
          location: "Toronto",
          description:
            "I utilized various programming languages to develop custom ecommerce solutions for clients, mentored junior developers, enhanced user experience with thoughtful design and implementation of features, and reduced customer abandoned carts through the development and implementation of a user-friendly checkout process.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create eCommerce websites and integrate the plugins and apps to them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Shopping Queries Dataset: A Large-Scale ESCI Benchmark for Improving Product Search",
      createdAt: "2020-04-09T09:26:43Z",
      description:
        "Improving the quality of search results can significantly enhance users experience and engagement with search engines",
      url: "https://arxiv.org/pdf/2206.06588.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Contrastive language and vision learning of general fashion concepts",
      createdAt: "2022-10-09T18:22:34Z",
      description:
        "The steady rise of online shopping goes hand in hand with the development of increasingly complex ML and NLP models.",
      url: "https://www.nature.com/articles/s41598-022-23052-9",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Ecommerce, Ecommerce apps, Ecommerce plugins and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.lukasthomashathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "2199 WELLINGTON STREET, TORONTO",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Wellington+St+W,+Toronto,+ON,+Canada/@43.6440202,-79.3971143,17z/data=!3m1!4b1!4m6!3m5!1s0x882b34d9a0737d9f:0xbc1ae74f23fabf4e!8m2!3d43.6440163!4d-79.3945394!16s%2Fg%2F1vnrr797",
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
