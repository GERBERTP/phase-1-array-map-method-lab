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
/*
const titleCased = () => {
  const titleCased = tutorials.map((str) => {
    let subArray = str.split(' ')
    let theFix = subArray.map((sub) => {
    return sub.charAt(0).toUpperCase() + sub.slice(1)
      
    })
    return theFix.join(' ')
  });
}
*/

const titleCased = () => {
  return tutorials.map((str) => {
  let subArray = str.split(' ')
  let theFix = subArray.map((sub) => {
  return sub.charAt(0).toUpperCase() + sub.slice(1)
    
  })
  return theFix.join(' ')
})
};

