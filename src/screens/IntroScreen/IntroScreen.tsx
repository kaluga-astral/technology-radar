import { Typography } from '@astral/ui';
import { Link } from 'react-router-dom';

import { TEAMS } from '../../config';

import { IntroScreenDivider, IntroScreenPage } from './styles';

export const IntroScreen = () => {
  return (
    <IntroScreenPage>
      <Typography variant="h2" gutterBottom>
        Intro
      </Typography>
      <Typography gutterBottom>
        Технологический радар - это инструмент, который отображает актуальную
        картину использования технологий и подходов в компании "Астрал-Софт".
        <br />
        Данный тех. радар показывает используемые технологии во frontend
        направлении компании “Астрал-Софт”.
      </Typography>
      <IntroScreenDivider />
      <article>
        <Typography variant="subtitle2" gutterBottom>
          Тех. радар состоит из четырех квадрантов:
        </Typography>
        <ul>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Libs
              </Typography>{' '}
              - используемые библиотеки
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Languages & Frameworks
              </Typography>{' '}
              - используемые языки программирования и фреймворки
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Infrastructure
              </Typography>{' '}
              - инструменты и технологии, используемые для формирования frontend
              инфраструктуры
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Techniques
              </Typography>{' '}
              - техники, используемые в работе
            </Typography>
          </li>
        </ul>
      </article>
      <IntroScreenDivider />
      <article>
        <Typography variant="subtitle2" gutterBottom>
          Категории на радаре показывают актуальность технологий:
        </Typography>
        <ul>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Hold
              </Typography>{' '}
              - отказываемся от технологии
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Assess
              </Typography>{' '}
              - планируем внедрять
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Trial
              </Typography>{' '}
              - в процессе внедрения
            </Typography>
          </li>
          <li>
            <Typography>
              <Typography color="info" component="span">
                Adopt
              </Typography>{' '}
              - используем и будем использовать в проде
            </Typography>
          </li>
        </ul>
      </article>
      <IntroScreenDivider />
      <article>
        <Typography variant="subtitle2" gutterBottom>
          На сайте предоставлен общий тех. радар по frontend-направлению в
          компании и отдельно тех. радары для каждой команды:
        </Typography>
        <ul>
          {Object.entries(TEAMS).map(([id, { name }]) => (
            <li>
              <Link to={`/${id}`}>
                <Typography color="info">{name}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </IntroScreenPage>
  );
};
