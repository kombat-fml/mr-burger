import styled from 'styled-components';
import { Banner } from './Banner';
import dbMnenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem
        itemList={dbMnenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem
        itemList={dbMnenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
  </MenuStyled>
);