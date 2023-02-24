import React from "react";
import { Card, Button } from "react-bootstrap";
// import { FiEdit2 } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
// import { format } from "date-fns";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import NewsFeed from "./NewsFeed";

const Activity = () => {
  const activityFromRedux = useSelector((state) => state.posts.post);
  const params = useParams();
  console.log(params, "sdfghjcvbn");
  return (
    <>
      <div>
        <Card className="mt-3 mb-4">
          <Card.Body style={{ height: "100%" }}>
            <Card.Text>
              <div className=" d-flex  mr-auto">
                <h5>Activity</h5>
                <Link
                  to="/feed" className="btn btn-outline-primary ml-auto rounded-pill"
                  variant="outline-primary"
                >
                  Start a Post
                </Link>
              </div>
              <span className="text-primary mt-n4 mb-5">100 Connections</span>
              <br />
              <span className="text-muted">Farhana posted 2 days ago</span>
              {/* activityFromRedux.username  "Farhana Rafi"  */}
              {activityFromRedux.map((post) => {
                return (
                  <div>
                    {post.username.includes("Farhana Rafi") ? (
                      <>
                        <span>
                          <div>
                            <Link
                              to={"/feed/" + post._id}
                              className="act d-flex"
                            >
                             {post.image && <img
                                src={post.image}
                                alt="post"
                                height={100}
                                width={100}
                                className="mt-3"
                              />}
                              <div className="ml-4 mt-3 activity">
                                {post.text}
                                <br />
                                <span className="text-muted">
                                  {format(
                                    new Date(post.createdAt),
                                    "dd LLL, yyyy"
                                  )}
                                </span>
                              </div>
                            </Link>
                          </div>
                        </span>
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Activity;
