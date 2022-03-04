// Create variable to hold db connection
let db;
// Establish a connection to IndexedDB database called 'budget'. Set it to version 1.
const request = indexedDB.open('budget', 1);