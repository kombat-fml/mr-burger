import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { useState } from 'react';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';


function App() {

  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
