import Button from "./Button";
export default function Friend({ data, SelectedFriend, OnHandleSelectedFriend, OnHandleShowAddFriend }) {
    function HandleSelectedFriend(Friend) {
        OnHandleSelectedFriend((cur) => cur?.id === Friend?.id ? null : Friend);
        OnHandleShowAddFriend(false);
    }

    const isSelected = SelectedFriend?.id === data?.id;
    // Phan can xem xet lai sau khi du an xong SelectedFriend?.id === data?.id;

    return <li className={isSelected ? `selected` : ""}>
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
        <Button onClick={() => HandleSelectedFriend(data)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
}
