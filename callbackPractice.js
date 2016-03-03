/* In this repo your job is to write functions to make each function call work 
properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first

function first(arr, cb) {
  return cb(arr[0]);
}


  

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

function last(arr, cb) {  //look at what the last function is expecting as parameters
  return cb(arr[arr.length-1]);   // look at what the function call does below....then look at 
                          //the callback function and put in the "cb" whatever the fuctnion
                          //execution below is expecting
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply


function multiply(num1, num2, cb) {
  return cb(num1 * num2);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

  ///STUDY THIS!!!!

function contains(arr, str, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
          return cb(true);
        }
          
    }
    return cb(false);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq



/*
IN CLASS....

function uniq(collection, fn) {
    var obj = {};
    var uniqArr = [];
    collection.forEach(function(item) {
      obj[item] = item;
    });
    for (var key in obj) {
      uniqArr.push(key);
    }
    return fn(uniqArr);
}
*/

function uniq(arr, cb) {
  resultArr = [];
  arr.forEach(function(ele, index) {
    if (resultArr.indexOf(ele) === -1) {
      resultArr.push(ele);
    }
  });
  return cb(resultArr);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

function each(arr, cb) {
  arr.forEach(function(ele, index) {
    return cb(ele, index);
  });
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

function getUserById(arr, str, cb) {
  console.log(cb); /* at this point cb is equal to the function definition that you passed in...which was.....function(user) {
                       console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); })*/
  arr.forEach(function(obj, index) {
    if (obj.id === str) {
      return cb(obj);   // now cb (which is set to the definition of another function) is called witH the parameter obj....THIS IS WHERE THE CODE EXECUTES!!!
    }
  });
}




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user) {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});  //getUsersById is NOT calling the function that was passed into it....it is JUST passing in the FUNCTION DEFINITION...which it then refers
    //back to the function that was defined here (ie getUsersById) and uses this FUNCTION DEFINITION as the "cb" that gets passed in


/*
GIVING THE FUNCTION A NAME MAY HELP THE ABOVE CODE MAKE MORE SENSE...
function logUser (user) {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
}

getUserById(users, "16t", logUser; */





