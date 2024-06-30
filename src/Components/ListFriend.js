import Friend from "./Friend"

export default function ListFriend({ FriendSData, ShowShareBill, OnHandleShowShareBill }) {
    return <div>
        <ul>
            {FriendSData.map(
                el => <Friend data={el}
                    ShowShareBill={ShowShareBill}
                    OnHandleShowShareBill={OnHandleShowShareBill}
                />)}
        </ul>
    </div>
}
