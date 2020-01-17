module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        // imagesPath: `src/images/`,
        siteTitle: `Portfolio`,
        siteUrl: `https://kelvinhelmut.github.io/`,
        siteName: `Kelvin Helmut`,
        siteShortName: `KH`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Software developer, Full Stack Developer, Kelvin Helmut`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#01579B`, link: `` },
          { name: `experience`, title: `Experience`, color: `#3a3d98`, link: `` },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `aek6.io@gmail.com`,
        social: {
          // Usernames
          twitter: `@KelvinHelmut`,
          gitHub: `KelvinHelmut`,
          stackOverflow: `10947034/kelvin-helmut`,
          linkedIn: `in/kelvinhelmut/`,
          resumeInPdf: `/CV.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi!, I'm Kelvin Helmut`,
          h2Text: `I'm a Full Stack Developer who loves working in Backend, I have
              worked as a software developer since 2013.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I'm at the 🏋‍`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: { color: `#413f46`, opacity: `0.7` },
          shape2: { color: `#e6e5ea`, opacity: `0.7` },
          shape3: { color: `#fff`, opacity: `0.7` },
        },
        footer: `heart`,
      },
    },
  ],
}