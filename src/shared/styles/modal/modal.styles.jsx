import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .modal-container {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    max-width: 500px;
    padding: 1rem 2rem;
    border-radius: 4px;

    .modal-actions {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      margin-top: 1rem;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
    }
  }
`;
