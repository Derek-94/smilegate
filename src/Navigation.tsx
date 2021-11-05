import React from 'react';
import { Link } from 'react-router-dom';

import Modals from './utils/Modals';
import styled from 'styled-components';

import { Icon, Image, Divider } from 'semantic-ui-react';

import stove_logo from './logo/stove_logo.png';
import mascot_05 from './logo/mascot_05.jpg';
import 'semantic-ui-css/semantic.min.css';

const Navigation = () => {
  return (
    <>
      <NavigationWrapper>
        <LogoBackground />
        <SmilegateLogo src={stove_logo} alt="logo" />
        <ProfileWrapper>
          <Modals
            children={<ProfileImg size="mini" src={mascot_05} circular />}
            content="사용자 정보"
            modalHeader="프로필을 조회합니다!"
          />
          <ArticleWriteLink to="/write">
            <PencilIcon size="big" name="pencil square" />
          </ArticleWriteLink>
          <Modals
            children={<SettingIcon size="big" name="settings" />}
            content="환경 설정"
            modalHeader="환경 설정을 수정합니다!"
          />
        </ProfileWrapper>
      </NavigationWrapper>
      <Divider />
    </>
  );
};

export default Navigation;

const NavigationWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 96px;
`;

const LogoBackground = styled.div`
  width: 97px;
  height: 96px;
  background: url(https://www.smilegate.com/ko/images/common/companyPatten.png);
  position: absolute;
  top: 5px;
  z-index: 5;
`;

const SmilegateLogo = styled.img`
  width: auto;
  height: auto;
  margin: 25px 0 0 30px;
`;

const ProfileWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  height: auto;
  align-items: center;
`;

const ProfileImg = styled(Image)`
  &: hover {
    cursor: pointer;
  }
`;

const ArticleWriteLink = styled(Link)`
  color: black;
  &: hover {
    color: black;
  }
`;

const PencilIcon = styled(Icon)`
  &: hover {
    cursor: pointer;
  }
`;

const SettingIcon = styled(Icon)`
  &: hover {
    cursor: pointer;
  }
`;
