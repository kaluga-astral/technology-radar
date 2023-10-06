import { Divider, styled } from '@astral/ui';

export const IntroScreenPage = styled.article`
  display: grid;
  grid-template-columns: minmax(400px, 800px);
  justify-content: center;
  text-align: left;
  padding: 80px 20px;
`;

export const IntroScreenDivider = styled(Divider)`
  margin: 20px 0;
`;
