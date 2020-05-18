# Simple YouTube player on React

![simple-youtube](public/simple-video.jpg 'simple-youtube')

## Tools Used

- react-js [[Ref]](https://reactjs.org/docs/getting-started.html)
- YouTube Data V3 API [[Ref]](https://developers.google.com/youtube/v3/docs/search/list)
- Semantics UI (_for CSS_) [[Ref]](https://semantic-ui.com/introduction/getting-started.html)

## Running the project

In the project directory, you can run:

### `npm ci`

Installs the required packages in *node_modules* directory from the *package-lock.json* file.

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

## Usage

1. Type any keyword in the input field
2. Click on 'Search' button or press 'Enter'
3. 5 videos loaded from YouTube and 1st one selected by default
4. Click play or select a different video to play
