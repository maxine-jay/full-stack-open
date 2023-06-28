import Person from "./Person";

const Contacts = ({persons}) => {
    return (
        <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    )
}

export default Contacts;