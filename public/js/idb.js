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

// This function will execute if we attempt to submit a new transaction and there's not internet connection
function saveRecord(record) {
    // Open new transaction with the db with read and write permissions
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // Access the object store for 'new_transaction'
    const transactionObjectStore = transaction.objectStore('new_transaction');

    // Add record to your store with add method
    transactionObjectStore.add(record);
}

// Function that will handle all data from new_transaction object store in IDB and POST it to the server.
function uploadTransaction() {
    // Open transaction on db
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // Access object store
    const transactionObjectStore = transaction.objectStore('new_transaction');

    // Get all records from store and set to a variable
    const getAll = transactionObjectStore.getAll();

    // Upon successful .getAll() execution, run this function
    getAll.onsuccess = function() {
        // if there was data in IDB's store, send it to the api server
        if (getAll.result.length > 0) {
            fetch('/api/transactions', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(serverResponse => {
                if (serverResponse.message) {
                    throw new Error(serverResponse);
                }
                // Open one more transaction
                const transaction = db.transaction(['new_transaction'], 'readwrite');
                // Access the new_transaction object store
                const transactionObjectStore = transaction.objectStore('new_transaction');
                // Clear all items in your store
                transactionObjectStore.clear();

                alert('All saved transactions have been submitted!');
            })
            .catch(err => {
                console.log(err);
            });
        }
    };
}

// Listen for app coming back online
window.addEventListener('online', uploadTransaction);