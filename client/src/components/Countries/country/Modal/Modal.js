import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Cross } from "@styled-icons/entypo/Cross";
const Background = styled.div`
  width: 100vw;
  height: 1128px;
  background-color: #1c1d1fcc;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 15px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h1 {
    text-transform: capitalize;
    padding-top: 25px;
  }
  span {
    padding: 5px;
  }
`;

const CloseModalButton = styled(Cross)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ data, showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && data ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>{data.name}</h1>
              <span>
                <b>Difficulty:</b> {data.difficulty}
              </span>
              <span>
                <b>Duration:</b> {data.duration}
              </span>
              <span>
                <b>Season:</b> {data.season}
              </span>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
