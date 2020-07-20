import React from 'react';

import { Container } from './styles';

interface Props {
  place: string;
  title: string;
}

const News: React.FC<Props> = ({
  place, title
}) => {
  return (
    <Container>
      <span>Assuntos do momento no {place}</span>
      <strong>
        {title}
      </strong>
    </Container>
  );
}

export default News;