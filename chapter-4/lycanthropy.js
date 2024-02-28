// from eloquentjavascript.net/04_data.html
var journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// this works
var JOURNAL = require('./journal.js');
for (let entry of JOURNAL){
    console.log(`${entry.events.length} events.`);
}

// prints out all the different events in the journal
console.log(journalEvents(JOURNAL));

// prints out the phi coefficient for each event
for (let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
console.log("-------------------------------------------------");
// prints out only the events that have a phi coefficient greater than 0.1 or less than -0.1
for (let event of journalEvents(JOURNAL)){
    let correlation = phi(tableFor(event, JOURNAL));
    if(correlation > 0.1 || correlation < -0.1){
        console.log(event + ":", correlation);
    }
}
console.log("-------------------------------------------------");
// 
for (let entry of JOURNAL){
    if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));