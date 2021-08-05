import styled from 'styled-components';

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
  margin-bottom: 20px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(event) {
    if (event.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        {openItem.name}
      </Modal>
    </Overlay>
  );
}