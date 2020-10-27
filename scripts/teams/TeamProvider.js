let teams = []

//fetch in get
export const getTeams = () => {
  return fetch("http://localhost:8080/teams")
  .then(response => response.json())
  .then(parseTeams => {
    teams = parseTeams
  })
}

//slice in use
export const useTeams = () => {
  return teams.slice()
}

// id:
// name: 
// dateCreated: