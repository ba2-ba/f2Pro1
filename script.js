/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
     // map method to create a new array of developers
    arr.map((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
        });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

    // forEach method to iterate over the array
    arr.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
      });
    }
  
  function addData() {
    //Write your code here, just console.log

    arr.push({
        id: 4,
        name: "sks",
        age: "20",
        profession: "intern",
      });
      console.log(arr);
    
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

    let noAdmin = arr.filter((employee) => {
        //Check if the profession is no admin
        if (employee.profession !== "admin") {
          return employee;
        }
      });
      console.log(noAdmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let newArray = [
        { id: 5, name: "Bandana", age: "22", profession: "developer" },
        { id: 6, name: "Nidhi", age: "25", profession: "tester" },
        { id: 7, name: "Rishi", age: "30", profession: "manager" },
      ];
      //Concatenate the two arrays using the concat method
      let concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }