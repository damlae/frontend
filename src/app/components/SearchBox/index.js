import React from 'react';
import styled from 'styled-components'

export default ({placeholder, handleChange}) => (
  <Input
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

const Input = styled.input`
  margin: 5px 0px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`