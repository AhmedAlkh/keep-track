// Courtesy of module 18.4

// Create variable to hold db connection
let db;
// Establish a connection to IndexedDB database called 'keep_track_db'. Set it to version 1.
const request = indexedDB.open('keep_track_db', 1);

// This event will emit if the db version changes.
request.onupgradeneeded = function(event) {
    // Save a reference to the db
    const db = event.target.result;
    // Create an object store (table) called 'new_transaction', set it to have an auto increment primary key.
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// Upon successful request
request.onsuccess = function(event) {
    // When db is successfully created with its object store (from onupgradeneeded event above) or simply established a connection, save reference to db in global variable
    db = event.target.result;
    // Check if app is online, if yes run uploadTransaction() function to send all local db data to api
    if(navigator.onLine) {
        // This havn't been created yet
        // uploadTransaction();
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};