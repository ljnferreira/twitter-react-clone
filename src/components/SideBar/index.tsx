import React from 'react';
import StickBox from 'react-sticky-box';


import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
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
              /> ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News 
                place="Brasil"
                title="Vacina de Oxford obtem sucesso..."
              />,
              <News
                place="Mundo"
                title="Eleições presidenciais americanas..."/>,
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
              /> ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News 
                place="Brasil"
                title="Vacina de Oxford obtem sucesso..."
              />,
              <News
                place="Mundo"
                title="Eleições presidenciais americanas..."/>,
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