import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  background-color: ${({ current }) => current ? 'aqua' : 'gray'};
`;
