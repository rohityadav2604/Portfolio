import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Rohit Yadav',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Rohit Yadav portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I am a highly skilled software engineer with expertise in Node.js, Docker, AWS, and Kubernetes.My strong problem-solving skills and leadership qualities make me an asset in any team." ,
        "* I am experienced in building scalable applications for production environments,",
        "* I am always looking for ways to improve and optimize processes to increase efficiency and productivity.With my technical skills and ability to lead, I can help your organization achieve its goals and stay competitive in today's fast-paced tech industry.",
        "* Let's connect and see how I can add value to your team."
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1FtEFFQAKhDNm5QbvbQy8AQHMmv50G7Qh/view?usp=drive_link',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/reunite.png',
            websiteURL: 'https://reunite-kn90.onrender.com/',
          },
          {
            url: 'websites-preview/medium.png',
            websiteURL: 'https://medium.com/@rohityadav2604',
          },
          {
            url: 'websites-preview/sorting.png',
            websiteURL:
              'https://sortvisualiser.netlify.app/',
          },
          {
            url: 'websites-preview/white.png',
            websiteURL: 'https://white-board-one.netlify.app/',
          },
          {
            url: 'websites-preview/login.jpeg',
            websiteURL: 'https://github.com/rohityadav2604/loginsystem',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/rohityadav2604',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/rohityadav2604/',
          },
          {
            url: 'icons/medium.png',
            websiteURL: 'https://medium.com/@rohityadav2604',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/rizzle-rohit',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:rohitsoftware2604@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
