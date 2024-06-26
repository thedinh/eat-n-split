import Navbar from "./navbar";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [ShowAddFriend, setShowAddFriend] = useState(false);
  const [NewFriend, setNewFriend] = useState(initialFriends);
  const [Image, SetImage] = useState("https://i.pravatar.cc/48");
  const [FriendName, SetFriendName] = useState("");
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
    />
    <FormSplitBill />
  </div>
};

