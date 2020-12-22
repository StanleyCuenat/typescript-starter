# Typescript TDD starter

## Command list

`npm run test`: run jest with ts config (for pipeline like github)

`npm run start:test`: run jest with ts config for development

`npm run start:dev`: run your module with nodemon

`npm run cover`: run jest code coverage

`npm run build`: build your module

`npm run start`: build and run your module

`npm run postinstall`: script for husky

## Behind the code

Husky is used to run test before every commit. Combined with a github action pipeline bad commit can't be pushed on your repository
