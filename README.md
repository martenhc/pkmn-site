# THIS IS A WORK IN PROGRESS!

# Pokémon site

Personal project to have some fun practicing some React while I learn styled components.

## Deployed site and CD/CI Pipeline

This projects gets automatically deployed to Github pages when merges to the `main` branch happen.
You can check it out here: https://martenhc.github.io/pkmn-site/

## Tools and packages

- [React](https://es.reactjs.org/)
- [StyledComponents](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) / [Jest](https://github.com/facebook/jest)
- [PokeAPI](https://pokeapi.co/)
- [PokeAPI JS Wrapper lib](https://github.com/PokeAPI/pokeapi-js-wrapper)
  -- This one's wrapped up [here](https://github.com/martenhc/pkmn-site/blob/develop/src/wrapper/pokedex.ts) and being used mainly because it deals with caching, might remove later.
- Pokémon Assets CDN -- To get cooler images than the ones returned by PokeAPI

## Available Scripts

The project was started using [Create React App](https://create-react-app.dev/).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
