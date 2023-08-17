import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 714px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media (min-width: 500px) {
    flex-direction: row;
  }
  input {
    @media (min-width: 500px) {
      width: calc(100% - 231px);
    }
    height: 64px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    color: #7d7d7d;
    font-size: 20px;
    font-weight: 400;
    padding-left: 16px;
    border: none;
    transform: translateY(-1px);
  }
  button {
    @media (min-width: 500px) {
      width: 231px;
    }
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.2px;
    height: 64px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
      background: rgb(193, 17, 25);
    }
  }
`;
