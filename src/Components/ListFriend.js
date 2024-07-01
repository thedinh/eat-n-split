import Friend from "./Friend"

export default function ListFriend({ FriendSData, SelectedFriend, OnHandleSelectedFriend, OnHandleShowAddFriend }) {
    return <div>
        <ul>
            {FriendSData.map(
                el => <Friend data={el}
                    SelectedFriend={SelectedFriend}
                    OnHandleSelectedFriend={OnHandleSelectedFriend}
                    OnHandleShowAddFriend={OnHandleShowAddFriend}
                    key={el.id}
                />)}
        </ul>
    </div>
}
