import Friend from "./Friend"

export default function ListFriend({dataFriend}) {
    return <div>
        <ul>
            {dataFriend.map((el)=><Friend FriendName={el.name} image={el.image} balance={el.balance} key={el.id} />)}
        </ul>
    </div>
}
