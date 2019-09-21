export const people = [
  {
    id: 1,
    name: "Jongheon Kim",
    age: 28,
    sex: "m"
  },
  {
    id: 2,
    name: "Jongheon Jang",
    age: 20,
    sex: "m"
  },
  {
    id: 3,
    name: "Jongheon Lee",
    age: 30,
    sex: "m"
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0]
}
