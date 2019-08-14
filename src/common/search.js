import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button, Flex } from 'rebass';

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <Container pl="10px" pr="10px" py="2px;" showInput={showInput}>
      {showInput && <SearchBox type="text" placeholder="Search..." />}
      <FontAwesomeIcon
        icon={faSearch}
        size="s"
        onClick={() => setShowInput(!showInput)}
      />
    </Container>
  );
};

const Container = styled(Flex)`
  ${props =>
    props.showInput
      ? 'border: 1px solid rgba(34, 36, 38, 0.15);'
      : 'border: none;'}
  border-radius: 5px;
  height: 22px;
  align-items: center;
`;

const SearchBox = styled.input`
  border: 0;
  padding: 0;
  width: 80px;
`;

export default Search;
