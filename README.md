# Initial project - RXJS Course
The first thing we must do after downloading the code is run the command:
```npm install ```
That command will download all the necessary node modules to run the project.

Once it finishes installing the node_modules, then we can run the project with the following command
npm start
For that to work, remember that you must run that command in the same directory where the package.json is located.

Change the port
By default, the port that I configured for this project is 8081, but if you need to change it because that port is being used by your computer, you can change it by opening the package.

```json >> scripts. There you will see the instruction that launches the development server```

``` "start": "webpack serve --mode development --open --port=8081" ```


Simply change the port to the one you need and you're done. (logically save the changes before running the npm start again)


