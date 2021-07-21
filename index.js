const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased2() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(" ");
    const newWords = words.map( word => word.slice(0, 1).toUpperCase() + word.slice(1) ) 
    const joinWords = newWords.join (" ")
    return joinWords
  })

} 


function titleCased() {
  return tutorials.map((tutorial) => {
    const fixed = tutorial.split(" ")
        .map( word => word.slice(0, 1).toUpperCase() + word.slice(1) )
        .join (" ")
     console.log( tutorial + " -> " + fixed ) 
     return fixed  
  })

} 

