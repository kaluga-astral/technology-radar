import { Description } from '@astral/ui';

export const Legends = () => {
  return (
    <article>
      <Description>
        <Description.Name color="info">Hold</Description.Name>
        <Description.Value>Отказываемся от технологии</Description.Value>
      </Description>
      <Description>
        <Description.Name color="info">Assess</Description.Name>
        <Description.Value>Планируем внедрять</Description.Value>
      </Description>
      <Description>
        <Description.Name color="info">Trial</Description.Name>
        <Description.Value>В процессе внедрения</Description.Value>
      </Description>
      <Description>
        <Description.Name color="info">Adopt</Description.Name>
        <Description.Value>
          Используем и будем использовать в проде
        </Description.Value>
      </Description>
    </article>
  );
};
