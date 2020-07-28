import React from 'react';
import StickBox from 'react-sticky-box';


import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
  ShowMore
} from './styles';

import List from '../List';
import FollowSugestion from '../FollowSuggestion';
import News from "../News";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="Fred Barbosa"
                nickname="@freddybarbosa"
              />,
              <FollowSugestion
                name="Arthur Assunção"
                nickname="@arthurassunção" 
              />,
              <FollowSugestion
                name="Mateus Ferreira"
                nickname="@mtsferreirasilva" 
              />, 
              <ShowMore>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Mostrar mais
                </a>
              </ShowMore>
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News 
                place="Brasil"
                title="Vacina de Oxford obtem sucesso..."
              />,
              <News
                place="Mundo"
                title="Eleições presidenciais americanas
                estão em fase de definição de candidatos"/>,
              <News 
                place="Brasil"
                title="Médico é o profissional que o brasileiro mais confia"
              />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="Fred Barbosa"
                nickname="@freddybarbosa"
              />,
              <FollowSugestion
                name="Arthur Assunção"
                nickname="@arthurassunção" 
              />,
              <FollowSugestion
                name="Mateus Ferreira"
                nickname="@mtsferreirasilva" 
              />,
              <ShowMore>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Mostrar mais
                </a>
              </ShowMore>
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News 
                place="Brasil"
                title="Vacina de Oxford obtem sucesso..."
              />,
              <News
                place="Mundo"
                title="Eleições presidenciais americanas
                estão em fase de definição dos candidatos"/>,
              <News 
                place="Brasil"
                title="Médico é o profissional que o brasileiro mais confia"
              />
            ]}
          />
        </Body>
      </StickBox>
      
    </Container>
  );
}

export default SideBar;