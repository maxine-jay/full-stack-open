const Person = ({ person, removePerson }) => {
  return (
    <li>
      {person.name}: {person.number}
      <button key={person.id} onClick={() => removePerson(person)}>Delete</button>
    </li>
  );
};

export default Person;
