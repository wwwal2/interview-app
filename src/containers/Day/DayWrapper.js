import styled from 'styled-components';

export default styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  background-color: ${({ current }) => current ? 'aqua' : 'gray'};
`;
