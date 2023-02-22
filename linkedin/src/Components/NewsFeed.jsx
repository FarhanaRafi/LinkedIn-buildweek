import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPostAsync } from "../Redux/Actions";
import { BsPlusLg } from "react-icons/bs";

const NewsFeed = () => {
  const posts = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <Card body className="mt-3">
          Name
        </Card>

        {posts.map((post) => {
          return (
            <Card body className="mt-3">
              {/* <img src={post.user.image} alt="img" /> */}
              <div className="d-flex ">
                <p>
                  <strong>{post.username}</strong>
                </p>
                <span className="ml-auto text-primary ">
                  {" "}
                  <BsPlusLg />
                  <span className="ml-2">Follow</span>
                </span>
              </div>
              <hr />

              {post.text}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NewsFeed;
