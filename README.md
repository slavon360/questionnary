# Description
Code presented here is a complex questionnaire, in which almost every questions has two or more parents. After a series of questions conclusion appears.

E.g.: How many free space do you have in your apartment? 1) a lot; 2) a little; 3) small part of my room;

If option 1 is picked appears next question: Which product / kind of service do you want more? 1) transportation 2) eggs; 3) milk;

If option 1 is picked appears conclusion: "Feel free to buy a horse and keep in your apartment".
# Data structure example
'''[
  { 
    id: 1,
    questions: "How many free space do you have in your apartment? ",
    options: [
      {
        userPick: "a lot",
        moveTo: 2
      },
      {
        userPick: "a little",
        moveTo: 3
      },
      {
        userPick: "small part of my room",
        moveTo: 4
      }
    ] 
  },
  { 
    id: 2,
    questions: "Which product / kind of service do you want more?",
    options: [
      {
        userPick: "transportation",
        moveTo: 5
      },
      {
        userPick: "eggs",
        moveTo: 6
      },
      {
        userPick: "milk",
        moveTo: 7
      }
    ] 
  },
  { 
    id: 5,
    result: "Feel free to buy a horse and keep in your apartment"
  }
]'''

# Used technologies

pure JS

# App directory Layout

js/            
  data.js            --> data (array of questions)
  main.js            --> main logic

style.css             --> default stylesheet  
index.html            --> the main html 
