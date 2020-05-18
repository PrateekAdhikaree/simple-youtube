# Simple YouTube player on React

## Tools Used

- YouTube Data V3 API [[Ref]](https://developers.google.com/youtube/v3/docs/search/list)
- Semantics UI (_for CSS_) [[Ref]](https://semantic-ui.com/introduction/getting-started.html)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## React Components

**main file**: [index.js](src/index.js)

- [App](src/components/App.js)
  - [SearchBar](src/components/SearchBar.js)
    - [Spinner](src/components/Spinner.js)
  - [VideoDetail](src/components/VideoDetail.js)
  - [VideoList](src/components/VideoList.js)
    - [VideoItem](src/components/VideoItem.js)
  - [youtube](src/apis/youtube.js) - Scaffolding for easily calling YouTube API using Axion 

## Screenshot

![simple-youtube](public/simple-video.jpg 'simple-youtube')
