![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/vente_privee.png)

Super Heros By Vente Privee
============================

## List of super Heros

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/superheroslist.png)

## Heroku App, click on the link to see the result on preproduction

https://superherosbyventeprivee.herokuapp.com/

## Launch React Front

* cd react-ui then yarn start
* see result on http://localhost:3000
* cd react-ui then yarn test to launch jest test
* create-react-app-sass project

## Launch Server (Optionnal on localhost Indispensable for Heroku)

* yarn start
* see result on http://localhost:5000

## Project Purpose

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/react_project_instruction.png)

## Test with hard written object

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/superhero_test.png)

## Result with fetch

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/superheroslist_fetch.png)

## Super Hero Info Focus

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/superherodetails.png)

## Super Hero Not Found

![alt text](https://github.com/jendigital/superherosbyventeprivee-reactjs/blob/master/superhero_notfound.png)

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