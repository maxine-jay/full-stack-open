import Person from "./Person";

const Contacts = ({ persons, removePerson }) => {
  console.log(persons)

  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} person={person} removePerson={removePerson} />
      ))}
    </ul>
  );
};

export default Contacts;
