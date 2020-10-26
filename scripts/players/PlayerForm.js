const contentTarget = document.querySelector(".playerContainer")

const render = () => {
    contentTarget.innerHTML = 
        `
        <h3>New Player</h3>
        <input type="text" id="player__fName" placeholder="First Name"/>
        <input type="text" id="player__lName" placeholder="Last Name"/>
        <select class="player__team" name="player__team" id="player__team">
            <option value="team1">team1</option>
            <option value="team2">team2</option>
            <option value="team3">team3</option>
        </select>
        <button id="savePlayer">Save Player</button>
        `
}

export const PlayerForm = () => {
    render()
}