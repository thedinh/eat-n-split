import ListFriend from "./ListFriend";
import FormAddNewFriend from "./FormAddNewFriend";
import Button from "./Button";

export default function navbar(
    {
        ShowAddFriend,
        OnHandleShowAddFriend,
        NewFriend,
        onHandleNewFriend,
        Image,
        OnHandleSetImage,
        FriendName,
        OnHandleFriendName
    }) {
    function ShowFormAddFriend() {
        OnHandleShowAddFriend(show => !show);
    }
    function OnHandleAddNewFriend(Friend) {
        onHandleNewFriend((Friends) => [...Friends, Friend])
    }
    return <div className="sidebar">

        <ListFriend Friends={NewFriend} />
        {ShowAddFriend && <FormAddNewFriend
            NewFriend={NewFriend}
            onHandleNewFriend={OnHandleAddNewFriend}
            Image={Image}
            OnHandleSetImage={OnHandleSetImage}
            FriendName={FriendName}
            OnHandleFriendName={OnHandleFriendName}
        />}
        <Button onClick={ShowFormAddFriend}>{ShowAddFriend ? "Close" : "Add Friend"}</Button>
    </div>
}
