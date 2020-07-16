import React from 'react';

import { 
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon, 
  ProfileIcon, 
  FeatherIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>
        
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
          <FeatherIcon/>
        </Button>

      </TopSide>
      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Lucas Ferreira</strong>
          <span>@ljnferreira</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;