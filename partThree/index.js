const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Phonebook</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(`
    <p>Phonebook contains ${persons.length} contacts</p>
    <p>${new Date()}</p>
    `);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
  res.json(person);
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId;
};
app.post("/api/persons/", (req, res) => {
  const person = req.body;
  person.id = generateId();
  let nameMatch = persons.find((p) => p.name === person.name) ? true : false;

  if (person.name.length === 0) {
    return res.status(400).json({
      error: "Name missing",
    });
  } else if (person.number.length === 0) {
    return res.status(400).json({
      error: "Number missing",
    });
  } else if(nameMatch) {
    return res.status(400).json({
        error: "Name must be unique. A contact with this name already exists in the phonebook",
      });
  }

  const newPerson = {
    name: person.name,
    number: person.number,
    id: person.id,
  };

  persons = persons.concat(newPerson);
  res.json(newPerson);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
