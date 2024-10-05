import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    data_visualization,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    apple_iphone,
    pomodoro_clock,
    personal_portfolio,
    nike,
    markdown_previewer,
    ip_tracker,
    interactive_3d_portfolio,
    gemini_clone,
    drum_machine
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "UI Designer",
      icon: mobile,
    },
    {
      title: "Unity Game Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Responsive Web Design",
      company_name: "FreeCodeCamp",
      icon: css,
      iconBg: "#383E56",
      date: "Completed in 2024",
      points: [
        "Gained expertise in building responsive websites using HTML5 and CSS3, ensuring layouts are adaptable to various screen sizes.",
        "Developed skills in creating flexible grids, media queries, and implementing web accessibility features for better usability.",
        "Built projects including a personal portfolio, a product landing page, and a survey form to demonstrate hands-on proficiency in responsive design.",
        "Learned to apply CSS Flexbox and Grid systems to create fluid layouts, focusing on modern design principles.",
      ],
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      company_name: "FreeCodeCamp",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Completed in 2024",
      points: [
        "Mastered the core concepts of JavaScript, including variables, arrays, objects, functions, and loops.",
        "Learned problem-solving techniques by implementing a wide range of algorithms, such as sorting, searching, and recursion.",
        "Built functional JavaScript projects like a calculator, a Roman numeral converter, and a palindrome checker to apply theoretical knowledge.",
        "Acquired knowledge of data structures like linked lists, stacks, and queues, enhancing the ability to handle complex problems.",
      ],
    },
    {
      title: "Front End Libraries",
      company_name: "FreeCodeCamp",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Completed in 2024",
      points: [
        "Learned to create dynamic and interactive web applications using popular front-end libraries such as React, Redux, Bootstrap, and jQuery.",
        "Developed key projects including a Markdown Previewer and a drum machine, demonstrating the ability to build reusable UI components.",
        "Gained hands-on experience in managing application state with Redux and creating responsive layouts with Bootstrap.",
        "Mastered the principles of Single Page Applications (SPAs) using React, improving performance and user experience.",
      ],
    },
    {
      title: "Data Visualization",
      company_name: "FreeCodeCamp",
      icon: data_visualization,
      iconBg: "#E6DEDD",
      date: "Completed in 2024",
      points: [
        "Gained proficiency in D3.js, learning how to bind data to the DOM and create a variety of data visualizations using SVG, HTML, and CSS.",
        "Built interactive projects such as bar charts, scatter plots, and pie charts, using real-world data sets to visualize complex information.",
        "Learned to manipulate datasets to create compelling visuals, improving storytelling through data-driven applications.",
        "Acquired skills in animating data transitions and adding interactive elements to charts for better user engagement.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Apple iPhone 15 Clone",
      description:
        "A web-based clone of the iPhone 15 official website, featuring a sleek design and interactive elements. Users can explore a detailed 3D model of the iPhone 15, view product specifications, and navigate through various sections seamlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: apple_iphone,
      source_code_link: "https://sofiak27.github.io/apple_iphone_15_pro_website_clone/",
    },
    {
      name: "Personal Portfolio",
      description:
        "A visually engaging personal portfolio showcasing my skills and projects, featuring interactive 3D objects that enhance user experience. The portfolio highlights my journey and showcases my work in a creative manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: personal_portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Interactive 3D Portfolio",
      description:
        "A captivating interactive 3D portfolio featuring a fully immersive environment. Users can explore a dynamic scene with a plane flying through the sky and a bird soaring around, showcasing my projects and skills in a unique way.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: interactive_3d_portfolio,
      source_code_link: "https://sofiak27.github.io/interactive_3d_portfolio/",
    },
    {
      name: "Nike",
      description:
        "A visually appealing landing page that replicates the Nike official website. Users can explore the latest product releases, promotional content, and stunning visuals, all crafted to provide an engaging brand experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://sofiak27.github.io/nike/",
    },
    {
      name: "Gemini Google AI Chatbot",
      description:
        "A clone of the Gemini Google AI Chatbot that utilizes Google’s API for conversational capabilities. Users can interact with the chatbot to ask questions and receive intelligent responses, showcasing the effectiveness of AI in user interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gemini_clone,
      source_code_link: "https://sofiak27.github.io/gemini_clone/",
    },
    {
      name: "IP Tracker",
      description:
        "An interactive web application that lets users input any IP address to view detailed information, including location, ISP, and timezone, along with a map showcasing the precise location of the IP, enhancing the exploration of geographic data.",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ip_tracker,
      source_code_link: "https://sofiak27.github.io/ip_address_tracker/",
    },
    {
      name: "Markdown Previewer",
      description:
        "A web application that allows users to write and preview Markdown text in real time. Users can see their formatted text instantly, making it easy to create documents and notes with proper styling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: markdown_previewer,
      source_code_link: "https://sofiak27.github.io/markdown_previewer/",
    },
    {
      name: "Drum Machine",
      description:
        "An interactive drum machine that lets users play various drum sounds by clicking buttons or pressing keyboard keys. Users can create beats, experiment with sounds, and enjoy a fun musical experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: drum_machine,
      source_code_link: "https://sofiak27.github.io/drum_machine/",
    },
    {
      name: "Pomodoro Clock",
      description:
        "A productivity tool based on the Pomodoro Technique, enabling users to manage time efficiently. Users can set work intervals, track breaks, and visualize productivity to improve focus and time management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pomodoro_clock,
      source_code_link: "https://sofiak27.github.io/pomodoro_clock/",
    },
    // {
    //   name: "Calculator",
    //   description:
    //     "A web-based calculator that performs basic arithmetic operations. Users can input numbers and operators to calculate results, featuring a user-friendly interface and responsive design for an optimal experience on any device.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Snack Game",
    //   description:
    //     "An interactive snack game where users control a character to collect snacks while avoiding obstacles. Featuring engaging graphics and sound effects, the game offers various levels of difficulty to challenge players of all ages.",
    //   tags: [
    //     {
    //       name: "javascript",
    //       color: "orange-text-gradient",
    //     },
    //     {
    //       name: "html",
    //       color: "ocean-blue-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];

  
  export { services, technologies, experiences, testimonials, projects };