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
    grid-template-columns: repeat(2, minmax(140px, 200px));
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
    'HTML & CSS/Scss',
    'Bootstrap',
    'JavaScript (ES6+)',
    'React',
    'React-natve',
    'Redux',
    'Gatsby',
    'Graphql',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Greetings! I'm Amish, a Frontend Software engineer based in Abbottabad, Pakistan.</p>

            <p>
              I enjoy creating things that live on the internet, whether that be websites, Mobile
              applications, or anything in between. My goal is to always build products that provide
              pixel-perfect, performant experiences.
            </p>

            <p>
              My passion for programming started early at age 15 where I started learning the
              comcepts of basic programming practially on GW BASIC after a year I got introduced
              with C language where I started learning the basic concepts of writing basic programs
              but the more was learning the more curious I get which took me in the depth of
              programming and started a bachlor of computer science degree which opened new door of
              learning and knowledge for me then got introduced to Java ,concepts of OOP,database
              and many more , with proven track record as a professional Expert experienced in Designing, Architecting & Developing , Managing , Maintaining Solid reliable, Scalable, Complex,Maintainable software solutions and teams in web / Mobile Application

From my Experience having worked with many Fortune companies, I'm a UI/UX Designer and a stellar Full-Stack Developer who's worked on every technology, tool, framework, and library in existence. Whatever your project entails, I've done it before.

I have handled Fortune enterprise-grade projects ranging from GUCCI and Walmart (which is a consortium of companies of World top E-commerce and sell out Brands) to startups from different domain like MarTech ,PropTech ,HealthTech , FinTech startups ,SAAS and PAAS web and Mobile Applications

I love Working on the Bleeding Edge of the Most Advanced Technologies
            </p>

            <p>
  
For startups, SMEs , Enterprise and Fortune clients I’ve played the role of a UI/UX designer as well as senior Full-Stack / Front-End /Back-End Developer. I’m equally a team player yet enjoy working solo as well, delivering world-class products

My profile also includes monitoring of complete project life-cycle development from Client communication until the project completion and work collaboratively in all functional areas to ensure deliveries to the client's satisfaction
            </p>

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
