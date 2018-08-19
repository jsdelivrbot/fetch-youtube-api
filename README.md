This project is to mimic Youtube's website to search videos and show the searched result list. It is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I use "youtube-api-search" package to fetch data from Youtube API, and show every first result as the detailed one immediately. User could select other videos from video list to change the detailed one. 

For the search part, inorder to be more like youtube, instead of immediatly searching the typed characters, I use "lodash" library to delay invoking searching function for several milliseconds. 

The whole style of this website is based on Bootstrap framework.

![website](https://github.com/zipxup/fetch-youtube-api/blob/master/local-website.png)
