/* 
  Here are two profile objects 
  Your challenge is to write a function called `createConversationStarters`
  that will parse these objects and match up common attributes,

  The expected output of this function can be an array or string that says something like:
  `You both live in mumbai
  she is from the Marathi community as well`

  Hint: you can use using object access syntax, 
  basic conditionals and array manipulation to solve this challenge
*/

const me = {
  name: "Amit",
  neverMarried: true,
  age: 42,
  education: "Masters - Management",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my Son. He has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Veg"
};

const partner = {
  name: "Savita",
  neverMarried: false,
  age: 41,
  education: "Masters - Marketing",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};

/* 
  Start writing function here
*/



 console.log(createConversationStarters(me,partner));

function createConversationStarters(me,partner){

 const result = [];

 if(compareMaratialSTatus(me,partner))
 {
  result.push("you both are Unmarried."); 
 }
  if(compareEducation(me,partner))
 {
    result.push("You both did "+me.ducation);
 
 }
  if(compareCommunity(me,partner))
 {
    result.push("she is from the "+me.community+" community as well");

 }
    if(compareCity(me,partner))
 {
    result.push("You both live in "+me.location.city);
 
 }
  
   if(compareState(me,partner))
 {
     result.push("You both live in "+me.location.state);
 }
    if(compareCuisine(me,partner))
 {
     cuisine= "You both eats"+location.cuisine;
 }

 return result;
}





function compareMaratialSTatus(me,partner){
 return me.neverMarried==partner.neverMarried
   
 }

  function compareEducation(me,partner){
   return me.education===partner.education
   
 }
  
    function compareCommunity(me,partner){
  return me.community===partner.community
    
 }
        function compareCity(me,partner){
 return me.location.city===partner.location.city
   
  }
 
          function compareState(me,partner){
 return me.location.state===partner.location.state
  }
 
      
          function compareCuisine(me,partner){
  return me.cuisine===partner.cuisine
  }
 

