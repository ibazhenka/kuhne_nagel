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

export const H1 = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--secondary-text-color);
`;
