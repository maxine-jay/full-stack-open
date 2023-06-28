import { useState } from "react";
import Filter from "./components/Filter";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "01628488915" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState(false);
  const [filterString, setFilterString] = useState("");
  const contactsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
      )
    : persons;

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    const substring = e.target.value;
    if (substring.length === 0) {
      setFilter(false);
    } else {
      setFilterString(substring);
      setFilter(true);
    }
  };

  const addPerson = (e) => {
    e.preventDefault();
    const updatedName = newName;
    const updatedNumber = newNumber;
    const personObj = {
      name: updatedName,
      number: updatedNumber,
    };

    persons.forEach((person) => {
      if (JSON.stringify(person) === JSON.stringify(personObj)) {
        alert(`${personObj.name} has already been added to the phonebook`);
      } else {
        setPersons(persons.concat(personObj));
      }
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add New Contact</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Contacts</h2>
      <h3>Filter by name</h3>
      <Filter func={handleFilter} />
      <Contacts persons={contactsToShow} />
    </div>
  );
};

export default App;
