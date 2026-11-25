/**
 * Breakpoint — bilingual portfolio content.
 */

export type Lang = 'en' | 'ar'
export type Theme = 'light' | 'dark'

export const SECTIONS = [
  { id: 'init', code: 'INIT' },
  { id: 'about', code: 'WHOAMI' },
  { id: 'projects', code: 'BUILD' },
  { id: 'stack', code: 'STACK' },
  { id: 'experience', code: 'TRACE' },
  { id: 'achievements', code: 'RELEASE' },
  { id: 'recommendations', code: 'REFS' },
  { id: 'contact', code: 'ENDPOINT' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

export type ExperienceKind =
  | 'employment'
  | 'internship'
  | 'training'
  | 'other'

export type AchievementKind = 'certificates' | 'community' | 'awards'

const en = {
  brand: 'breakpoint',

  nav: {
    init: 'Intro',
    about: 'About',
    projects: 'Projects',
    stack: 'Skills',
    experience: 'Experience',
    achievements: 'Recognition',
    recommendations: 'Recommendations',
    contact: 'Contact',
  } as Record<SectionId, string>,

  ui: {
    themeLight: 'Light',
    themeDark: 'Dark',
    switchTheme: 'Switch to dark theme',
    switchThemeBack: 'Switch to light theme',
    langCurrent: 'EN',
    langOther: 'عربي',
    switchLang: 'التبديل إلى العربية',
    path: 'Page path',
    placeholder: 'Placeholder — replace with your own content',
    legend: '',
    backToTop: 'Back to top',
    rights: 'Year · Your Name',
    builtWith: 'Design reference · not live content',
  },

  hero: {
    greeting: "Hello, I'm",
    name: 'Malak F.Alotaibi',
    role: 'Computer Science Student | Web Developer & AI Enthusiast',
    intro:
      'A final-year Computer Science student at Umm Al-Qura University, passionate about building modern web applications and exploring AI-powered solutions that create meaningful impact.',
    primary: 'View projects',
    secondary: 'Get in touch',
    portrait: 'Malak Alotaibi',
    portraitHint: '4:5 · min 800px wide',
    status: 'Open to Job & Internship Opportunities',
    location: 'Makkah, Saudi Arabia',
  },

  sections: {
    about: {
      title: 'About',
      sub: 'Who is behind the work.',
    },
    projects: {
      title: 'Projects',
      sub: 'Selected work, from the most representative down.',
    },
    stack: {
      title: 'Skills',
      sub: 'The languages, frameworks, tools and technologies used day to day.',
    },
    experience: {
      title: 'Experience',
      sub: 'Employment, internships, training and everything in between.',
    },
    achievements: {
      title: 'Recognition',
      sub: 'Professional certifications, community involvement, and achievements.',
    },
    recommendations: {
      title: 'Recommendations',
      sub: 'Words of trust and appreciation from professors who have witnessed my academic journey and growth.',
    },
    contact: {
      title: 'Contact',
      sub: '',
    },
  },

  about: {
    lead: 'Senior Computer Science student at Umm Al-Qura University, passionate about Web Development and Artificial Intelligence.',
    body: [
      'With hands-on experience gained through training at Wadi Makkah, I enjoy building modern digital solutions that address real-world needs.',
      'My experience spans different stages of software development, from analysis and design to implementation and deployment, with a focus on usability, quality, and business impact.',
      'I’m always eager to learn, explore new technologies, and turn ideas into meaningful digital experiences.',
    ],
    facts: [
      { k: 'Based in', v: 'Saudi Arabia' },
      { k: 'Focus', v: 'Web Development & AI' },
      { k: 'Education', v: 'BSc Computer Science · Umm Al-Qura University' },
      { k: 'Languages', v: 'Arabic & English' },
    ],
    cv: 'Download CV',
    cvMeta: 'PDF',
  },

  projects: {
    featuredLabel: 'Featured',
    source: 'View Source',
    emptyTitle: 'No projects yet',
    emptyBody: 'Your projects will appear here.',

    featured: {
      title: 'STEPIN – Your First Steps Toward Sustainable Success',
      year: '2026',
      summary:
        'A digital platform designed to simplify the process of helping foreign companies enter the Saudi market.',

      desc: `Developed STEPIN as part of my cooperative training project at Wadi Makkah.

My contributions included:
• Gathering and analyzing client requirements.
• Preparing the Product Requirements Document (PRD).
• Writing and analyzing functional requirements.
• Designing the Entity Relationship Diagram (ERD).
• Creating the project’s visual identity.
• Designing wireframes and user interfaces.
• Developing both frontend and backend components.

The platform guides companies through market-entry procedures, document management, progress tracking, and licensing workflows through a centralized digital solution.`,

      role: 'Full Stack Web Developer & AI Intern · Wadi Makkah',

      tags: [
        'React.js',
        'Express.js',
        'PostgreSQL',
        'Figma',
        'GitHub',
        'VS Code',
      ],

      images: [
        {
          src: '/images/stepin-presentation.jpeg',
          alt: 'STEPIN Project Presentation',
        },
        {
          src: '/images/stepin-poster.jpeg',
          alt: 'STEPIN Project Poster',
        },
      ],

      sourceUrl: '',
    },

    items: [
      {
        title: 'ReqFlow AI',
        year: '2026',
        summary:
          'An AI-powered assistant that transforms initial ideas into structured software requirements.',

        desc: `Developed a bilingual conversational assistant that extracts functional and non-functional requirements, identifies stakeholders, detects missing information, and generates structured SRS documentation.

Integrated an LLM workflow with Prompt Engineering, structured data extraction, and Pydantic validation.`,

        tags: [
          'Python',
          'Streamlit',
          'LLMs',
          'Prompt Engineering',
          'Pydantic',
          'Gemini API',
          'Groq',
        ],

        images: [
          {
            src: '/images/reqflow-home.jpeg',
            alt: 'ReqFlow AI Home Page',
          },
          {
            src: '/images/reqflow-dashboard.jpeg',
            alt: 'ReqFlow AI Dashboard',
          },
        ],

        sourceUrl: '',
      },

      {
        title: 'Burn Degree Classification Using Deep Learning',
        year: '2025',
        summary:
          'A deep learning model that classifies burn severity from uploaded images.',

        desc: `Developed a CNN-based image classification model to identify burn severity levels using a burn image dataset.

Built an interactive desktop interface with Tkinter, allowing users to upload images and receive predictions. Used TensorFlow for model training.`,

        tags: [
          'Python',
          'Deep Learning',
          'CNN',
          'TensorFlow',
          'Tkinter',
        ],

        images: [],
        sourceUrl:
          'https://github.com/MalakCodes/Burn-Degree-Classification-Using-Deep-Learning',
      },

      {
        title: 'Computer Vision: Arduino LED Control System',
        year: '2025',
        summary:
          'A hand-gesture-based lighting control system using computer vision and Arduino.',

        desc: `Developed a system that detects raised fingers through a webcam and uses the detected hand gestures to control LEDs connected to an Arduino Uno.

Used HandDetector for hand tracking and PySerial for communication between Python and Arduino.`,

        tags: [
          'Python',
          'OpenCV',
          'Computer Vision',
          'CVZone',
          'Arduino Uno',
          'PySerial',
        ],

        images: [
          {
            src: '/images/arduino-led-control.jpeg',
            alt: 'Computer Vision Arduino LED Control System',
          },
        ],

        sourceUrl:
          'https://github.com/MalakCodes/Hand-Gesture-Control-for-Arduino-with-OpenCV-and-HandTracking',
      },
    ],
  },

  stack: {
    groups: [
      {
        key: 'languages',
        title: 'Programming Languages',
        hint: 'Languages used in development',
        items: ['Java', 'Python', 'JavaScript', 'HTML'],
        coreCount: 2,
      },
      {
        key: 'frameworks',
        title: 'Frameworks & Libraries',
        hint: 'Libraries and frameworks used in development',
        items: [
          'React.js',
          'Express.js',
          'TensorFlow',
          'Keras',
          'PyTorch',
          'Scikit-learn',
        ],
        coreCount: 3,
      },
      {
        key: 'tools',
        title: 'Tools',
        hint: 'Development, design and workflow tools',
        items: [
          'GitHub',
          'Postman',
          'n8n',
          'Figma',
          'VS Code',
          'Cline',
          'Trello',
        ],
        coreCount: 3,
      },
      {
        key: 'technologies',
        title: 'Technologies',
        hint: 'Platforms, databases and infrastructure',
        items: [
          'Node.js',
          'Prisma ORM',
          'SQLite',
          'PostgreSQL',
        ],
        coreCount: 3,
      },
    ],
    core: 'Core',
    familiar: 'Familiar',
    emptyTitle: 'No skills listed',
    emptyBody: 'Skill tags appear here, grouped by category.',
  },

  experience: {
    kinds: {
      employment: 'Employment',
      internship: 'Internship',
      training: 'Training',
      other: 'Other',
    } as Record<ExperienceKind, string>,

    role: 'Full Stack Web Developer & AI Intern',
    org: 'Wadi Makkah Company for Technology',
    date: 'Jan 18, 2026 – Jun 25, 2026',
    current: 'Jan 2026 – Jun 2026',
    place: 'Makkah, Saudi Arabia · On-site',

    desc: `During my cooperative training at Wadi Makkah Company for Technology, I gained hands-on experience in Full Stack Web Development, working on real-world projects throughout the complete Software Development Life Cycle (SDLC).

I developed frontend applications using React, built backend services with Express.js, designed and managed databases, and learned workflow automation using n8n to streamline business processes and improve operational efficiency.

In addition to strengthening my technical expertise, this experience enhanced my professional skills, including communication, teamwork, problem-solving, analytical thinking, time management, adaptability, and collaborating with clients and cross-functional teams. Working in a professional environment allowed me to bridge the gap between academic knowledge and real-world software development.`,

    tag: 'Tech',
    emptyTitle: 'No experience added',
    emptyBody: 'Your professional experience will appear here.',
  },

  achievements: {
    tabs: {
      all: 'All',
      certificates: 'Certificates',
      community: 'Community & Leadership',
      awards: 'Awards & Achievements',
      label: 'Recognition categories',
    },

    verify: 'Verify',

    certificates: [
      {
        title: 'Fundamental AI Concepts',
        issuer: 'Microsoft',
        date: 'November 2024',
        verifyUrl:
          'https://learn.microsoft.com/api/achievements/share/en-us/MalakFAlotaibi-3858/YQD3N3CR?sharingId=668CFCE3DEF54AA5',
      },
      {
        title: 'Artificial Intelligence Fundamentals',
        issuer: 'IBM',
        date: 'March 2025',
        verifyUrl:
          'https://www.credly.com/badges/e0c2f163-661d-4e0a-9d56-1dc925024fbc/linked_in_profile',
      },
      {
        title: 'Fundamentals of Machine Learning',
        issuer: 'Microsoft',
        date: 'November 2024',
        verifyUrl:
          'https://learn.microsoft.com/en-us/users/MalakFAlotaibi-3858/achievements/87E6NLZW?ref=https%3a%2f%2fwww.linkedin.com%2f',
      },
      {
        title: 'AI Bootcamp',
        issuer: 'Google Developers Student Club · PMU',
        date: '2024',
        verifyUrl: '',
      },
      {
        title: 'Journey to AI World Bootcamp',
        issuer: 'Artificial Intelligence Governance Association',
        date: 'March 2025',
        verifyUrl: '',
      },
    ],

    community: [
      {
        title: 'Keptar – Public Relations Management',
        organization: 'Awontech',
        date: 'January 2025 – January 2026',
        description:
          'Contributed to the Public Relations and Training & Project Management committees, engaging with companies and organizations, supporting collaborations, and participating in technical projects.',
      },
      {
        title: 'Academic Programs Awareness Campaign',
        organization: 'Manar Initiative · AlKato Platform',
        date: 'April 2025 – July 2025',
        description:
          'Volunteered in an awareness campaign introducing the College of Computing specializations, guiding prospective students in choosing their academic paths, and contributing content to a website supporting their academic journey.',
      },
    ],

    awards: [
      {
        title: 'Platform Code Challenge',
        achievement: 'Second Place',
        organization: 'Wadi Makkah for Technology',
        date: '2026',
        image: '/images/platform-code-award.jpeg',
        description: `I participated individually in the Platform Code Challenge, organized by my training supervisor. The challenge focused on understanding the Saudi Government Platform Code standards and their role in improving consistency across government websites.

I developed an automated website evaluation tool using n8n within one day. The tool receives a website URL, reads the evaluation criteria, analyzes the website, performs the assessment, and generates a report containing the evaluation results.

I achieved second place and was honored by the CEO of Wadi Makkah for Technology during the Cooperative Training Projects Exhibition.`,
      },
    ],
  },

  recommendations: {
    letter: 'Letter image',
    letterHint: 'A4 scan · portrait',
    name: 'Recommender name',
    title: 'Title, Organization',
    relation: 'Relationship to you',
    preview: 'Preview letter',
    close: 'Close',
    prev: 'Previous letter',
    next: 'Next letter',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    download: 'Download',
    of: 'of',
    emptyTitle: 'No letters yet',
    emptyBody: 'Scanned recommendation letters appear here as a gallery you can open.',
  },

  contact: {
    title: "Let's Connect",
    sub: 'I’m always open to discussing new opportunities, interesting projects, and meaningful collaborations. Feel free to reach out!',
    email: 'your.email@domain.com',
    copy: 'Copy',
    copied: 'Copied',
    github: 'github.com/username',
    linkedin: 'linkedin.com/in/username',
    other: 'Other profile',
    otherUrl: 'Optional link',
    form: {
      title: 'Send a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      note: 'Design preview — this form is not connected yet.',
    },
  },
}

export type Content = typeof en

const ar: Content = {
  brand: 'Malak Alotaibi',

  nav: {
    init: 'البداية',
    about: 'نبذة',
    projects: 'المشاريع',
    stack: 'المهارات',
    experience: 'الخبرات',
    achievements: 'الشهادات والإنجازات',
    recommendations: 'التوصيات',
    contact: 'التواصل',
  },

  ui: {
    themeLight: 'فاتح',
    themeDark: 'داكن',
    switchTheme: 'التبديل إلى الوضع الداكن',
    switchThemeBack: 'التبديل إلى الوضع الفاتح',
    langCurrent: 'ع',
    langOther: 'EN',
    switchLang: 'Switch to English',
    path: 'مسار الصفحة',
    placeholder: 'محتوى مؤقت — استبدله بمحتواك',
    legend: 'النص المُعلَّم محتوى مؤقت',
    backToTop: 'العودة للأعلى',
    rights: 'السنة · اسمك',
    builtWith: 'مرجع تصميمي · ليس محتوى نهائيًا',
  },

  hero: {
    greeting: 'مرحبًا، أنا',
    name: 'ملك العتيبي',
    role: 'طالبة علوم حاسب | مطورة ويب ومهتمة بالذكاء الاصطناعي',
    intro:
      'طالبة علوم حاسب في السنة الأخيرة بجامعة أم القرى، شغوفة ببناء تطبيقات ويب حديثة واستكشاف الحلول المدعومة بالذكاء الاصطناعي التي تُحدث أثرًا ملموسًا.',
    primary: 'استعرض مشاريعي',
    secondary: 'تواصل معي',
    portrait: 'الصورة الشخصية',
    portraitHint: '٤:٥ · عرض ٨٠٠ بكسل على الأقل',
    status: 'متاحة لفرص العمل والتدريب',
    location: 'مكة المكرمة، المملكة العربية السعودية',
  },

  sections: {
    about: {
      title: 'نبذة',
      sub: 'من يقف خلف هذا العمل.',
    },
    projects: {
      title: 'المشاريع',
      sub: 'أعمال مختارة، من الأكثر تمثيلًا فما دونه.',
    },
    stack: {
      title: 'المهارات',
      sub: 'اللغات وأطر العمل والأدوات والتقنيات المستخدمة يوميًا.',
    },
    experience: {
      title: 'الخبرات',
      sub: 'الوظائف والتدريب العملي والدورات وما بينها.',
    },
    achievements: {
      title: 'الشهادات والإنجازات',
      sub: 'الشهادات المهنية والمشاركات المجتمعية والإنجازات.',
    },
    recommendations: {
      title: 'التوصيات',
      sub: 'كلمات تقدير وثقة من أعضاء هيئة التدريس الذين شهدوا رحلتي الأكاديمية وتطوري.',
    },
    contact: {
      title: 'التواصل',
      sub: '',
    },
  },

  about: {
    lead: 'طالبة علوم حاسب في السنة الأخيرة بجامعة أم القرى، مهتمة بتطوير الويب والذكاء الاصطناعي، وأسعى إلى توظيف معرفتي التقنية في بناء حلول رقمية مبتكرة وذات أثر.',
    body: [
      'من خلال تجربتي العملية في التدريب لدى شركة وادي مكة للتقنية، اكتسبت خبرة في بناء حلول رقمية حديثة تعالج احتياجات واقعية.',
      'شملت تجربتي مراحل متعددة من تطوير البرمجيات، بدءًا من تحليل المتطلبات والتصميم، وصولًا إلى التنفيذ والتطوير، مع التركيز على سهولة الاستخدام وجودة الحلول وأثرها.',
      'أحرص دائمًا على التعلم واستكشاف التقنيات الحديثة وتحويل الأفكار إلى تجارب رقمية ذات قيمة.',
    ],
    facts: [
      { k: 'المقر', v: 'المملكة العربية السعودية' },
      { k: 'التركيز', v: 'تطوير الويب والذكاء الاصطناعي' },
      { k: 'التعليم', v: 'بكالوريوس علوم الحاسب · جامعة أم القرى' },
      { k: 'اللغات', v: 'العربية والإنجليزية' },
    ],
    cv: 'تحميل السيرة الذاتية',
    cvMeta: 'PDF',
  },

  projects: {
    featuredLabel: 'مشروع مميز',
    source: 'عرض الكود',
    emptyTitle: 'لا توجد مشاريع بعد',
    emptyBody: 'ستظهر مشاريعك هنا.',

    featured: {
      title: 'STEPIN – خطواتك الأولى نحو نجاح مستدام',
      year: '2026',
      summary:
        'منصة رقمية تهدف إلى تسهيل رحلة دخول الشركات الأجنبية إلى السوق السعودي.',

      desc: `طورت مشروع STEPIN ضمن مشروع التدريب التعاوني في شركة وادي مكة.

شملت مساهماتي:
• جمع وتحليل متطلبات العميل.
• إعداد وثيقة متطلبات المنتج (PRD).
• كتابة وتحليل المتطلبات الوظيفية.
• تصميم مخطط الكيانات والعلاقات (ERD).
• إنشاء الهوية البصرية للمشروع.
• تصميم المخططات الأولية وواجهات المستخدم.
• تطوير الواجهات الأمامية والخلفية للمنصة.

تساعد المنصة الشركات على إتمام إجراءات دخول السوق، وإدارة المستندات، ومتابعة التقدم، وتسهيل إجراءات التراخيص من خلال حل رقمي موحد.`,

      role: 'مطورة Full Stack ومتدربة ذكاء اصطناعي · وادي مكة',

      tags: [
        'React.js',
        'Express.js',
        'PostgreSQL',
        'Figma',
        'GitHub',
        'VS Code',
      ],

      images: [
        {
          src: '/images/stepin-presentation.jpeg',
          alt: 'تقديم مشروع STEPIN في وادي مكة',
        },
        {
          src: '/images/stepin-poster.jpeg',
          alt: 'لوحة مشروع STEPIN وملخص واجهاته',
        },
      ],

      sourceUrl: '',
    },

    items: [
      {
        title: 'ReqFlow AI',
        year: '2026',
        summary:
          'مساعد ذكي يحوّل الأفكار الأولية إلى متطلبات برمجية منظمة.',

        desc: `طورنا مساعدًا تفاعليًا ثنائي اللغة يستخرج المتطلبات الوظيفية وغير الوظيفية، ويحدد أصحاب المصلحة، ويكتشف المعلومات الناقصة، ويساعد على إنشاء وثيقة متطلبات البرمجيات (SRS).

دمجنا نموذجًا لغويًا كبيرًا ضمن سير محادثة تفاعلي باستخدام هندسة الأوامر واستخراج البيانات المنظمة والتحقق منها باستخدام Pydantic.`,

        tags: [
          'Python',
          'Streamlit',
          'LLMs',
          'Prompt Engineering',
          'Pydantic',
          'Gemini API',
          'Groq',
        ],

        images: [
          {
            src: '/images/reqflow-home.jpeg',
            alt: 'الصفحة الرئيسية لمشروع ReqFlow AI',
          },
          {
            src: '/images/reqflow-dashboard.jpeg',
            alt: 'لوحة متطلبات مشروع ReqFlow AI',
          },
        ],

        sourceUrl: '',
      },

      {
        title: 'تصنيف درجات الحروق باستخدام التعلم العميق',
        year: '2025',
        summary:
          'نموذج تعلم عميق يصنف شدة الحروق اعتمادًا على الصور.',

        desc: `طورت نموذجًا لتصنيف الصور باستخدام الشبكات العصبية الالتفافية (CNN)، بهدف تحديد درجات الحروق بالاعتماد على مجموعة بيانات للصور.

أنشأت واجهة تفاعلية باستخدام Tkinter تتيح للمستخدم رفع الصور والحصول على التنبؤات، واستخدمت TensorFlow لتدريب النموذج.`,

        tags: [
          'Python',
          'Deep Learning',
          'CNN',
          'TensorFlow',
          'Tkinter',
        ],

        images: [],
        sourceUrl:
          'https://github.com/MalakCodes/Burn-Degree-Classification-Using-Deep-Learning',
      },

      {
        title: 'التحكم بإضاءة Arduino باستخدام الرؤية الحاسوبية',
        year: '2025',
        summary:
          'نظام للتحكم بالإضاءة باستخدام إيماءات اليد والرؤية الحاسوبية.',

        desc: `طورت نظامًا يتعرف على عدد الأصابع المرفوعة عبر كاميرا الويب، ويستخدم إيماءات اليد للتحكم في مصابيح LED المتصلة بلوحة Arduino Uno.

استخدمت HandDetector لتتبع اليد وPySerial للتواصل بين Python وArduino.`,

        tags: [
          'Python',
          'OpenCV',
          'Computer Vision',
          'CVZone',
          'Arduino Uno',
          'PySerial',
        ],

        images: [
          {
            src: '/images/arduino-led-control.jpeg',
            alt: 'نظام التحكم بإضاءة Arduino باستخدام الرؤية الحاسوبية',
          },
        ],

        sourceUrl:
          'https://github.com/MalakCodes/Hand-Gesture-Control-for-Arduino-with-OpenCV-and-HandTracking',
      },
    ],
  },

  stack: {
    groups: [
      {
        key: 'languages',
        title: 'لغات البرمجة',
        hint: 'اللغات المستخدمة في التطوير',
        items: ['Java', 'Python', 'JavaScript', 'HTML'],
        coreCount: 2,
      },
      {
        key: 'frameworks',
        title: 'أطر العمل والمكتبات',
        hint: 'المكتبات وأطر العمل المستخدمة في التطوير',
        items: [
          'React.js',
          'Express.js',
          'TensorFlow',
          'Keras',
          'PyTorch',
          'Scikit-learn',
        ],
        coreCount: 3,
      },
      {
        key: 'tools',
        title: 'الأدوات',
        hint: 'أدوات التطوير والتصميم وسير العمل',
        items: [
          'GitHub',
          'Postman',
          'n8n',
          'Figma',
          'VS Code',
          'Cline',
          'Trello',
        ],
        coreCount: 3,
      },
      {
        key: 'technologies',
        title: 'التقنيات',
        hint: 'المنصات وقواعد البيانات والبنية التحتية',
        items: [
          'Node.js',
          'Prisma ORM',
          'SQLite',
          'PostgreSQL',
        ],
        coreCount: 3,
      },
    ],
    core: 'أساسية',
    familiar: 'مألوفة',
    emptyTitle: 'لا توجد مهارات مدرجة',
    emptyBody: 'تظهر المهارات هنا مصنفة حسب الفئة.',
  },

  experience: {
    kinds: {
      employment: 'وظيفة',
      internship: 'تدريب تعاوني',
      training: 'دورة تدريبية',
      other: 'أخرى',
    },

    role: 'Full Stack Web Developer & AI Intern',
    org: 'شركة وادي مكة للتقنية',
    date: '18 يناير 2026 – 25 يونيو 2026',
    current: 'يناير 2026 – يونيو 2026',
    place: 'مكة المكرمة، المملكة العربية السعودية · حضوري',

    desc: `خلال فترة تدريبي التعاوني في شركة وادي مكة للتقنية، اكتسبت خبرة عملية في تطوير تطبيقات الويب المتكاملة (Full Stack Web Development)، من خلال العمل على مشاريع واقعية عبر مختلف مراحل دورة حياة تطوير البرمجيات (SDLC).

عملت على تطوير واجهات المستخدم باستخدام React، وبناء خدمات الواجهة الخلفية باستخدام Express.js، وتصميم قواعد البيانات وإدارتها، بالإضافة إلى التعرف على أتمتة سير العمل باستخدام n8n؛ بهدف تحسين العمليات وتسهيل الإجراءات التشغيلية.

إلى جانب تطوير مهاراتي التقنية، أسهمت هذه التجربة في تعزيز مهاراتي المهنية، بما في ذلك التواصل والعمل الجماعي وحل المشكلات والتفكير التحليلي وإدارة الوقت والقدرة على التكيف، والتعاون مع العملاء وفرق العمل متعددة التخصصات. كما أتاحت لي العمل في بيئة احترافية ربط المعرفة الأكاديمية بالتطبيق العملي في مجال تطوير البرمجيات.`,

    tag: 'تقنية',
    emptyTitle: 'لم تُضف خبرات بعد',
    emptyBody: 'ستظهر خبرتك المهنية هنا.',
  },

  achievements: {
    tabs: {
      all: 'الكل',
      certificates: 'الشهادات',
      community: 'المشاركة المجتمعية والقيادة',
      awards: 'الجوائز والإنجازات',
      label: 'تصنيفات المشاركات',
    },

    verify: 'عرض الشهادة',

    certificates: [
      {
        title: 'مفاهيم الذكاء الاصطناعي الأساسية',
        issuer: 'Microsoft',
        date: 'نوفمبر 2024',
        verifyUrl:
          'https://learn.microsoft.com/api/achievements/share/en-us/MalakFAlotaibi-3858/YQD3N3CR?sharingId=668CFCE3DEF54AA5',
      },
      {
        title: 'أساسيات الذكاء الاصطناعي',
        issuer: 'IBM',
        date: 'مارس 2025',
        verifyUrl:
          'https://www.credly.com/badges/e0c2f163-661d-4e0a-9d56-1dc925024fbc/linked_in_profile',
      },
      {
        title: 'أساسيات تعلم الآلة',
        issuer: 'Microsoft',
        date: 'نوفمبر 2024',
        verifyUrl:
          'https://learn.microsoft.com/en-us/users/MalakFAlotaibi-3858/achievements/87E6NLZW?ref=https%3a%2f%2fwww.linkedin.com%2f',
      },
      {
        title: 'المعسكر التدريبي للذكاء الاصطناعي',
        issuer: 'Google Developers Student Club · PMU',
        date: '2024',
        verifyUrl: '',
      },
      {
        title: 'رحلة إلى عالم الذكاء الاصطناعي',
        issuer: 'جمعية حوكمة الذكاء الاصطناعي',
        date: 'مارس 2025',
        verifyUrl: '',
      },
    ],

    community: [
      {
        title: 'Keptar – إدارة العلاقات العامة',
        organization: 'Awontech',
        date: 'يناير 2025 – يناير 2026',
        description:
          'المشاركة في لجنتي العلاقات العامة والتدريب وإدارة المشاريع، والتواصل مع الشركات والجهات، ودعم فرص التعاون.',
      },
      {
        title: 'حملة التعريف بالتخصصات الأكاديمية',
        organization: 'مبادرة منار · منصة الكاتو',
        date: 'أبريل 2025 – يوليو 2025',
        description:
          'التطوع في حملة توعوية للتعريف بتخصصات كلية الحوسبة، وإرشاد الطلاب المستجدين لاختيار التخصصات المناسبة لاهتماماتهم، والمساهمة في كتابة محتوى لموقع يساعدهم في رحلتهم الأكاديمية.',
      },
    ],

    awards: [
      {
        title: 'تحدي كود المنصات',
        achievement: 'المركز الثاني',
        organization: 'شركة وادي مكة للتقنية',
        date: '2026',
        image: '/images/platform-code-award.jpeg',
        description: `شاركت بشكل فردي في تحدي كود المنصات، الذي نظمه مشرف التدريب، بهدف التعرف على معايير كود المنصات الحكومية السعودية ودورها في توحيد وتحسين تجربة المواقع الحكومية.

طورت أداة آلية لتقييم المواقع الإلكترونية باستخدام n8n خلال يوم واحد. تستقبل الأداة رابط الموقع، وتقرأ معايير التقييم، ثم تحلل الموقع وتجري عملية التقييم وتُنشئ تقريرًا يتضمن النتائج.

حصلت على المركز الثاني في التحدي، وتم تكريمي من قبل الرئيس التنفيذي لشركة وادي مكة للتقنية خلال معرض مشاريع التدريب التعاوني.`,
      },
    ],
  },

  recommendations: {
    letter: 'صورة الخطاب',
    letterHint: 'مسح ضوئي A4 · طولي',
    name: 'اسم الموصي',
    title: 'المسمّى، الجهة',
    relation: 'صلته بك',
    preview: 'معاينة الخطاب',
    close: 'إغلاق',
    prev: 'الخطاب السابق',
    next: 'الخطاب التالي',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    download: 'تحميل',
    of: 'من',
    emptyTitle: 'لا توجد خطابات بعد',
    emptyBody: 'تظهر خطابات التوصية الممسوحة هنا في معرض يمكن فتحه.',
  },

  contact: {
    title: 'لنتواصل',
    sub: 'يسعدني دائمًا التواصل لمناقشة الفرص الجديدة والمشاريع المميزة وأوجه التعاون الهادف. لا تترددوا في التواصل معي!',
    email: 'your.email@domain.com',
    copy: 'نسخ',
    copied: 'تم النسخ',
    github: 'github.com/username',
    linkedin: 'linkedin.com/in/username',
    other: 'حساب آخر',
    otherUrl: 'رابط اختياري',
    form: {
      title: 'أرسل رسالة',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      note: 'معاينة تصميمية — هذا النموذج غير متصل بعد.',
    },
  },
}

export const CONTENT: Record<Lang, Content> = { en, ar }
