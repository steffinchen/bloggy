import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button } from 'rebass';

const Search = () => {
  return (
    <Container>
      <SearchBox type="text" placeholder="Search..." />
      <StyledButton primary py="5px" px="10px">
        <FontAwesomeIcon icon={faSearch} size="xs" />
      </StyledButton>
    </Container>
  );
};

const StyledButton = styled(Button)`
  border: 0;
  border-radius: 0;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 5px;
`;

const SearchBox = styled.input`
  border: 0;
  padding: 0;
  width: 80px;
`;

export default Search;
