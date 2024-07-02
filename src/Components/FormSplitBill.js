import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ SelectedFriend, onhandleSubmit }) {
    const [Bill, SetBill] = useState("");
    const [PayByUser, SetPayByUser] = useState("");
    const paidByFriend = Bill ? Bill - PayByUser : "";
    const [WhoIsPaying, SetWhoIsPaying] = useState("user");
    function handleSplitBill(e) {
        e.preventDefault();
        if (!Bill && !PayByUser) return;
        onhandleSubmit(WhoIsPaying === "user" ? paidByFriend : -PayByUser);

    }
    return (
        <form className="form-split-bill" onSubmit={handleSplitBill}>
            <h2>slipt a bill with {SelectedFriend.FriendName}</h2>
            <label>🧑‍🤝‍🧑Bill value</label>
            <input type="text" value={Bill} onChange={(e) => SetBill(Number(e.target.value))} />
            <label>🖼️Your expense</label>
            <input type="text" value={PayByUser} onChange={(e) => SetPayByUser(Number(e.target.value) > Bill ? PayByUser : Number(e.target.value))} />
            <label>🧑‍🤝‍🧑{SelectedFriend.FriendName}'s expense</label>
            <input type="text" value={paidByFriend} disabled />
            <label>🖼️Your expense</label>
            <select
                value={WhoIsPaying} onChange={(e) => SetWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{SelectedFriend.FriendName}</option>
            </select>
            <Button>Split</Button>
        </form>
    )
}

