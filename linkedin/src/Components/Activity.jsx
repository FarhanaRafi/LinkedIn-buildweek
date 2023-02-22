import React from "react";
import { Card } from "react-bootstrap";
// import { FiEdit2 } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
// import { format } from "date-fns";
import { useSelector } from "react-redux";

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
              <div className="mb-3 d-flex  mr-auto">
                <h5>Activity</h5>
                {/* <span className="ml-auto">
                  <BsPlusLg onClick={handleShow} />
                </span> */}

                {/* <Link to="/feed/:id" className="ml-3">
                  <FiEdit2 />
                </Link> */}
              </div>
              {/* activityFromRedux.username  "Farhana Rafi"  */}
              {activityFromRedux.map((post) => {
                return (
                  <div>
                    {post.username.includes("Farhana Rafi") ? (
                      <>
                        <span>
                          <Link to={"/feed/" + post._id} className="act">
                            <div className="ml-4 mt-n2 activity">
                              {post.text}
                              <br />
                            </div>
                          </Link>
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
