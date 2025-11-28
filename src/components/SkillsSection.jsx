import React from 'react';
import FlowingMenu from './FlowingMenu';
import './FlowingMenu.css'; 

function SkillsSection() {
  const items = [
    {
      text: 'Frontend Development',
      subItems: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      text: 'Backend Development',
      subItems: ['JavaScript', 'Python', 'Java']
    },
    {
      text: 'Programming Languages',
      subItems: ['Python', 'Java', 'C', 'C++']
    },
    {
      text: 'Tools',
      subItems: ['VS Code', 'Git', 'GitHub', 'Figma']
    }
  ];

  return (
    <div style={{ height: '80vh' }}>
      <FlowingMenu items={items} />
    </div>
  );
}

export default SkillsSection;
