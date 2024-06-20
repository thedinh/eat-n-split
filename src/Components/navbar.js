import ListFriend from "./ListFriend";
import FormAddNewFriend from "./FormAddNewFriend";
import Button from "./Button";

export default function navbar({ DataFriend, ShowAddFriend, OnHandleShowAddFriend, NewFriend, onHandleNewFriend }) {
    function ShowFormAddFriend() {
        OnHandleShowAddFriend(show => !show);
    }

    return <div className="sidebar">
        <ListFriend dataFriend={DataFriend} />
        {ShowAddFriend && <FormAddNewFriend NewFriend={NewFriend} onHandleNewFriend={onHandleNewFriend} />}
        <Button onClick={ShowFormAddFriend}>{ShowAddFriend ? "Close" : "Add Friend"}</Button>
    </div>
}
