import ListFriend from "./ListFriend";
import FormAddNewFriend from "./FormAddNewFriend";

export default function navbar({DataFriend}) {

return <div className="sidebar">
    <ListFriend dataFriend = {DataFriend}/>
    <FormAddNewFriend/>
</div>

 }