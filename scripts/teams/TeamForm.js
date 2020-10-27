const contentTarget = document.querySelector(".teamContainer")
const eventHub = document.querySelector(".container")



const render = () => {
  contentTarget.innerHTML = `
    <h3>New Team Name</h3>
    <input class="team__name" type="text"/>
    <button id="saveTeam">Save Team</button>
  `
}

export const TeamForm = () => {
  render()
}

eventHub.addEventListener("click", (eventObj) => {
  if (eventObj.target.id === 
    "saveTeam") {
      const teamID = document.querySelector().value
      const teamName = document.querySelector().value
      const teamDateCreated = document.querySelector().value
    }
})

