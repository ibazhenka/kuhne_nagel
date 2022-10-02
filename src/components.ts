import styled from '@emotion/styled';

export const Main = styled.main`
  height: 100%;
  min-height: 100vh;
  padding: 64px 48px;
  background: var(--secondary-background);
`;

export const Card = styled.div`
  background: var(--primary-background);
  box-shadow: var(--card-boxshadow);
  border-radius: 4px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--secondary-text-color);
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: var(--divider-color);
`;
