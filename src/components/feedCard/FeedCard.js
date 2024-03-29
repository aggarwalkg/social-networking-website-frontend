import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./FeedCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ProfileImage from "../../images/profileImage.jpeg";
import { PostAction } from "../../redux/actions/Index";
const MePostCardView = (props) => {
  const dispatch = useDispatch();
  const [deletePopup, setDeletePopup] = useState(false);
  const [postId, setPostId] = useState();
  const [like, setLike] = useState(true);
  // const profileImage =
  const { userData } = useSelector((state) => state.AuthReducer);
  const { post } = useSelector((state) => state.PostReducer);
  console.log("post", post);

  useEffect(() => {
    (async () => {
      if (userData?._id) {
        const userId = userData?._id;
        console.log(userId);
        const response = await dispatch(PostAction.getStatus(userId));
      }
    })();
  }, [userData]);

  return (
    <section>
      <ul className="update_list">
        {
          // props &&
          // props.data &&
          post?.map((data) => {
            return (
              <li>
                {console.log("SDFGHJk", data, data.userId.firstName)}
                <div className="share-update-card">
                  <div className="share-update-card__header">
                    <img
                      style={{ backgroundColor: "black" }}
                      className="feedcard "
                      src={ProfileImage}
                    ></img>
                    <div className="share-update-card__actor-info">
                      <h3 className="share-update-card__actor-text">
                        {data.userId.firstName}
                      </h3>
                    </div>
                  </div>
                  <div className="trashCan">
                    <DeleteOutlineOutlinedIcon />
                  </div>
                  <div className="caption">
                    <h6>{data.status}</h6>
                  </div>
                  <div className="imgSocial">
                    <div className="social-action-bar">
                      <button className="social-action-bar__button">
                        <FavoriteIcon />
                        Likes
                      </button>

                      <div class="line"></div>
                      <button className="social-action-bar__button">
                        <ModeCommentOutlinedIcon />
                        <span>Comment</span>{" "}
                      </button>
                      <div class="line"></div>
                      <button className="social-action-bar__button">
                        <ShareOutlinedIcon />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        }
        {post.length == 0 && <h1 className="text-center">No post to show</h1>}
      </ul>
    </section>
  );
};
export default MePostCardView;
