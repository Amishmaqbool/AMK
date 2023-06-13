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
    grid-template-columns: repeat(1, minmax(140px, 400px));
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
            Greetings! I'm Amish, a passionate Full stack Software Engineer based in Abbottabad,
            Pakistan. I thrive on creating captivating experiences on the internet, whether it's
            through websites, mobile applications, or anything in between. My ultimate goal is to
            develop products that offer pixel-perfect designs and exceptional performance. My
            journey into the world of programming began at the age of 15 when I delved into GW
            BASIC, where I gained practical knowledge of basic programming concepts. This sparked my
            curiosity, leading me to explore the depths of programming. I pursued a Bachelor's
            degree in Computer Science, which opened doors to new learning opportunities. I
            acquainted myself with Java, object-oriented programming, databases, and various other
            technologies. With a proven track record as a professional expert, I have successfully
            designed, architected, developed, managed, and maintained reliable, scalable, and
            complex software solutions. Throughout my career, I have had the privilege of working
            with esteemed Fortune companies, such as GUCCI and Walmart, as well as startups in
            diverse domains including MarTech, PropTech, HealthTech, FinTech, and SAAS and PAAS web
            and mobile applications. I take pride in working on the cutting edge of the most
            advanced technologies. I have served as a UI/UX designer, senior Full-Stack Developer,
            and Backend Developer for startups, SMEs, and enterprise clients. I am both a team
            player and capable of working independently, delivering world-class products. Throughout
            the project lifecycle, I have excelled in managing client communication and ensuring
            client satisfaction. I am experienced in collaborating with cross-functional teams to
            achieve outstanding results. In summary, I bring a wealth of experience, technical
            expertise, and a passion for creating exceptional digital experiences. Whether you're a
            startup, SME, or enterprise client, I am ready to contribute my skills to help bring
            your vision to life. Let's create something extraordinary together!<br />

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
