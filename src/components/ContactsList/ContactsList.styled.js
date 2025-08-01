import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  transform: scale(1, 1);

  display: flex;
  align-items: center;
  gap: 16px;

  border: 2px solid var(--gray-color);
  border-radius: 8px;
  padding: 16px 44px 16px 20px;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  transition: transform var(--transition-duration)
    var(--transition-timing-function);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:is(:hover, :focus) {
    transform: scale(1.01, 1.05);
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;

export const NoContactsText = styled.p`
  text-align: center;
`;
