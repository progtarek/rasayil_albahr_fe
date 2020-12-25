import React from 'react';
import { Button } from '../global.styles';
import { ModalContainer } from './modal.styles';

function Modal({ visible, children, primary, onConfirm, secondary, onCancel }) {
  return visible ? (
    <ModalContainer>
      <div className='modal-container'>
        {children}
        {primary || secondary ? (
          <div className='modal-actions'>
            {primary ? (
              <Button
                className='btn-primary'
                type='button'
                onClick={onConfirm}
                style={primary && secondary ? { marginRight: '10px' } : null}
              >
                {primary}
              </Button>
            ) : null}
            {secondary ? (
              <Button
                className='btn-primary-outline'
                type='button'
                onClick={onCancel}
                style={primary && secondary ? { marginLeft: '10px' } : null}
              >
                {secondary}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </ModalContainer>
  ) : null;
}

export default Modal;
