# @React-chat-comp


react-chat-admin, easy integration and  beatiful custom component

- Enter the required props 
- You can custom the message box 
- You can see which users seen for each message  
- ✨Magic ✨


## Installion

 ` npm i react-chat-comp  ` or ` yarn i react-chat-comp`

## Css Initial 
` import 'react-chat-comp/chat.css' `
## Required Props 

| Name | Type  | Description |Example 
| ---- | --- | -------- | ----------- |
| ownerId | String  | The owner alwasy right on conversation | "634eb74f9141ae"
| conversationList |Array | Conversation List,  you can pick conversation from list | Please look at the down for a details 
| conversationContents | Array | In the conversation messages | Please look at the down for a details 
| totalContents | String |Total comments count  | "50"
| totalConversationList |  String   |Total conversation list count | "50"
| handleGetUserConversation | Function | when you click user from `converastionList` you need to get request for  `conversationContents`  | (id) => getConversationContents(id)

## Optional Props 

| Name | Type  | Description |Example 
| ---- | --- | -------- | ----------- |
| wallpaper | String  | In the chat conversation background image , you can use local file or link  |  "test.jpg"
| height | String  | Set your chat height the default was 400px   |  "200px"
| disableContextMenu |Boolean | Right-clicking on the message shows users who saw the message  |  false or true  
| disableProfileDetailButton | Boolean | You can see the users's information  | false or true 
| disableProfileHeader |  Boolean   |You can see the users's information on chat header | false or true 
|conversationHeaderStyle | Object | You can customize header with Inline Styling | {background: "red",borderRadius: "20px"}
|icons | Object | You can customize icons Note: You can use local images or link  | {profileIcon: "test.jpg",seenIcon: "", informationIcon: InfoIcon}
|rightBoxColors | Object | You can customize right box colors | {boxColor:"#09C4FF",stickColor: "white",textColor: "white",captionColor: "grey",}
|leftBoxColors | Object | You can customize right box colors | {boxColor:"#09C4FF",stickColor: "white",textColor: "white",captionColor: "grey",}
## conversationList - Example

    _id: "6335aefed6fecd3d0b398285",
    users: [
      {
        _id: "6375f174918fc73f14844eb9",
        username: "Jonathan", 
        status: "online",
        profileImage: "https://test.jpg",
      },
      {
        _id: "631af63eb6ddad746391ba26",
        username: "Sam",
        status: "offline",
        profileImage: "https://test.jpg",
        oldMember: false,
      },
    ],
    type: "SINGLE",
    lastMessage: {
      _id: "633aeaf7b15f97144ae7ddab",
      conversation: "6335aefed6fecd3d0b398285",
      type: "TEXT", // Other types "IMAGE", "VIDEO", "AUDIO"
      content: "On the conversation list shown last message",
      caption: "",
      createdAt: "2022-10-03T14:00:23.827Z",
      isDeleted: [],
      seen: false,
      sender: "631af63eb6ddad746391ba26",
      info: null,
    },
    lastMessageCreatedAt: "2022-10-03T14:00:23Z",
    unSeenCount: 0,
## conversationContents - Example 
> Note:  users information coming from conversationList

    _id: "634eb74f96d47e3632940a7e",
    conversation: "633d84fdd6fecd3d0b39843d",
    sender: "633bf525da193fe0f16db864",
    content: "Test Message",
    type: "TEXT",
    caption: "", 
    createdAt: "2022-10-18T14:25:19.967744681Z",
    isDeleted: false,
    isSeen: [],
    reply: {
      _id: "6343baf44129f4aa2386a857",
      content:"https://test.jpg",
      caption: "Test Caption message",
      type: "IMAGE",
      sender: "632b5ddf8720eddc024edd49",
    },



## License

MIT 