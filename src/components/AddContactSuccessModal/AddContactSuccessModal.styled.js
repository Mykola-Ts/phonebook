import styled from 'styled-components';
import { MdOutlineDoneOutline } from 'react-icons/md';

export const SuccessIcon = styled(MdOutlineDoneOutline)`
  margin: 0 auto;
  margin-bottom: 12px;

  fill: var(--success-color);
`;

export const ModalText = styled.p`
  margin-bottom: 24px;

  text-align: center;
  font-size: 18px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 12px;
  }
`;
