import { styled } from '@astral/ui';
import { CollapsableAlert } from '@astral/ui';

export const RadarStyled = styled('iframe')`
  width: 100%;
  height: 1300px;

  border: 0;
`;

export const LegendsContainer = styled(CollapsableAlert)`
  position: fixed;
  right: ${({ theme }) => theme.spacing(2)};
  bottom: ${({ theme }) => theme.spacing(2)};
`;
