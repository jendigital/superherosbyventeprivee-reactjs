![alt text](https://storage.googleapis.com/superherosbyventeprivee/venteprivee_logo.png)

Super Heros By Vente Privee
============================

## List of super Heros

![alt text](https://storage.googleapis.com/superherosbyventeprivee/superheroslist.png)

## Heroku App, click on the link to see the result on preproduction

https://superherosbyventeprivee.herokuapp.com/

## Launch React Front

* yarn start
* see result on http://localhost:3000
* yarn test to launch jest test
* create-react-app-sass project

## Launch Server (Optionnal on localhost Indispensable for Heroku)

* cd .. && yarn start
* see result on http://localhost:5000

## Project Purpose

![alt text](https://storage.googleapis.com/superherosbyventeprivee/react_project_instruction.png)

## Test with hard written object

![alt text](https://storage.googleapis.com/superherosbyventeprivee/superherolisteffect.png)

## List Result

![alt text](https://storage.googleapis.com/superherosbyventeprivee/SuperHerosFetchList.png)

## Deploy on Heroku from Root (Preproduction plateforme https://superherosbyventeprivee.herokuapp.com)

* Install the Heroku CLI
* Download and install the Heroku CLI.

## If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
* Create a new Git repository
* Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a superherosbyventeprivee

* Deploy your application
* Commit your code to the repository and deploy it to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku master
OR
$ git push heroku branchname:master

* Existing Git repository
* For existing repositories, simply add the heroku remote
$ heroku git:remote -a superherosbyventeprivee
