import Navbar from "./navbar";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    FriendName: "Clark",
    Image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    FriendName: "Sarah",
    Image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    FriendName: "Anthony",
    Image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [ShowAddFriend, setShowAddFriend] = useState(false);
  const [SelectedFriend, SetSelectedFriend] = useState(null);
  const [NewFriend, setNewFriend] = useState(initialFriends);
  const [Image, SetImage] = useState("https://i.pravatar.cc/48");
  const [FriendName, SetFriendName] = useState("");
  function handleSubmit(value) {
    console.log(value);
    setNewFriend(Friends => Friends.map(friend => friend.id === SelectedFriend.id ?
      { ...friend, balance: friend.balance + value } : friend))
    SetSelectedFriend(null);
  }
  return <div className="app">
    <Navbar
      ShowAddFriend={ShowAddFriend}
      OnHandleShowAddFriend={setShowAddFriend}
      NewFriend={NewFriend}
      onHandleNewFriend={setNewFriend}
      Image={Image}
      FriendName={FriendName}
      OnHandleFriendName={SetFriendName}
      OnHandleSetImage={SetImage}
      SelectedFriend={SelectedFriend}
      OnHandleSelectedFriend={SetSelectedFriend}
    />
    {SelectedFriend && <FormSplitBill
      SelectedFriend={SelectedFriend}
      onhandleSubmit={handleSubmit}
    />}
  </div>

};

