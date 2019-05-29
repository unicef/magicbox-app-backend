# Magicbox App Backend

Work in progress.

This application is a node/express API designed to work with the [Magicbox App front end](https://github.com/unicef/magicbox-app) as a full-stack map exploration and map building tool. As a first step, this API serves JSON objects which contains all of the data needed to create a 'view' - the map itself, as well as the rest of the elements on the page (such as a modal or side panel) and how elements on the page should interact with each other.

This application is part of Magicbox, the UNICEF Office of Innovation/ICTD initiative around Data Science and Artificial Intelligence. For more information about this project, please [visit our website](https://www.unicef.org/innovation/Magicbox).


## Running the application

The API gets data stored with MongoDB, so you will need to set up an instance running locally. The /public folder contains the open data used for the Magicbox "Poverty Radar" explorer. This data is formatted as an array of documents that can be inserted into a MongoDB collection. To use this data with the current code, create a collection named 'view' and insert the sample data into this collection.

The connection to MongoDB is configured in src/mongoUtil.js. You can set up an .env file in src, updating the values of the following variables as needed for your configuration:

    - DB_CONN=mongodb://localhost:27017 (default local url for MongoDB connections)
    - DB_NAME=myproject (insert the name of the project you created when instantiating your database)
    - FRONTEND_URL=http://localhost:8080 (default local url for the React front end Magicbox App, used for CORS options in server.js)

The '/views' endpoint contains routes for all CRUD functionality. At this stage, however, there is not a UI for creating, updating, or deleting a view. If you would like to create your own map, you can learn more about the architecture of this application and the 'view' object in the [Magicbox App documentation](https://github.com/unicef/magicbox-app), and use kepler.gl and a text editor to create or update your own views.

Ensure that the frontend has a .env file in the root directory with a REACT_APP_SERVER_URL variable with the base URL for this API.

When you have your database and connections configured, run locally with

```console
npm install
node src/app.js
```


## Routing

The routing convention, consistent across the front and back end of this application, is as follows:
    For the /views endpoint
    - '/:dataset' - Returns a global view that displays a map of the world and data of a particular theme (for example: poverty, school connectivity, etc.)
    - '/:dataset/c/:country' - Returns a country-specific view of a dataset like the one mentioned above
    - '/u/:user' - Returns a user-created view (see more details about this in "Running the application")
