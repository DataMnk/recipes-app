# WEB103 Project 2 - Recipes App

Submitted by: **Diana Gomez**

About this web app: **A list-based web app that displays a collection of recipes with details like category, difficulty, and ingredients. Refactored from Project 1 to serve data from a PostgreSQL database hosted on Render instead of hardcoded data.**

Time spent: **2** hours

## Required Features

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Server automatically resets and reseeds the database on startup
- [x] MVC-style architecture with separate controllers, routes, and config folders

## Video Walkthrough

Here's a walkthrough of implemented required features:



GIF created with ScreenToGif

## Notes

Main challenge: the Render internal hostname vs external hostname — the connection pool requires the external hostname to connect from a local development machine.

## License

Copyright 2026 Diana Gomez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.