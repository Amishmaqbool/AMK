import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(140px, 500px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'HTML5 | CSS3 | Less | SASS | SCSS',
    'Bootstrap | Tailwind CSS | Material UI | Ant Design | React-Suite | Quasar-UI',
    'JavaScript (ES6+) | JavaScript | TypeScript',
    'React JS | Vue JS | Svelte JS | PWA | Next JS | Nuxt JS | Gatsby JS | Blitz JS',
    'React Native JS | RN-paper | RN-tailwind | Expo',
    'Redux | Redux thunk | Redux toolkit| React Query',
    'GraphQL | GraphQL Apollo Client',
    'Contentful | Strapi | Sanity | Prismic',
    'ReactCharts | ReCharts | Charts | Visualizations | Animation | Framer motion',
    ' Node JS | Express.js | Firebase | Firestore | MongoDB | Mongoose | Postgres | Prisma',
    'AWS | Amplify | S3 | Route53 | Git | Github | Bitbucket etc.',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            Greetings! I'm Amish, a Frontend Software engineer based in Abbottabad, Pakistan. I have
            a strong passion for crafting exceptional experiences on the internet, whether it's
            through websites, mobile applications, or anything in between. My focus is always on
            building pixel-perfect and high-performance products that leave a lasting impression. My
            programming journey started at a young age of 15, exploring basic programming concepts
            using GW BASIC. This ignited my curiosity and led me to dive deeper into languages like
            C. Pursuing a Bachelor's degree in Computer Science further expanded my knowledge,
            introducing me to Java, object-oriented programming, and databases. With a proven track
            record, I have successfully designed, developed, and managed solid, reliable, and
            scalable software solutions for esteemed Fortune companies. As a UI/UX Designer and a
            stellar Full-Stack Developer, I have a wide-ranging experience working with various
            technologies, tools, frameworks, and libraries. From renowned brands like GUCCI and
            Walmart to startups in domains such as MarTech, PropTech, HealthTech, and FinTech, I
            have handled diverse enterprise-grade projects. I thrive on working with cutting-edge
            technologies and staying at the forefront of innovation. Whether working collaboratively
            as a team player or independently, my goal is to deliver world-class products that
            exceed client expectations. I am well-versed in managing the complete project lifecycle,
            ensuring seamless communication and client satisfaction. Let's collaborate to create
            remarkable digital solutions together, regardless of whether you're a startup, SME,
            enterprise, or Fortune client
            <br />
            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
