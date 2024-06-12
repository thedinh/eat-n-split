export default function FormAddNewFriend() {
    return <div>
        <form className="form-add-friend">
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" />
            <label>🖼️Image URl</label>
            <input type="text" value="https://i.pravatar.cc/48" />
            <button className="button">Add</button>
        </form>
    </div>
}
