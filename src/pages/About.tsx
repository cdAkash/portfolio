import React from 'react';
import Whoiam from '../components/about/Whoiam';
import Skillset from '../components/about/Skillset';
import Tools from '../components/about/Tools';
import Gitcalendar from '../components/about/Gitcalendar';
const About = () => {
  return (
    <div>
      <Whoiam/>
      <Skillset/>
      <Tools/>
      <Gitcalendar/>
    </div>
  );
};

export default About;