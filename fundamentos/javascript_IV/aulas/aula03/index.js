const person = {
    name: "luke",
    job: "farmer",
    parents: ["anakin", "padme"],
};

const name = person.name;

const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

console.log(father, mother);

function createUsaer({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999);
    return {
        id,
        name,
        job,
        parents,
    };
}

const luke = createUsaer(person);
console.log(luke);
