import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined >Editar Perfil</EditButton>
        
        <h1>Lucas Ferreira</h1>
        <h2>@ljnferreira</h2>

        <p>
          Developer at <a href="https://ljnferreira.com.br/">@ljnferreira</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de agosto de 1997
          </li>

        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>150 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>

    </Container>
  );
}

export default ProfilePage;