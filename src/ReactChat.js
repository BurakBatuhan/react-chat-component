import moment from "moment";
import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const imageComponent = (url, className, icon) => {
  if (url == "" || url == null || url == undefined) {
    return <img className={className} src={icon} alt="IMAGE" />;
  }
  return <img className={className} src={url} alt="IMAGE" />;
};

const getFullDateAndHour = (date) => {
  return date ? date.substr(0, 16).replace("T", " ") : null;
};

const conversationTypeDetector = (message, type) => {
  if (type === "IMAGE") return imageComponent(message);
  if (type === "TEXT" && message.length <= 39) return <span> {message}</span>;
  if (type === "TEXT" && message.length >= 40)
    return (
      <span>
        {message.slice(0, 40)} <span> more </span>
      </span>
    );
  if (type === "AUDIO")
    return (
      <audio controls>
        <source src={message} type="audio/ogg" />
      </audio>
    );

  if (type === "VIDEO")
    return (
      <video height="100%" width="100%" controls>
        <source src={message} type="video/ogg" />
      </video>
    );
};

const ReactChat = ({
  totalContents,
  disableProfileHeader,
  handleGetUserConversation,
  conversationList,
  conversationContents,
  wallpaper,
  ownerId,
  disableContextMenu,
  disableProfileDetailButton,
  rightBoxColors,
  leftBoxColors,
  conversationHeaderStyle,
  height,
  icons,
}) => {
  const [hasMore, setHasMore] = useState(false);

  const [scrollLoadMore, setScrollLoadMore] = useState({
    loadMoreTop: false,
    loadMoreBottom: false,
  }); // check from  totalCount
  const [conversationContentsData, setConversationContentsData] = useState([]);
  console.log("EVERYBODY LIES", conversationContentsData);
  const [showDetail, setShowDetail] = useState(false);
  const [closeList, setCloseList] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [openConversation, setOpenConversation] = useState("");
  const [conversationUsers, setConversationUsers] = useState([]); // One of the click conversation this will be set

  const [filteredConversationList, setFilteredConversationList] =
    useState(null);
  const [showBuble, setShowBubble] = useState("");
  const [mouseLocation, setMouseLocation] = useState({ pageX: "", pageY: "" });

  const [openModal, setOpenModal] = useState({ type: "", seenUsers: [] });

  //State update for a when the user scroll
  useEffect(() => {
    setScrollLoadMore(scrollLoadMore);
  }, [scrollLoadMore]);

  //State update for a when the user  get new messages  or current
  useEffect(() => {
    setConversationContentsData(
      conversationContentsData.concat(conversationContents)
    );
  }, [conversationContents]);

  //Lock the body scroll
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (showBuble !== "") {
        // Get original value of body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
      } else document.body.style.overflow = "scroll";
      return () => (document.body.style.overflow = "scroll");
    }
  }, [showBuble]); // Empty array ensures effect is only run on mount and unmount

  // Escape modal hook
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", escModal, false);
      return () => {
        document.removeEventListener("keydown", escModal, false);
      };
    }
  }, [showBuble]);

  /* Search User Hook  */
  useEffect(() => {
    if (searchUser !== "" && conversationList.length > 0) {
      searchFunction();
    } else {
      setFilteredConversationList(null);
    }
  }, [searchUser]);

  const searchFunction = () => {
    const filtered = conversationList.map((data) => {
      return {
        ...data,
        users: data.users.filter(({ username, _id }) => {
          return (
            username.toLowerCase().includes(searchUser.toLowerCase()) &&
            _id !== ownerId
          );
        }),
      };
    });
    setFilteredConversationList(
      filtered.filter((data) => data.users.length > 0)
    );
  };

  /* ESCAPE ON MODAL  WITH ESC */
  const escModal = useCallback((event) => {
    if (event.key === "Escape") {
      setOpenModal(false);
    }
  }, []);

  /* Scroll for reply messages  */
  const scrollReplyMessage = (id) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(`${id}`);
      if (!!section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  /* Bubble function  */
  const handleClick = (e, id) => {
    if (disableContextMenu) return true;
    if (e.type === "click") {
      setShowBubble("");
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      e.stopPropagation();
      setMouseLocation({
        pageX: `${e.clientX - 80}px`,
        pageY: `${e.clientY}px`,
      });
      setShowBubble(id);
    }
  };

  const clearStates = () => {
    setShowBubble("");
    setMouseLocation({ pageX: "", pageY: "" });
    setOpenModal({ type: "", seenUsers: [] });
  };

  /*Modal Component  */
  const seenUsersModal = () => {
    if (openModal.type === "MESSAGE_DETAIL") {
      return (
        <div onClick={() => clearStates()} className="modal-message-container">
          <div className="modal-message-wrapper">
            <div className="modal-message-detail-title">
              Seen by {openModal.seenUsers.length} users
            </div>

            {openModal.seenUsers.length >= 1 ? (
              openModal.seenUsers.map(({ _id, profileImage, username }) => {
                return (
                  <div
                    key={_id}
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {imageComponent(profileImage, "chat-avatar")}
                    <span style={{ marginLeft: "10px" }}>{username} </span>
                    <span style={{ marginLeft: "auto", color: "grey" }}>
                      {getFullDateAndHour("2022-10-18T14:23:49.086682675Z")}
                    </span>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: "20px" }}> No One Seen Yet </div>
            )}
          </div>
        </div>
      );
    }
  };

  const profileDetailComponent = () => {
    return conversationUsers.length == 0 ? (
      ""
    ) : (
      <div>
        {/* Profile detail button   */}
        <div
          onClick={() => setShowDetail(!showDetail)}
          style={{
            display: disableProfileDetailButton ? "none" : "",
          }}
          className="chat-profile-detail-button"
        >
          {showDetail ? ">" : "<"}
        </div>
        {/* Profile Detail inside  */}
        <div
          style={{
            display: showDetail ? "" : "none",
          }}
          className="chat-profile"
        >
          {conversationUsers.map(({ profileImage, username, _id, status }) => {
            return (
              <div
                key={_id}
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
                }}
              >
                {imageComponent(profileImage, "chat-avatar", icons.profileIcon)}
                <span> {username}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const chatList = () => {
    return (
      <div style={{ overflow: "scroll", height: "90%" }}>
        {(!filteredConversationList
          ? conversationList
          : filteredConversationList
        ).map(({ users, type, lastMessage, lastMessageCreatedAt, _id }) => {
          return (
            <div
              onClick={async () => {
                setConversationUsers(users);
                setOpenConversation(_id);
                setCloseList(!closeList);
                setConversationContentsData([]);
                openConversation !== _id
                  ? await handleGetUserConversation(_id)
                  : "";
              }}
              key={_id}
              style={{
                background:
                  openConversation === _id
                    ? "repeating-linear-gradient(180deg, rgb(34 96 230 / 56%), transparent 100px)"
                    : "transparent",
                color: openConversation === _id ? "white" : "black",
              }}
              className="chat-list-inside"
            >
              {users.map((data) => {
                return type == "SINGLE" && ownerId !== data._id ? (
                  <div>
                    {imageComponent(
                      data.profileImage,
                      openConversation === _id
                        ? "chat-avatar open"
                        : "chat-avatar",
                      icons.profileIcon
                    )}

                    <div className="chat-list-profile">
                      <span>{data.username}</span>

                      {conversationTypeDetector(
                        lastMessage.type === "TEXT"
                          ? lastMessage.content.slice(0, 14) + "..."
                          : lastMessage.content,
                        lastMessage.type
                      )}
                    </div>
                  </div>
                ) : (
                  "" // @Todo  What if group ?
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const search = () => {
    return (
      <div className="search-container">
        <input
          onChange={(e) => setSearchUser(e.target.value)}
          // style={{ display: closeList ? "none" : "" }}
          className="search"
          placeholder="Search Content..."
        />
      </div>
    );
  };

  // @ todo make a dynamic not a  static
  const conversationHeader = () => {
    return conversationUsers.length == 0 ? (
      ""
    ) : (
      <div
        style={{
          ...conversationHeaderStyle,
          display: disableProfileHeader ? "none" : "",
          overflow: "hidden",
        }}
        className="chat-header"
      >
        <div
          style={{ cursor: "pointer", marginRight: "10px " }}
          onClick={() => setCloseList(!closeList)}
        >
          <div className="arrow"> </div>
        </div>

        {imageComponent(
          "https://jupap-backend.s3.eu-central-1.amazonaws.com/jupap-posts/19be69f4-78f1-40a6-aef6-00162b2de369e7bc19c4-05dd-4c89-8633-9acb987c614enatal-sofia-4-1431300.jpeg",
          "chat-avatar"
        )}
        <span style={{ marginLeft: "10px" }}> Batuhan </span>
      </div>
    );
  };

  // In the users array taking parameters actually taking field
  const messageContentsUsersInformation = (wantedParam, id) => {
    const data = conversationUsers.filter((data) => data._id == id);
    return data.length == 0 ? "" : data[0][wantedParam];
  };

  const replyUsername = (reply) => {
    const user = conversationUsers.filter(({ _id }) => _id == reply?.sender);
    return user[0]?.username;
  };

  const replyMessages = (reply, sender) => {
    return (
      <div
        style={{
          display: reply ? "" : "none",
          flexDirection: reply?.type === "IMAGE" ? "" : "column-reverse",
          alignItems: reply?.type === "IMAGE" ? "" : "baseline",
        }}
        onClick={() => scrollReplyMessage(reply?._id)}
        className="conversation-reply"
      >
        <div
          className="conversation-reply-stick"
          style={{
            background:
              sender === ownerId
                ? rightBoxColors?.stickColor
                : leftBoxColors?.stickColor,
          }}
        />
        {conversationTypeDetector(reply?.content, reply?.type)}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5px",
          }}
        >
          <span
            style={{
              color:
                sender === ownerId
                  ? rightBoxColors?.textColor
                  : leftBoxColors?.textColor,
            }}
          >
            {replyUsername(reply)}
          </span>
          <span
            className="caption"
            style={{
              color:
                sender === ownerId
                  ? rightBoxColors?.captionColor
                  : leftBoxColors?.captionColor,
            }}
          >
            {reply?.caption.length > 20
              ? reply?.caption.slice(0, 20) + "..."
              : reply?.caption}
          </span>
        </div>
      </div>
    );
  };

  const handleScroll = (e) => {
    const top =
      e.target.scrollHeight + e.target.scrollTop <= e.target.clientHeight;

    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight;

    if (bottom || e.target.scrollTop === 0.5 || e.target.scrollTop === 0 || top)
      setScrollLoadMore({
        loadMoreTop: top || e.target.scrollTop === 0,
        loadMoreBottom: bottom || e.target.scrollTop === 0.5,
        pageOrder:
          top || e.target.scrollTop === 0 ? "scrollToTop" : "scrollToBottom",
      });
  };

  const loadMoreConversation = () => {
    //totalCount needed
    if (conversationContentsData.length >= 500) {
      setHasMore(false);
      return;
    }
    console.log(
      "%cSCROLL  lotuses",
      "font-size:30px;color:yellow",
      scrollLoadMore
    );

    if (scrollLoadMore.loadMoreTop || scrollLoadMore.loadMoreBottom) {
      setTimeout(() => {
        // need api  and must be came from prop @Todo
        setConversationContentsData(
          scrollLoadMore.loadMoreBottom
            ? conversationContentsData.concat([
                {
                  caption: "",
                  content: "BOM BOM BAKUDAAAAAN !! ! ! !",
                  conversation: "63774a368a348850a4de6876",
                  createdAt: "2022-11-18T11:11:26.172Z",
                  info: null,
                  isCleared: [],
                  isDeleted: [],
                  isSeen: ["63774a0ea8adb0ad8120a59a"],
                  reply: null,
                  sender: "63772cc717255af340a1db29",
                  type: "TEXT",
                  _id: Math.random() * 1000,
                },
              ])
            : [
                {
                  caption: "",
                  content: " BATUUU !! ! ! !",
                  conversation: "63774a368a348850a4de6876",
                  createdAt: "2022-11-18T11:11:26.172Z",
                  info: null,
                  isCleared: [],
                  isDeleted: [],
                  isSeen: ["63774a0ea8adb0ad8120a59a"],
                  reply: null,
                  sender: "63772cc717255af340a1db29",
                  type: "TEXT",
                  _id: Math.random() * 1000,
                },
              ].concat(conversationContentsData)
        );
      }, 2500);
    }
  };

  const messageContents = () => {
    // const scroll = useScrollHandler(999);
    // console.log("asdsa", scroll);
    return (
      <div
        style={{
          background: wallpaper ? `url(${wallpaper})` : "white",
          borderRadius: "0px 11px 0px 0px",
        }}
        className="conversation"
      >
        {/* Conversation Header  */}
        {conversationHeader()}

        {/* Conversations */}
        <div
          onScroll={(e) => handleScroll(e)}
          id="scrollableDiv"
          style={{
            overflow: showBuble ? "hidden" : "scroll",
            height: "90%",
            display: "flex",
            flexDirection: scrollLoadMore.loadMoreBottom // problem here !!!!!!!!
              ? "column"
              : "column-reverse",
          }}
        >
          {/* */}
          {conversationUsers.length == 0 ? (
            <div className="start-conversation-container">
              <div
                onClick={async () => {
                  if (conversationList.length !== 0) {
                    setConversationUsers(conversationList[0]?.users);
                    setOpenConversation(conversationList[0]?._id);
                    await handleGetUserConversation(conversationList[0]?._id);
                  }
                }}
                className="start-conversation-items"
              >
                <span>Start</span>
                <span> Conversation</span>
              </div>
            </div>
          ) : !!conversationContentsData ? (
            <InfiniteScroll
              next={() => loadMoreConversation()}
              dataLength={conversationContentsData.length}
              hasMore={true} // when the totalcount equal to contents lenght become false
              scrollableTarget="scrollableDiv"
              // initialScrollY={99999}
              inverse={scrollLoadMore.loadMoreBottom ? false : true}
              loader={
                <p
                  className="chat-spinner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              }
              endMessage={
                <div
                  style={{
                    overflowY: "scroll",
                    position: "absolute",
                    zIndex: 0,
                    top: "10px",
                    left: "40%",
                  }}
                >
                  <h4>You have seen all messages</h4>
                </div>
              }
            >
              {conversationContentsData.map(
                ({
                  _id,
                  content,
                  type,
                  caption,
                  sender,
                  reply,
                  isSeen,
                  createdAt,
                }) => {
                  return (
                    <div
                      onContextMenu={(e) => handleClick(e, _id)}
                      onClick={(e) => handleClick(e)}
                      style={{
                        padding: "24px",
                        background: showBuble === _id ? "#8080800f" : "",
                      }}
                      className={
                        sender === ownerId
                          ? "conversation-right"
                          : "conversation-left"
                      }
                      id={_id}
                      key={_id}
                    >
                      {/* Buble Menu */}
                      <div
                        className="bubble-menu-wrapper"
                        style={{
                          top: mouseLocation.pageY,
                          left: mouseLocation.pageX,

                          display: showBuble === _id ? "block" : "none",
                        }}
                      >
                        <div
                          onClick={() =>
                            setOpenModal({
                              type: "MESSAGE_DETAIL",
                              seenUsers: conversationUsers.filter((user) =>
                                isSeen.includes(user._id)
                              ),
                            })
                          }
                          className="bubble-menu"
                        >
                          {imageComponent(
                            "",
                            "bubble-menu-icon",
                            icons.informationIcon
                          )}
                          Information
                        </div>
                      </div>

                      {/* Conversation */}
                      {imageComponent(
                        messageContentsUsersInformation("profileImage", sender),
                        "chat-avatar",
                        icons.profileIcon
                      )}
                      <div className="conversation-container">
                        <span
                          style={{
                            marginLeft: sender === ownerId ? "auto" : "",

                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection:
                                sender === ownerId ? "row-reverse" : "row",
                            }}
                          >
                            {/* USERNAME */}
                            {messageContentsUsersInformation(
                              "username",
                              sender
                            )}

                            {/* SENDER TIME  */}
                            <span
                              style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                              }}
                            >
                              {moment(new Date(createdAt)).fromNow()}
                            </span>
                          </div>

                          {/* {imageComponent(singleTickIcon, "bubble-menu-icon")} */}
                        </span>

                        <div
                          style={{
                            backgroundColor:
                              sender === ownerId
                                ? rightBoxColors?.boxColor
                                : leftBoxColors?.boxColor,
                          }}
                          className="conversation-box"
                        >
                          {/*Reply */}
                          {replyMessages(reply, sender)}

                          {/*Message */}
                          <div
                            style={{
                              color:
                                sender === ownerId
                                  ? rightBoxColors?.textColor
                                  : leftBoxColors?.textColor,
                              padding:
                                sender === ownerId && reply?.type === "IMAGE"
                                  ? "0px 0px 0px 2px"
                                  : "",
                            }}
                          >
                            {conversationTypeDetector(content, type)}
                          </div>

                          {/*Caption */}
                          <span
                            style={{
                              color:
                                sender === ownerId
                                  ? rightBoxColors?.textColor
                                  : leftBoxColors?.textColor,
                            }}
                          >
                            {caption}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </InfiniteScroll>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div style={{ height: height }} className="chat">
        <div className="chat-container">
          {/*Profile Detail */}

          {profileDetailComponent()}
          {/*Conversation */}

          {messageContents()}
        </div>

        <div
          style={{ width: closeList ? "71px" : "300px" }}
          className={`chat-list-container  ${closeList ? "closeList" : ""} `}
        >
          {/*Search */}
          <div>{search()}</div>

          {/*Conversation List */}
          {chatList()}
        </div>
        {/* Seen by users modal */}
        {seenUsersModal()}
      </div>
    </React.Fragment>
  );
};

ReactChat.PropTypes = {
  ownerId: PropTypes.string.isRequired,
  conversationContents: PropTypes.array.isRequired,
  conversationList: PropTypes.array.isRequired,
  handleGetUserConversation: PropTypes.func.isRequired,
  totalContents: PropTypes.string.isRequired,
  totalConversationList: PropTypes.string.isRequired,
  wallpaper: PropTypes.string,
  disableContextMenu: PropTypes.bool,
  disableProfileDetailButton: PropTypes.bool,
  disableProfileHeader: PropTypes.bool,

  conversationHeaderStyle: PropTypes.exact({
    background: PropTypes.string,
    seenIcon: PropTypes.string,
    informationIcon: PropTypes.string,
  }),
  icons: PropTypes.exact({
    profileIcon: PropTypes.string,
    seenIcon: PropTypes.string,
    informationIcon: PropTypes.string,
  }),
  height: PropTypes.string,
  rightBoxColors: PropTypes.exact({
    boxColor: PropTypes.string,
    stickColor: PropTypes.string,
    textColor: PropTypes.string,
    captionColor: PropTypes.string,
  }),

  leftBoxColors: PropTypes.exact({
    boxColor: PropTypes.string,
    stickColor: PropTypes.string,
    textColor: PropTypes.string,
    captionColor: PropTypes.string,
  }),
};

export default ReactChat;
