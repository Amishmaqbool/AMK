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
              and many more and the journey was going great but then I found{' '}
              <a href="https://www.linkedin.com/in/arslanqamarkhan/">Arslan Khan</a> as a mentor in
              year 2018 and thats what I was missing.A mentor,and then he showed me the door of
              JavaScript programming language and that was the time when my brain sartrd sending
              push notification which say thats was the path I was looking forward from the start of
              my journey,took advantage of it learned frontend techonoligies like Html css React
              etc and from him and got hired as a front end developer at <a>i-intellect.inc</a>
            </p>

            <p>
              Shortly after graduating from{' '}
              <a href="https://www.comsats.edu.pk">Comsats University</a>, I joined the engineering
              team at <a href="https://eltallerjs.com">eltallerjs</a> where I work on a wide variety
              of interesting and meaningful projects.With a wounderful Team Driven by <a href="https://www.linkedin.com/in/ivanmtzaguero/">Iván Martínez</a>
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
