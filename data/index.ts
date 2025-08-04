export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "DSA", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Enhancing My Full Stack Development with DSA Mastery.",
    description:
      "As a Full Stack Developer, I'm honing my problem-solving skills by actively solving LeetCode questions and deepening my understanding of Data Structures and Algorithms.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QuickChat",
    des: "An online chat web application enabling real-time communication with a sleek UI and secure authentication.",
    img: "/QuickChat.jpeg",
    iconLists: [
      "/nodejs.svg",
      "/React.svg",
      "/expressjs.svg",
      "/tail.svg",
      "/mongo.svg",
      "/cloudinary.svg",
    ],
    link: "https://quick-chat-frontend-nine.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Smart Asset Allocator",
  //   des: "A smart tool that suggests personalized investment allocations using stock prediction, sentiment analysis, and explainable AI.",
  //   iconLists: [
  //     "/python.svg",
  //     "/react.svg",
  //     "/nodejs.svg",
  //     "/expressjs.svg",
  //     "/tail.svg",
  //     "/mongo.svg",
  //   ],
  //   img: "/AssetAllocator.jpeg",

  //   link: "https://your-live-link.com/asset-allocator",
  // },
  {
    id: 2,
    title: "Whatsapp Chat Analyzer",
    des: "WhatsApp Chat Analyzer is a tool that visualizes and summarizes WhatsApp chat data with insights like message counts, most active users, and word usage. It uses Python, pandas, and matplotlib for data processing and visual analytics.",
    iconLists: ["/python.svg", "/StreamLit.svg", "Matplotlib.svg"],
    img: "/WhatsappAnalyzer.png",
    link: "https://whatsapp-chat-analyzer-vrutik.streamlit.app/",
  },
  {
    id: 3,
    title: "CalcCanvas",
    des: "CalcCanvas is an AI-powered web app that lets users draw math equations on a canvas and get instant solutions. It uses Gemini API for solving and LaTeX to render clean, readable results..",
    img: "/CalcCanvas.jpeg",

    iconLists: ["/python.svg", "/react.svg", "/tail.svg", "/FastApi.svg"],
    link: "https://calc-canvas-f.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Recommender System",
    des: "A personalized movie recommendation engine based on collaborative filtering and user preferences.",
    img: "/StreamBox.jpeg",

    iconLists: ["/python.svg", "/react.svg", "/shadcn.svg", "/tail.svg"],
    link: "https://your-live-link.com/movie-recommender",
  },
  // {
  //   id: 5,
  //   title: "FlaskBlog",
  //   des: "A clean and simple blogging platform built with Flask, supporting markdown, authentication, and CRUD operations.",
  //   img: "/p1.svg",

  //   iconLists: ["/python.svg", "/flask.svg", "/html.svg", "/css.svg"],
  //   link: "https://your-live-link.com/flaskblog",
  // },
  // {
  //   id: 6,
  //   title: "WhatsApp Chat Analyzer",
  //   des: "A data analysis tool that extracts insights from WhatsApp chat exports using NLP and visualizations.",
  //   img: "/p1.svg",

  //   iconLists: ["/python.svg", "/pandas.svg", "/matplotlib.svg", "/nlp.svg"],
  //   link: "https://your-live-link.com/whatsapp-analyzer",
  // },
  // {
  //   id: 7,
  //   title: "DocGist (PDF Summarizer)",
  //   des: "An intelligent PDF summarizer that uses NLP to extract and summarize key content from academic or business documents.",
  //   img: "/p1.svg",

  //   iconLists: ["/python.svg", "/flask.svg", "/nlp.svg", "/openai.svg"],
  //   link: "https://your-live-link.com/docgist",
  // },
  // {
  //   id: 8,
  //   title: "AppetizerJS (Restaurant Website)",
  //   des: "A beautifully designed restaurant website with menu browsing, table reservations, and mobile-friendly layout.",
  //   img: "/p1.svg",

  //   iconLists: ["/html.svg", "/css.svg", "/js.svg", "/tail.svg"],
  //   link: "https://your-live-link.com/appetizerjs",
  // },
  // {
  //   id: 9,
  //   title: "CalcCanvas (Math Drawing Calculator)",
  //   des: "A web app where users can draw math expressions and get instant calculations using OCR and evaluation logic.",
  //   img: "/p1.svg",

  //   iconLists: ["/React.svg", "/ts.svg", "/canvas.svg", "/ml.svg"],
  //   link: "https://your-live-link.com/calccanvas",
  // },
  // {
  //   id: 10,
  //   title: "Schedulo (Scheduling App)",
  //   des: "A productivity-focused scheduling app that helps users manage events, reminders, and availability across days.",
  //   img: "/p1.svg",

  //   iconLists: ["/next.svg", "/React.svg", "/ts.svg", "/tail.svg"],
  //   link: "https://your-live-link.com/schedulo",
  // },
  // {
  //   id: 11,
  //   title: "SimpleBooks",
  //   des: "A minimalist bookkeeping app for tracking income, expenses, and financial summaries for small businesses.",
  //   img: "/p1.svg",

  //   iconLists: ["/React.svg", "/ts.svg", "/chart.svg", "/mongo.svg"],
  //   link: "https://your-live-link.com/simplebooks",
  // },
  // {
  //   id: 12,
  //   title: "CarePulse (Doctor Appointment Allocator)",
  //   des: "A doctor appointment scheduling system that helps patients book slots, get reminders, and manage follow-ups.",
  //   img: "/p1.svg",

  //   iconLists: ["/next.svg", "/React.svg", "/ts.svg", "/mongo.svg"],
  //   link: "https://your-live-link.com/carepulse",
  // },
  // {
  //   id: 13,
  //   title: "Connect-o-Trial",
  //   des: "A legal-tech platform to connect clients with lawyers for quick consultation booking and document handling.",
  //   img: "/p1.svg",

  //   iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/mongo.svg"],
  //   link: "https://your-live-link.com/connectotrial",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "git",
    link: "https://github.com/Vrutik-Patwa",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    name: "Leetcode",
    link: "https://leetcode.com/u/vrutikpatwa/",
  },
  {
    id: 3,
    img: "/link.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vrutik-patwa/",
  },
  {
    id: 4,
    img: "/codechef.svg",
    name: "CodeChef",
    link: "https://www.codechef.com/users/vrutikpatwa",
  },
  {
    id: 5,
    img: "/Codeforces.svg",
    name: "Codeforces",
    link: "https://codeforces.com/profile/VrutikPatwa",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "LeetCode",
    desc: "Knight-ranked coder with 400+ problems solved. Focused on mastering system design, dynamic programming, and real-world coding patterns. Active in weekly and biweekly contests, consistently ranking in top percentiles.",
    className: "md:col-span-2",
    thumbnail: "/leetcode.svg", // You can change to your own icon or leave as-is
    link: "https://leetcode.com/u/vrutikpatwa/",
  },
  {
    id: 2,
    title: "Codeforces",
    desc: "Pupil-rated competitive programmer. Regularly participates in Div 2 & Div 3 contests, with strong performance in greedy, graphs, and number theory. Built strong intuition for time-efficient algorithms and edge-case handling.",
    className: "md:col-span-2",
    thumbnail: "/Codeforces.svg",
    link: "https://codeforces.com/profile/VrutikPatwa",
  },
  {
    id: 3,
    title: "CodeChef",
    desc: "Achieved 2★ rating . Competed in Long Challenges, Starters, and Cook-Offs. Specialized in recursion, DP, and bit manipulation. Ranked among top performers in college-level contests.",
    className: "md:col-span-2",
    thumbnail: "/codechef.svg",
    link: "https://www.codechef.com/users/vrutikpatwa",
  },
];
