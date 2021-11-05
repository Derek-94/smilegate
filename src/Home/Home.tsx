import React, { FunctionComponent } from 'react';

import { Container, Divider, Segment, Image } from 'semantic-ui-react';
import styled from 'styled-components';

import mascot_05 from '../logo/mascot_05.jpg';

const Home: FunctionComponent = () => {
  return (
    <ContainerWrapper textAlign="justified">
      <b>Introduction</b>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <Segment>
        <Image src={mascot_05} size="small" floated="left" />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete
          scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei
          appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim
          dolorum definiebas an. Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
          nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id
          vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
        </p>
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
          adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
          utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </Segment>
    </ContainerWrapper>
  );
};

export default Home;

const ContainerWrapper = styled(Container)`
  margin: 1rem 0;
`;
