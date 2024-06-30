import Button from "./Button";

export default function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>slipt a bill with FriendName</h2>
            <label>🧑‍🤝‍🧑Bill value</label>
            <input type="text" value="" />
            <label>🖼️Your expense</label>
            <input type="text" value="" />
            <label>FriendName's expense</label>
            <input type="text" readOnly value="" />
            <label>🖼️Your expense</label>
            <select>
                <option value="you">You</option>
                <option value="friend">friendName</option>
            </select>
            <Button>Select</Button>
        </form>
    )
}

