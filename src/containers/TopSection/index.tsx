import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopSectionContainer = styled.div`
  ${tw`relative flex flex-col w-full h-screen`};
`;

export function TopSection() {
  return <TopSectionContainer>
    <h1>Top Section</h1>
  </TopSectionContainer>
};