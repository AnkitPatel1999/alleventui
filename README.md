
Used Technologies
PHP - (version 8.1.6) and MySQL for backend
ReactJS - (version 18.2.0) and Bootstrap - (version 5.1.3) for Frontend

Steps to start ReactJS project
1. Clone Github Repository
	command: git clone https://github.com/AnkitPatel1999/alleventui.git

2. Install Libraries
	command: npm install

3. Run Project
	command: npm start


Steps to arrange API Files

1. Clone Github Repository in xampp\htdocs Directory
	command: https://github.com/AnkitPatel1999/alleventsapi.git

2. Install Google API library
	command: composer require google/apiclient


Now you can Test 

FrontEnd URL 
 Home page: https://localhost:3000/
 Create Event Page : https://localhost:3000/create-event
 Login Page: https://localhost:3000/signin

Bakend API
 Listing all event API: http://localhost/alleventapi/api/event/events.php
 Create Event API: http://localhost/alleventapi/api/event/createEvent.php
 Login API: http://localhost/alleventapi/api/user/login.php

Database Configaration
    Host = 'localhost'
    Database Name = 'alleventsoop'
    Username = 'root'
    Password = '123456'

Table structure for table `events`

CREATE TABLE `events` (
  `eventId` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` text NOT NULL,
  `eventName` text NOT NULL,
  `eventDate` text NOT NULL,
  `startTime` text NOT NULL,
  `endTime` text NOT NULL,
  `category` text NOT NULL,
  `bannerPicture` blob NOT NULL,
  `created_at` date NOT NULL,
  `location` text NOT NULL,
  `description` text NOT NULL
) 

Table structure for table `users`

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` text NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `profileImg` text NOT NULL
)
