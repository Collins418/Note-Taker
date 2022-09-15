# Note Taker

## Description
Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

Heroku link-https://notetakerlast.herokuapp.com/

Github deploy-https://collins418.github.io/Note-Taker/

GitHub repo-https://github.com/Collins418/Note-Taker

Video- https://watch.screencastify.com/v/SV0fTXgHaqUuyxAfIrHx


The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

## Table of Contents

Please use the links in the table below to navigate the ReadMe contents.

- [Note Taker](#note-taker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
      - [Summary](#summary)
  - [Included in code](#included-in-code)
  - [Website](#website)
  - [Deployed on](#deployed-on)


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

  Demo of the application Video and deploy link *

#### Summary 
```
The application frontend has already been created, it's your job to build the backend and connect the two.
The following HTML (5) routes should be created:
1 - GET /notes - Should return the notes.html file.
2 - GET * - Should return the index.html file
The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
The following API routes should be created:
3 - GET /api/notes - Should read the db.json file and return all saved notes as JSON.
4 - POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
5 - DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
```
![challenge 11](https://user-images.githubusercontent.com/106499144/190286901-a36bd72f-f585-400c-a7bd-a424ce37ec61.png)
![challenge 11 2](https://user-images.githubusercontent.com/106499144/190286896-d13ca093-4510-4384-bff4-d70823d08a3d.png)

## Included in code
Two JS Pages

`Index.js`
`Server.js`

Two JSON packages
`Node Modules Folder`

TWO HTML Pages
`One CSS Page`
`One JSON file`

## Website
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Bootstrap 4.5](https://getbootstrap.com/)
- [Font Awesome 5](https://fontawesome.com/)
- [JQuery](https://cdnjs.com/libraries/jquery)


## Deployed on
- [Heroku](https://www.heroku.com/home)
