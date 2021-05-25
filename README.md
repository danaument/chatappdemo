# Chatappdemo

## Description

This application is a Node/Express backend server for a chat room.  It accepts HTTP request to store a record of events.

## Table of Contents

* [User-Story](#User-Story)
* [Features](#Features)
* [Links](#Links)
* [Installation](#Installation)
* [Technology](#Technology)
* [Notes](#Notes)
* [Questions](#Questions)
* [License](#License)

## User-Story

As a chat room user or admin, I want a persistent record of events, so that I can review chat room history.

## Features

Working Features: 

* Post new events (POST /events)
* Clear existing events (POST /events/clear)
* List events (GET /events?from=DATE&to=DATE)

Under Development:

* Aggregate events (GET /events/summary?from=DATE&to=DATE&by=TIMEFRAME)

## Links

* Project Repo: [Repository](https://github.com/danaument/chatappdemo)

## Installation

* Clone the repo or install the git bundle.
* Install/run a local MongoDB server.
* Install dependencies: 

     ```$ npm i```

* Seed the database:

     ```$ npm run seed```
* Start the server:

     ```$ npm run start```


## Technology

| Language | Dependencies |  |
| --- | --- | --- |
| Javascript | Axios | Express |
|  | Mongoose | Moment |
|  | Nodemon |  |



## Notes

My goal for this project was to create a very lightweight backend server that could serve as the beginnning of a application.  I have used Node, Express, Sequelize, MySQL, and [Socket.io](https://www.npmjs.com/package/socket.io) to create a chat room (front and backend, check out the [Dungeon Scribe repo](https://github.com/jeishu/dungeon_scribe)) before for a project in my coding boot camp, so I chose to use Mongoose and MongoDB for the database. 

I ran into a significant obstacle with the aggregation/summary route.  I spent a considerable amount of time reading MongoDB documentation on the aggregation pipeline and the various operators.  I made use of [Mongo Playground](https://mongoplayground.net/) to try out different queries.  I considered starting over with Sequelize/MySQL and something like [this approach](https://stackoverflow.com/questions/35073918/sequelize-grouping-by-date-disregarding-hours-minutes-seconds/54116200) but decided that I was at least satisfied with my approach (and wanted to see if anyone reviewing this app could point me in the right direction).

I did not implement any tests for this application.  I have used Jest in the past, but only to test simple functions ([see an example here](https://github.com/jeishu/dungeon_scribe/tree/main/test) from a past project).  I look forward to learning how to write tests for API routes.


## Questions
If you have any question about the application, don't hesitate to contact us from our Github Profile:

[Dan Aument](https://github.com/danaument)


## License

MIT © 2021 