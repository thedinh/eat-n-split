import Button from "./Button";
export default function Friend({ data, ShowShareBill, OnHandleShowShareBill }) {
    function SelectedFriend() {
        OnHandleShowShareBill(show => !show);
    }
    return <li>
        <img src={`${data.Image}`} alt="PersonImage" />
        <h3>
            {data.FriendName}
        </h3>
        {
            data.balance < 0 && <p className="red">You owe {data.FriendName} {Math.abs(data.balance)}$</p>
        }
        {
            data.balance > 0 && <p className="green">{data.FriendName}owe you {Math.abs(data.balance)}$</p>
        }
        {
            data.balance === 0 && <p>you and {data.FriendName} are even </p>
        }
        <Button onClick={SelectedFriend}>{ShowShareBill ? `selected` : `select`}</Button>
    </li>
}
