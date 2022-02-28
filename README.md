# keep-track

Chrome DevTools makes it possible to test service workers on localhost in development. Simply click the Application tab, then select Service Workers from the menu on the left.

## Offline functionality

feature/offline-functionality

Review Module 18: NoSQL, Lesson 4: Add Offline Persistence with IndexedDB as a refresher on how to add this to your application.
- Add notes here

Add a service worker
Review Module 19: Progressive Web Applications (PWA), Lesson 4: Using Service Workers as a refresher on how to add this to your application.
- Add notes here

Once you’ve updated the existing budget tracker, it should provide the following functionality:

- The ability to enter deposits offline.

- The ability to enter expenses offline.

- Offline entries should be added to the tracker when the application is brought back online.

## Web Manifest

feature/manifest

Because this will be a mobile-first application, you’ll also need to add a web manifest to your application with the app’s metadata, to let users’ devices know what they’re installing and how the app should look on the home screen.

Review Module 19: Progressive Web Applications (PWA), Lesson 5: Convert the App to a PWA as a refresher on web manifests.

This manifest.json file for this project will contain the following properties:

- name

- short_name

- icons

- theme_color

- background_color

- start_url

- display

## Deployment to Heroku Using MongoDB Atlas

Finally, the budget tracker has a server and uses MongoDB as its database, so you’ll need to deploy this application to Heroku using MongoDB Atlas. 

To review this process, look at Module 18: NoSQL, Lesson 5: Add Mongoose Validation, specifically 18.5.5: Deploy to Heroku.