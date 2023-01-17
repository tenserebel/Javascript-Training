// Q1)

let users = [
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
];

function mapBy(inpArray) {
  res_obj = {};
  for (let i = 0; i < inpArray.length; i++) {
    res_obj[inpArray[i].first_name] = inpArray[i];
  }
  return res_obj;
}

console.log(mapBy(users));

// Q2)

let user = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

// Using reduce we can get the key as the primary and then the corresponding objects.

function functionGroupBy(inpArray, key) {
  return inpArray.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

console.log(functionGroupBy(user, "gender"));

// 3)

function sortByKey(inpArray, inpKey, order) {
  if (order === "desc") {
    return inpArray.sort((a, b) => (a[inpKey] < b[inpKey] ? 1 : -1));
  } else {
    return inpArray.sort((a, b) => (a[inpKey] > b[inpKey] ? 1 : -1));
  }
}

console.log(sortByKey(user, "first_name", "asce"));

// 4)

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

function mergeById(inpArray1, inpArray2) {
  return inpArray1.map((firstArray) => ({
    ...inpArray2.find((item) => item.id === firstArray.id && item),
    ...firstArray,
  }));
}

console.log(mergeById(userNames, userEmails));

// 5)
// Write a function to filter an array of strings to hold only unique values.

let test_arr = ["prem", "jha", "prem", "jha", "aditya"];

function uniqueString(inpArr) {
  return [...new Set(inpArr)];
}

console.log(uniqueString(test_arr));
