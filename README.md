
Used Technologies <br />
PHP - (version 8.1.6) and MySQL for backend<br />
ReactJS - (version 18.2.0) and Bootstrap - (version 5.1.3) for Frontend<br />

Steps to start ReactJS project<br />
1. Clone Github Repository<br />
	command: git clone https://github.com/AnkitPatel1999/alleventui.git<br />

2. Install Libraries<br />
	command: npm install<br />

3. Run Project<br />
	command: npm start<br />


Steps to arrange API Files<br />

1. Clone Github Repository in xampp\htdocs Directory<br />
	command: https://github.com/AnkitPatel1999/alleventsapi.git<br />

2. Install Google API library<br />
	command: composer require google/apiclient<br />


Now you can Test <br />

FrontEnd URL <br />
 Home page: https://localhost:3000/<br />
 Create Event Page : https://localhost:3000/create-event<br />
 Login Page: https://localhost:3000/signin<br />

Bakend API<br />
 Listing all event API: http://localhost/alleventapi/api/event/events.php<br />
 Create Event API: http://localhost/alleventapi/api/event/createEvent.php<br />
 Login API: http://localhost/alleventapi/api/user/login.php<br />

Database Configaration<br />
    Host = 'localhost'<br />
    Database Name = 'alleventsoop'<br />
    Username = 'root'<br />
    Password = '123456'<br />

Table structure for table `events`<br />

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
<br />
Table structure for table `users`<br />

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` text NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `profileImg` text NOT NULL
)
