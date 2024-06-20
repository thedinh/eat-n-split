import Button from "./Button";

export default function FormAddNewFriend(NewFriend, onHandleNewFriend) {
    function AddNewFriend() {

    }

    return (
        <form className="form-add-friend">
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" />
            <label>🖼️Image URl</label>
            <input type="text" />
            <Button onClick={AddNewFriend}>Add</Button>
        </form>
    )
}
