import styled from 'styled-components';

export const FaqWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  min-height: auto;
  padding: 3.5rem 0;
  media screen and (min-width: 600px) {
    min-height: auto;
    padding: 4.5rem 0;
  }
`;

export const FaqList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
  max-width: calc(100% - 3rem);
  @media screen and (min-width: 600px) {
    max-width: calc(100% - 4rem);
  }
  @media screen and (min-width: 960px) {
    max-width: calc(100% - 4rem);
  }
  @media screen and (min-width: 1280px) {
    max-width: calc(83.33333333333334% - 6rem);
  }
`;
export const FaqItem = styled.li`
  padding: 0;
  text-indent: 0;
  margin: 0 0 0.5rem 0;
  h3 {
    margin: 0;
    display: flex;
    margin-bottom: 0.0625rem;
    position: relative;
    background-color: rgb(45, 45, 45);
    color: rgb(255, 255, 255);
    transition-duration: 250ms;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
    padding: 1.5rem;
    &.active {
      background-color: rgb(65, 65, 65);
    }
  }
  div {
    overflow: hidden;
    visibility: visible;
    max-height: 0px;
    padding: 0px 1.5rem;
    transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    text-align: left;
    background-color: rgb(45, 45, 45);
    color: rgb(255, 255, 255);
    &.active {
      max-height: 75rem;
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
    }
  }
`;
