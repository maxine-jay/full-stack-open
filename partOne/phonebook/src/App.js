import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState(false);
  const [filterString, setFilterString] = useState("");
  let match = false;
  let matchingPerson = {};
  const contactsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
      )
    : persons;

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

    //check if updateName === any other name
    persons.forEach(p => {
      if(p.name === updatedName) {
        match = true;
        matchingPerson = p;
        return;
      }
    })
    // const matchingPerson = persons.find((p) => (p.name === updatedName));
    if (match) {
      if (
        window.confirm(
          `${personObj.name} is already in your contacts. Replace current number with new number?`
        )
      ) {
        personsService.update(matchingPerson.id, personObj)
        .then(() => {
          const newPersons = persons.map((p) => {
            if (p.name === updatedName) {
              return {
                ...p,
                number: updatedNumber,
              };
            } else {
              return {
                ...p,
              };
            }
          });

          console.log(newPersons);
          setPersons(newPersons);
        });
      }
    } else {
      personsService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(person)
        .then(setPersons(persons.filter((p) => p.id !== person.id)));
    }
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
      <Contacts persons={contactsToShow} removePerson={removePerson} />
    </div>
  );
};

export default App;
