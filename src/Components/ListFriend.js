import Friend from "./Friend"

export default function ListFriend({ Friends }) {
    return <div>
        <ul>
            {Friends.map((el) => <Friend FriendName={el.name} Image={el.image} balance={el.balance} key={el.id} />)}
        </ul>
    </div>
}
