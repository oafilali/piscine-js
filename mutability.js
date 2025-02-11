const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

const  sameperson = person
const clone1 = {...person}
const clone2 = {...person}

person.age = 78
person.country = 'FR'
