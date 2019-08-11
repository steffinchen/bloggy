import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu secondary borderless>
      <StyledItem
        href="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        href="/blog"
        name="blog"
        active={activeItem === 'blog'}
        onClick={handleItemClick}
      />
      <Menu.Item
        href="/patterns"
        name="patterns"
        active={activeItem === 'patterns'}
        onClick={handleItemClick}
      />
      <Menu.Item
        href="/about"
        name="about"
        active={activeItem === 'about'}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Item name="instagram" href="https://www.instagram.com/">
        <Icon name="instagram" size="large" />
      </Menu.Item>
      <Menu.Item name="facebook" href="https://www.facebook.com/">
        <Icon name="facebook" size="large" />
      </Menu.Item>
      <Menu.Item name="ravelry" href="https://www.raverly.com/">
        <Icon name="ravelry" size="large" />
      </Menu.Item>
      <Menu.Item name="etsy" href="https://www.etsy.com/">
        <Icon name="etsy" size="large" />
      </Menu.Item>
    </Menu>
  );
};

const StyledItem = styled(Menu.Item)`
  &&& :hover {
    color: red;
  }
`;

// const Container = styled.div`
//   padding-bottom: 20px;
//   * + * {
//     padding-left: 10px;
//   }

//   a {
//     padding: 20px;
//     text-decoration: none;
//     color: black;
//   }

//   a:hover {
//     background-color: lightgrey;
//   }
// `;

export default NavBar;
