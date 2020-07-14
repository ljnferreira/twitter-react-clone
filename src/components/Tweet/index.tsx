import React from 'react';

import { 
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon, 
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Lucas Ferreira</strong>
            <span>@ljnferreira</span>
            <Dot />
            <time>25 de ago</time>
          </Header>
          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              325
            </Status>
            <Status>
              <LikeIcon />
              600
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;