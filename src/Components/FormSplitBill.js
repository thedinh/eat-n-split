export default function FormSplitBill() {
    return <div>

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
                <option>You</option>
                <option>friendName</option>
            </select>
            <button className="button">Spilt bill</button>
        </form>
    </div>

}

