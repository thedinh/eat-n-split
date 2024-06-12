import ListFriend from "./ListFriend";
import FormAddNewFriend from "./FormAddNewFriend";

export default function navbar({ DataFriend }) {

    return <div className="sidebar">
        <ListFriend dataFriend={DataFriend} />
        <FormAddNewFriend />
        <Close />
    </div>

}

function Close() {
    return <button className="button">close</button>
}