import React from 'react';
import Projects from '../common/projects/Projects';
import Technology from '../common/Tech';
import { PageContainer } from '../pages.styled';

function Portfolio() {
  return (
    <PageContainer>
        <Projects/>
        <Technology/>
    </PageContainer>
  )
}

export default Portfolio;