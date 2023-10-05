import { PageLayout } from '@astral/ui';

import { Description } from './Description';

export const IntroScreen = () => {
  return (
    <PageLayout
      header={{ title: 'Getting started' }}
      content={{ children: <Description />, isPaddingDisabled: false }}
    />
  );
};
