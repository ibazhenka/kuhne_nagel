import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 100%;
  min-height: 100vh;
  padding: 64px 48px;
  background: var(--secondary-background);
  gap: 16px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background: var(--primary-background);
  border: 1px solid var(--primary-background);
  box-shadow: var(--card-boxshadow);
  border-radius: 4px;
`;

export const Subtitle = styled.p`
  min-width: 100px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--secondary-text-color);
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: var(--divider-color);
`;
