import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }

`;

export const SearchWrapper = styled.div`
  padding: 8px 30px 10px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);
  max-height: 57px;

`;
export const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 21px;
  background: var(--search);
  
  &::placeholder{
    color: var(--gray);
  }

  ~ svg {
    position:relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus{
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

`;
export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill:  var(--gray);
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 65px 30px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;

export const ShowMore = styled.div`
  align-items: left;
  
  > a {
    text-decoration: none;
    color: var(--twitter);
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0;
  }
`;