import { format } from 'date-fns';
import React, { useState } from 'react'
import { Card, Form, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { BiDotsHorizontalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { BsChevronUp } from 'react-icons/bs';
import { HiOutlinePencil, HiReply } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import "../styles/messaging.css"

function Messaging() {
  const myData = useSelector((state) => state.profile.data);
  const posts = useSelector((state) => state.posts.post);
  return (
    <>
    <div className="d-flex justify-contend-end messaging-container fixed-bottom">
  {['top'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      
      overlay={
        <Popover id={`popover-positioned-${placement}`} className="popover-height">
          <Popover.Title as="h3">{<img src={myData.image} alt="img pic" height={30} className="mr-3"/>}{myData.username}</Popover.Title>
          <Popover.Content className="messaging-content">
            <strong className="ml-1">Keep in touch with your network</strong>
            <Form>
      <Form.Group className="mb-3 mt-2">
        
        <Form.Control type="text" placeholder="Search for messages" />
      
      </Form.Group>
      </Form>
            
        {posts.slice(0, 3).map((post) => {
          return (
            <Card body className="mt-3 mb-3">
              <div className="d-flex">
                <div>
                  {post.user && (
                    <img
                      src={post.user.image}
                      alt="profile"
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
             
             <strong className="ml-3">{post.username}</strong>
             
                </div>
              </div>
              <p className="mt-3">{post.text}</p>
              <p>Reply to <strong>{post.username}....<HiReply/></strong></p>

              
              <p>
                {post.image ? (
                  <img
                    src={post.image}
                    alt="post"
                    height={20}
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                ) : (
                  ""
                )}
              </p>

              <hr />
              
              {/* <span className="mr-5">
                <SlLike className="mr-2" /> Like
              </span> */}
              
            </Card>
              );
            })}
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