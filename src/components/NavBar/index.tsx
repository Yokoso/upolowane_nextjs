import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { Link } from 'react-scroll';
import { deviceSize } from '../responsive';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

const NavBarContainer = styled.div`
  ${tw`flex items-center self-center h-20 pt-4 pl-6 pr-6 border-b-2 border-gray-200 border-opacity-50 `};
`;

const NavBarItems = tw.ul`
  flex
  list-none
  w-full
  h-auto
  justify-center
  items-center
  lg:h-full
  lg:ml-20
`;

const NavBarItem = tw.li`
  flex  
  justify-center
  items-center
  min-h-full
  text-white
  cursor-pointer
  font-medium
  text-lg
  transition-colors
  [transition-duration: 300ms]
  hover:text-gray-300
  box-content
  mb-2
  lg:mr-8
  lg:text-base
  lg:mb-0
`;

export function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const navBarItems = <NavBarItems>
    <NavBarItem>
      <Link to="Home">Home</Link>
    </NavBarItem>
    <NavBarItem>
      <Link to="About">About</Link>
    </NavBarItem>
    <NavBarItem>
      <Link to="Contact">Contact</Link>
    </NavBarItem>
  </NavBarItems>

  return (
    <NavBarContainer>
      <Logo />
      {isMobile && <Menu right >{ navBarItems }</Menu>}
      {!isMobile && navBarItems}
    </NavBarContainer>
  )
}