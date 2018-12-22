const cardLists = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];

let cardList_call_count = 0;

export default {
  'get /test/cardList': function (req, res) {
    const responseObj = cardLists[cardList_call_count % cardLists.length];
    cardList_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },
};