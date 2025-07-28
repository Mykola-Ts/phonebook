import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;

  margin-bottom: 28px;

  & > div {
    width: calc((100% - 24px) / 2);
    height: 36px;
  }

  @media screen and (min-width: 768px) {
    & > div {
      width: auto;
      min-width: 160px;
    }
  }
`;
