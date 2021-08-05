import styled from 'styled-components';
import { Banner } from './Banner';
import dbMnenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
  background-color: #ccc;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => {
  return (
    <MenuStyled>
      <Banner />
      <SectionMenu>
        <h2>Бургеры</h2>
        <ListItem itemList={dbMnenu.burger}/>
      </SectionMenu>
      <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem itemList={dbMnenu.other}/>
      </SectionMenu>
    </MenuStyled>
  );
}