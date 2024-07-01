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
        OnHandleFriendName,
        SelectedFriend,
        OnHandleSelectedFriend

    }) {
    function ShowFormAddFriend() {
        OnHandleShowAddFriend(show => !show);
    }
    function OnHandleAddNewFriend(Friend) {
        onHandleNewFriend((Friends) => {
            return [...Friends, Friend]
        })
    }
    return <div className="sidebar">

        <ListFriend
            FriendSData={NewFriend}
            SelectedFriend={SelectedFriend}
            OnHandleSelectedFriend={OnHandleSelectedFriend}
            OnHandleShowAddFriend={OnHandleShowAddFriend}
        />
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
