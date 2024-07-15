# Passport.

![passport name](https://i.imgur.com/Am5PGrx.png)

## Welcome to Passport. A digital passport application.

I chose to build this application because I love traveling and I love sharing travel experiences and stories.

## Getting Started

[Deployed Website](https://passport-31c7d939f127.herokuapp.com/)

[Trello Planning Materials](https://trello.com/b/tuI7hvXd/project-2-passport)

### Description

The purpose of this application is to allow a user to input international travel data and sort that data by country. The user can add a country and it's data, edit that country, and delete the country if necessary. The data a user can input includes:

- country name
- date
- Point of entry (city)
- Purpose (Leisure, Business, Education, Other)
- Notes
- Location of Stay (city)

In additon, a user has the ability to view the passport of another user. However, only the country name and date are displayed as to maintain user privacy.

### Instructions

The website features an inital naviagation bar that allows a user to either sign-up or sign-in. Once the user has signed in they are directed to their passport profile. If no data has been entered only a button to add a country is shown. Once the user submits a country that country will show up in their profile. The country can then be clicked and an option to either edit or delete the country will be shown. If a user opts to edit their country data, the inout fields will show the previous data until updated. The navigation bar has an option to view the user community. If selected, the user will be directed to a community page in which the users' usernames are shown. Each user can be clicked on and their country data (name and date only) will be shown. At any point a user can return to their passport profile.

### Technologies used:

- HTML
- CSS
- EJS
- MONGODB
- NODE.JS

### Sources/Attributions

- Background image: [Unsplash](https://unsplash.com/)

- Font: [Google Fonts](https://fonts.google.com/)

### Planned Enhancements

A few features I plan to add:

- An option to select either "public" or "private" if a user does not want their country data to be visible to other users.

- An option for a user to upload a photo of their customs stamp

- Add a responsive design

- An additional data entity for a user to input each city they visited within a country, enhacing the current feature "Location of Stay (city):" in which a user can type in either one city, multiple cities, or leave the field blank.
