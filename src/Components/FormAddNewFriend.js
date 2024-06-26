import Button from "./Button";

export default function FormAddNewFriend({
    onHandleNewFriend,
    Image,
    OnHandleSetImage,
    FriendName,
    OnHandleFriendName }) {
    function AddNewFriend(e) {
        e.preventDefault();
        if (!FriendName || !Image) return;
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            FriendName,
            Image: `${Image}?=${id}`,
            balance: 0,
        };
        onHandleNewFriend(newFriend);
        OnHandleFriendName('');
        OnHandleSetImage("https://i.pravatar.cc/48");
    }
    return (
        <form className="form-add-friend" onSubmit={AddNewFriend}>
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" value={FriendName} onChange={(e) => OnHandleFriendName(e.target.value)} />
            <label>🖼️Image URl</label>
            <input type="text" value={Image} onChange={(e) => OnHandleSetImage(e.target.value)} />
            <Button >Add</Button>
        </form>
    )
}
