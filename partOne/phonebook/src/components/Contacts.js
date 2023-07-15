import Person from "./Person";

const Contacts = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.name} person={person} removePerson={removePerson} />
      ))}
    </ul>
  );
};

export default Contacts;
