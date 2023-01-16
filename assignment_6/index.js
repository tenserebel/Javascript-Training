let obj = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

// Question 1

// 1)
function getFirstName(obj, nameInp) {
  let res_arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].first_name.includes(nameInp)) {
      res_arr.push(obj[i]);
    }
  }
  return res_arr;
}
console.log(getFirstName(obj, "To"));

// 2)
function getEmail(obj) {
  return obj.email;
}

let emailArray = obj.map(getEmail);
console.log(emailArray);

// 3
function sortByDate(obj) {
  let date_arr = [];
  for (let i = 0; i < obj.length; i++) {
    date_arr.push(obj[i].date_of_birth);
  }
  date_arr.sort();
  return date_arr.reverse();
}

console.log(sortByDate(obj));

// 4)
function getById(idInpu, obj) {
  let res_arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == idInpu) {
      res_arr.push(obj[i]);
    }
  }
  return res_arr;
}
console.log(getById(5, obj));

// Question 2.
// Mutate means the array would be modified and immutable means it won't.

let arr1 = [1, 2, 4, 3, 5];

// 1) push - mutabling

console.log(`This is before push ${arr1}`);

arr1.push(6);

console.log(`This is after push ${arr1}`);

// 2) pop - mutating
console.log(`This is before pop ${arr1}`);

arr1.pop();

console.log(`This is after pop ${arr1}`);

// 3) filter - non-mutating

function Even(num) {
  return num % 2 == 0;
}

console.log(`This is before filter ${arr1}`);

console.log(arr1.filter(Even));

console.log(`This is after filter ${arr1}`);

// 4) find - non-mutating
console.log(`This is before find ${arr1}`);

console.log(arr1.find(Even));

console.log(`This is after find ${arr1}`);

// 5) sort - mutating
console.log(`This is before sort ${arr1}`);

arr1.sort();

console.log(`This is after sort ${arr1}`);

// 6) map - non-mutating

console.log(`This is before map ${arr1}`);

function mul(num) {
  return num * 2;
}

console.log(arr1.map(mul));

console.log(`This is after map ${arr1}`);
