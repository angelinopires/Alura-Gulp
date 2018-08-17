## How can I run the project?

To run this project you'll need the Node.js installed. Follow this tutorial of NVM:

```
https://github.com/creationix/nvm
```

You've finished? Great! Then you have to download the project:

```
git clone https://github.com/angelinopires/Alura-Gulp
```


Get to the folder of the project and run this commands:

```
cd angelinopires/Gulp-Alura/
npm install
```


Watch your gulpfile.js on our main folder, there's our magic. To notice the new performance and changes of our main project run:

```
npm run gulp
```


## Plugins Used:

In thoses classes was approached good pratices and tips that help on performance. Here is what plugins that I used:

* Imagemin - Reduce the size of image without losing resolution;
* Clean - Remove sources and files that you want;
* Usemin - Concat any numbers of files into only 1, so you application do less requisitions to the server;
* Uglify - Remove spaces and renames variables to get your JavaScript more efficiency;
* Cssmin - Does the same as Uglify do;
* Browser Sync - This plugin watch your browser and update simultaneously when you save your file. Also run as Local Server on every device that have the IP;
* JsHint - Gives you a report from where and what are going wrong on your code;
* JsHintStylish - Improve the report of JsHint to give more detailed and lean report;
* CssLint = Does the same of JsHint;
* Autoprefixer = This plugin give to your application every parameter needed to be accepted on every browser. You can define which version you'll support, just use the 'browserslist' file;  
* Less = A compiler for Less;

### Thanks for coming :)