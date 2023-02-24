import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsChevronUp } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import "../styles/messaging.css"

function Messaging() {
  const myData = useSelector((state) => state.profile.data);
  return (
    <>
    <div className="d-flex justify-contend-end messaging-container fixed-bottom">
  {['top'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
          <Popover.Content className="messaging-content">
            <strong>Keep in touch with your network</strong>
          </Popover.Content>
        </Popover>
      }
    >
      
      <Modal.Dialog>


  <Modal.Body className="mr-auto p-1">
  <div className="d-flex">
  <img
                  className="sidebar-images mr-3 ml-2"
                  src={myData.image}
                  alt="avatar"
                />
              
  <strong className="mr-3 messagingBase">Messaging</strong>
  <p className="ml-auto messagingBase">
  <BiDotsHorizontalRounded className="ml-2 messagingBase"/>
  <HiOutlinePencil className="ml-2 messagingBase"/>
  <BsChevronUp className="ml-2 messagingBase"/>
  </p>
  </div>
  </Modal.Body>


</Modal.Dialog>
    </OverlayTrigger>
  ))}
  </div>
</>
  )
}

export default Messaging