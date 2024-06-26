import Button from "./Button";
export default function Friend({ FriendName, Image, balance }) {
    return <li>
        <img src={`${Image}`} alt="PersonImage" />
        <h3>
            {FriendName}
        </h3>
        {
            balance < 0 && <p className="red">You owe {FriendName} {Math.abs(balance)}$</p>
        }
        {
            balance > 0 && <p className="green">{FriendName}owe you {Math.abs(balance)}$</p>
        }
        {
            balance === 0 && <p>you and {FriendName} are even </p>
        }
        <Button>Select</Button>
    </li>
}
