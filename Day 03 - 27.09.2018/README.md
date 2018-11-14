## How to use a npm package in a node project

Run the following bash commands:

```bash
# change current path to desktop
cd desktop

# create in current path a new folder named `npm-test`
mkdir npm-test

# change current path to `npm-test` that we created in prev step
cd npm-test

# create in current path a new folder named `v1`
mkdir v1

# change current path to `v1` that we created in prev step
cd v1

# create in current path a new file named `app.js`
touch app.js

# list all the content of the current path
ls
 app.js

# write content to the `app.js` file  
echo "console.log((new Date()).format('Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms'));" > app.js

# show the content of `app.js` file 
cat app.js
    console.log((new Date()).format('Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms'));

# run with node the `app.js` file 
# NOTE: WE HAVE ERROR BECAUSE WE ARE NOT USING THE REQUIRED NPM PACKAGE
node app.js
    TypeError: (intermediate value).format is not a function
 
# change current path (one step back)
cd ..

# show current path
pwd
/c/Users/jbt/desktop/npm-test

# create in current path a new folder named `v2`
mkdir v2

# change current path to `v2` that we created in prev step
cd v2

# list all the content of the current path
ls

# config the current folder as a npm project
npm init -y
    Wrote to C:\Users\jbt\desktop\npm-test\v2\package.json:

    {
    "name": "v2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }

# list all the content of the current path
ls
    package.json

# install (local install) date.format package from npm 
npm i date.format
    added 3 packages in 3.614s

# list all the content of the current path
ls
    node_modules/  package.json  package-lock.json

# show the content of `package.json` file
# NOTE: THE `npm i` ADDED "dependencies": {"date.format": "^1.1.2"} 
cat package.json
    {
    "name": "v2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "date.format": "^1.1.2"
    }
    }

# create in current path a new file named `app.js`
touch app.js

# write content to the `app.js` file  
echo "require('date.format');" > app.js

# show the content of the '../v1/app.js'
cat ../v1/app.js
    console.log((new Date()).format('Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms'));

# add the content of the '../v1/app.js' file to the `app.js` file  
echo $(cat ../v1/app.js) >> app.js

# show the content of the 'app.js' file
cat app.js
    require('date.format');
    console.log((new Date()).format('Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms'));

# run with node the `app.js` file 
# NOTE: THE APP RUNS SUCCESSFULY BECAUSE WE ARE USING THE REQUIRED NPM PACKAGE
node app.js
    Local: Day 2018/9/27 at 12:20:13 and 882ms


```