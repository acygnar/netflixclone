import styled from 'styled-components';
import img from 'assets/img/netflix-background.jpeg';

export const Wrapper = styled.div`
  min-height: 744px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 40%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Content = styled.div`
  max-width: 714px;
`;
