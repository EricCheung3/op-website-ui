# README #

This README would normally document whatever steps are necessary to get your application up and running.

### This is the repo for Openprice Web UI App code. ###

Developer Guide
================

## Local Development Environment Setup ##
First you need to install and setup tools needed for local development.

### NodeJS ###

Install [NodeJS 4.2.x LTS](https://nodejs.org/)

### Javascript Tools ###

Install `ts-node` as global
~~~
npm install -g ts-node
~~~

### Editor Tool ###
Install [ATOM Text Editor](https://atom.io/).

Or [MS Visual Studio Code](https://code.visualstudio.com/).

This is optional. You can choose whatever Text Editor tool for Web development.

### Others ###

Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Install [Docker](https://docs.docker.com/installation/)

### Github Account
Create free account in Github:
[https://github.com/](https://github.com/)

Ask admin to add your account to groundtruth (opgt).

Setup [SSH key for Github](https://help.github.com/articles/generating-ssh-keys/)

Fork the project from [Open Price Backend Project](https://github.com/opgt/op-backend)
to your personal account through Web UI at Github.

## Run Openprice Web UI Project locally first time ##

### Checkout code
Create a local folder for `~/groundtruth/git`, and check out the code from Github 
your private repository for **op-web-ui** to this folder.
```
git clone git@github.com:opgt/op-web-ui.git
```

### Install dependencies ###

First time, you need to install node modules and bower components. Inside openprice-web-ui folder, run
```
npm install
```

### Run with Browser ###
You can run Openprice Web UI app locally inside browser:
```
npm start
```
It will open a browser window and display the home page. 

## On-going Development Process ##
The master branch is for production release, and for each developer, we are all working on
release branch, such as release1, release2, etc.


So we need to switch to development branch, such as release2:

```
git checkout release2
```

After you have done code changes, you first need to commit it, for example:
```
git add .
git commit -m 'my code change for issue-31'
```

Then you merge with remote release branch, then push the changes:

```
git pull
git push
```

If `git pull` return merge error, you need to manually fix the merge conflict, before push.
