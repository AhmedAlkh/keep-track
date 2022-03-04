// Create variable to hold db connection
let db;
// Establish a connection to IndexedDB database called 'budget'. Set it to version 1.
const request = indexedDB.open('budget', 1);

// This event will emit if the db version changes.
request.onupgradeneeded = function(event) {
    // Save a reference to the db
    const db = event.target.result;
    // Create an object store (table) called 'new_transaction', set it to have an auto increment primary key.
    db.createObjectStore('new_transaction', { autoIncrement: true });
};