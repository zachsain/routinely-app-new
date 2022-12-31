# Activity Jornal

Phase 4 Project for Flatiron School: React/Rails API - Full Stack Application. This project is designed for users to manage their activities and create and use new routines for those activities.

## Table of Contents

- [General Info](#general-information)
- [GitHub Repo](#github-repo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Server Start](#server-start)
- [Usage](#usage)
- [Room for Improvement](#room-for-improvement)

## General Information

Activity Journal was created for Flatiron Software Enineering program for phase-4, focused on React frontend and Rails backend. Authentication requires users to login and protects data access.

## GitHub Repo

- [Monorepo - frontend and backend servers](https://github.com/zachsain/routinely-app-new)

## Technologies Used

- Ruby 2.7.4
- Rails 7.0.4
- Active Model Serializers
- NodeJS (v16), and npm
- bcrypt 3.1.7
- React 18.2.0
- React-Router-Dom 5.3.4

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Features

### Backend API Endpoints

GET 
/me – returns logged in user.
/activities – returns all activities 
/activities/:id – returns an activiity 
/routines - returns all routines
/routines/:id return a routine

POST 
/signup – creates new user profile
/login – cretaes a user session
/activities – creates a new activitiy 
/routines - creates a new routine

PATCH 
/activities/:id - updates activitiy 

DELETE
/activities/:id - deletes activitiy
/logout - deletes the user session


## Setup

### Clone repository

**clone** the project repository from github: (https://github.com/zachsain/routinely-app-new)

```console
$ git clone https://github.com/zachsain/routinely-app-new.git
```

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

If your version is not correct for this project, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

### Application Install

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

## Server Start

You can use the following commands to run the application:

- `rails db:migrate db:seed`: migrate and seed the database (use `db:seed:replant` if this is not the first time running)
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

### Backend Shutdown

It should be possible to shutdown the server using [CTRL-C]. If that fails, follow these steps:

- `lsof -i tcp:9292`
  response:
  COMMAND PID USER ....
  ruby 1234 root ....
- `kill -9 1234`

## Usage

1. [`Login`] with your username & password. If this is your first time, create a user profile [`Sign Up`].
2. If first time user you can start by creating a new Activity on the [`Activitiy`] page. Or if you want to create or browse routines you can do so on the [`Routines`] page. 
3. On Activity page – Select [`Create Activity`] to create a new activity from the routine you selected. Add the title, duration, and notes on the activity. 
4. To edit the [`Activity`] click on the edit button on the bottom right of the Activity card. 
5. To delete [`Activity`] click the delete button on top left of Activity Card.
6. To enlarge the [`Activity`] card and get more details on the Routine used click anywhere on the Activity card.
7. Once on the single [`Activity`] page you can click on the [`Routine`] card to get more information on the Routine and see helpful video. 
8. To cretate new routine click the [`Routine`] tab in the navbar and select [`Create New Routine`]. 
9. To filter routines select the category you wish to filter on the [`Routines`] page. 
10. To enlarge and see helpful video on the [`Routine`], click anywhere on the Routines card to go to single Routine page. 
11. To create new [`Activity`] from a [`Routine`] click [`Add New Activity`] button on Routine card. 
12. To see all of the [`Routines`] you've previously used click the [`My Routines`] button in the navbar or the My Routines button located below the filter bar. 
13. To create a new [`Activity`] from the My Routines page click the [`Add New Activity`] button at the bottom of the Routine card.
14. To logout click the [`Logout`] button on the navbar, then click the [`Logout`] button on the page.


## Room for Improvement

Backend:

- Complete all endpoints: 
    - Allow users to create new routine categories
    - Allow users to edit their routines 
    - Allow users to delete their routines

Frontend:

- Allow users to create and manage and track monthly, weekly, yearly goals.
- Update CSS bugs. 

