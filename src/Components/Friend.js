export default function Friend({FriendName,image,balance}) {
return <li>
    <img src={`${image}`} />
    {FriendName}
    <p>{balance}</p>
    <button className="button">Select</button>
    </li>
}
