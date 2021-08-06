import styled from 'styled-components';
import { ButtonCheckout } from '../GlobalComponents/ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
  display: flex;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  margin: auto;
`;

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
`;

const Content = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const closeModal = (event) => {
    if (event.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem
  };


  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{openItem.price}</div>
          </HeaderContent>
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
}