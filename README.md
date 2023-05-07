# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

 ### Build API

```js
touch server.js
mk dir models controllers routes
npm install --save express mongoose morgan serve-favicon dotenv nodemon
touch .env
```
add .env to .gitignore. it will look like ▼▼▼▼▼▼▼▼▼▼▼

```.gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

```js
npm init -y
```

In models, create entry.js

```js
const { model, Schema } = require('mongoose')

const entrySchema = new Schema({
    title: {required: true, type: String},
    category: { required: false, type: String},
    image: { required: false, type: String},
    body: { required: false, type: String}
}, {
    timestamps: true
})

const Entry = model('Entry', entrySchema)

module.exports = Entry;
```
In controllers, create a new folder called api, and then a doc named entrys.js 😛 I know that's not a word.

```js
require('dotenv').config()
const Entry  = require('../../models/entry.js');

module.exports = {
    create,
    show,
    update,
    destroy,
    jsonEntrys,
    jsonEntry
}


// jsonEntrys, jsonEntry

function jsonEntry (req, res){
    res.json(res.locals.data.entry)
}

function jsonEntrys (req, res){
    res.json(res.locals.data.entrys)
}


// create
async function create(req, res, next){
    try {
        const entry = await Entry.create(req.body)
        console.log(entry)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })        
    }
}


// read - index, show

async function show(req, res, next){
    try {
        const entry = await Entry.findById(req.params.id)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}



// update

async function update(req, res, next){
    try {
        const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


// destroy

async function destroy(req, res, next){
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

```

In routes, create another folder named api with a document named entrys.js

```js
const router = require('express').Router()
const entryCtrl = require('../../controllers/api/entrys')

/* /api/entrys/:id
DELETE 
destroy entry
*/
router.delete('/:id', checkToken, ensureLoggedIn, entryCtrl.destroyEntry, entryCtrl.respondWithEntry)
/*
/api/entrys/:id
PUT
update entry
*/
router.put('/:id', checkToken, ensureLoggedIn, entryCtrl.updateEntry, entryCtrl.respondWithEntry)
/*
/api/entrys
POST
create entry
*/
router.post('/', checkToken, ensureLoggedIn, entryCtrl.createEntry, entryCtrl.respondWithEntry)

module.exports = router
```

Configure .env 

```md
MONGO_URI=mongodb+srv://xxxxxxxxxxxxxxx@cluster0.w3guwmj.mongodb.net/images?retryWrites=true&w=majority
CLOUDINARY_HOST=xxxxxxxxx
CLOUDINARY_API_KEY= 000000000000000000000
CLOUDINARY_API_SECRET= jjkhkjhfkgljhflgjhligyjhflkgjlgjkhkjljljkhlkjhgkhg
SECRET=thisisasecret
```
Ok so it's worth looking at the pinned piece in my big binder. It shows one possible problem , but not everything. 


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
