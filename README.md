# Rick and Morty App
We need you to create a simple web app to show the Rick and Morty characters with this open graphql endpoint https://rickandmortyapi.com/graphql

Requirements:
A readme to run the app
We recommend you to use the following frameworks: react, yarn, antdesign, jest

Nice to have:
Extra points for a simple installation, typescript and test coverage.

We don’t have a time limit. You can solve it at your pace.

# Available demo
[Demo](https://candid-marigold-2e798b.netlify.app/)

## General Requirements based on assumptions

| Features                     | status         | notes                                                                                                                                                                                             |
|------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Responsive layout with antd  | done           | it detects initially device via react-device-detect.<br/> If you test have that in mind. <br/>Also I added tailwind as antd provides a very poor css utility coverage                             |
| Characters Listing           | done           | I've started initially with an old fashion pagination, but decided to load more upon scroll.<br/> It's not the best solution as we are not destroying components that are not in the visible area |
| Characters Filter and Search | partially done | not all available filters are covered, also did not have time to add reset filters functionality                                                                                                  |
| Character Details page       | done           | You have to click on the eye icon within the actions in character card to test it                                                                                                                 |
| Episodes                     | not done       |                                                                                                                                                                                                   |
| Locations                    | not done       |                                                                                                                                                                                                   |


| Technical tasks        | status         | notes                                                                                          |
|------------------------|----------------|------------------------------------------------------------------------------------------------|
| Typescript             | done           | For data fetching I use custom fetcher on top of https://www.graphql-code-generator.com/       |
| Unit Tests             | partially done | I've just added several working test examples                                                  |
| E2E Tests              | not done       |                                              |
| Simple installation    | partially done | Did not have time to setup Docker container, maybe it was part of the requirement              |
| Character Details page | done           | You have to click on the eye icon from the character card component within the list to test it |


| Optional future improvements | status | notes                                                                               |
|------------------------------|--------|-------------------------------------------------------------------------------------|
| precommit hook               | -      | |
| i18n translations            | -      |                                        |
| alternative icon pack        | -      |        |
| sentry.io                    | -      |                                        |
| Migrate to Next.js           | -      |                                                                                     |
| PWA                          | -      |                                                                                     |
| Dark theme support           | -      |                                                                                     |
| Accessibility ARIA           | -      |                                                                                     |
| RTL support                  | -      |                                                                                     |
| Lazy load for images         | -      |                                                                                     |

### `yarn install`

Install all dependencies

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Currently codegen is executed upon start as a precaution so people don't endup with missing files

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
