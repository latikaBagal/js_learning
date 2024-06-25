console.log(`====== Object to JSON conversion using JSON.stringfy()========`);

const student = {

    stdName: "Jenny",

    rollNum: 107,

    city: "Pune",

    isMarried: false,

    friendsList: ["Elon", "Bill", "Stew"],

    address: {

       flatNum: 1005,

       society: "Horizon",

       street: "Wakad",

       PIN: 411057

    },

   };

   const studentJSON = JSON.stringify(student);

   console.log(typeof studentJSON);

   console.log(studentJSON);

