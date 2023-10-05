import { Description as DescriptionBlock, Typography } from '@astral/ui';

export const Description = () => {
  return (
    <article>
      <Typography align="left" gutterBottom>
        Тех. радар преднзначен для ...
      </Typography>
      <Typography align="left" variant="h2" gutterBottom>
        Пояснения
      </Typography>
      <DescriptionBlock>
        <DescriptionBlock.Name color="info">Hold</DescriptionBlock.Name>
        <DescriptionBlock.Value>
          Отказываемся от технологии
        </DescriptionBlock.Value>
      </DescriptionBlock>
      <DescriptionBlock>
        <DescriptionBlock.Name color="info">Assess</DescriptionBlock.Name>
        <DescriptionBlock.Value>Планируем внедрять</DescriptionBlock.Value>
      </DescriptionBlock>
      <DescriptionBlock>
        <DescriptionBlock.Name color="info">Trial</DescriptionBlock.Name>
        <DescriptionBlock.Value>В процессе внедрения</DescriptionBlock.Value>
      </DescriptionBlock>
      <DescriptionBlock>
        <DescriptionBlock.Name color="info">Adopt</DescriptionBlock.Name>
        <DescriptionBlock.Value>
          Используем и будем использовать в проде
        </DescriptionBlock.Value>
      </DescriptionBlock>
    </article>
  );
};
