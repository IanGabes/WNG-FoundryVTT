### Installation Walkthrough 

This walkthrough is meant to introduce you to the tools this repository leverages, and how to get started with them

##### Foundry Game System Information

A rudimentary tutorial to get you started can be found here: https://foundryvtt.wiki/en/development/guides/System-Development-for-Beginners

FoundryVTT configuration files for this repo are found in `config/`. After a successful build, an installable version of the code will be found in `dist/`. Many tutorials will ask you to install Game Systems by pasting their github URI directly into foundry. This repository does not work that way.

- `assets/` contains static files. HTML, font files, images, and CSS all live here.
- `config/` contains the aforementioned FoundryVTT Game System configuration files.
- `src/` contains the javascript code that powers the Game System.
- `doc/` contains this file and other documentation related items!

##### Tools

Here are the tools this repository needs to run, generally speaking:

- **NodeJS**
  - This is the program that will execute your javascript code. At the time of writing, we are using version 14.12 
- **NVM** (Node Version Manager)
  - `nvm` is a tool that will help you install and manage NodeJS installations.
- **NPM** (Node Package Manager)
  - `npm` is a tool that manages and installs our dependencies for us.
- **Webpack**
  - Webpack is a build system that runs on NodeJS. This repository is set up in a way that is easier for programmers to navigate, webpack will transform our repo into something Foundry can understand, automating tasks for us. Webpack will bundle our javascript code into a single file, compile our SASS code to regular CSS, and package up all of our images and templates into the `dist` folder.
- **Git**
  - Version control for the code

##### Languages

Here are the languages this repository needs to run, generally speaking:

- **SASS**
  - Sass is a langauge that makes it easier to manage large CSS codebases, by providing higher level abstractions for common CSS tasks. CSS provides the look and feel to our UI components.
- **ES6 Javascript**
  - The common clay of the new west, the logic warehouse, the workhorse, the harbinger of apathy. Javascript is the programming language that powers the sites in your web browser, and Foundry VTT.
- **HTML5**
  - Used to define the content of the UI.

##### Setting up on Ubuntu
First, some Ubuntu housekeeping. We need to download and install OS level packages that our tools and code needs to run.

```bash
sudo apt update && sudo apt install -y curl build-essential libssl-dev git
```

Lets start by getting NodeJS and NVM set up. A lot of the tools after this use the NodeJS program to run themselves!

Follow the instructions on https://github.com/nvm-sh/nvm#installing-and-updating, or use the out-of-date bash script below to install NVM. We aren't picky about the NVM version:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

After closing and re-opening your terminal,  use `nvm` to install the latest stable version of NodeJS:
```bash
nvm install --lts
```

Clone the repo with `git`, install the dependencies with `npm`:
```bash
git clone git@github.com:IanGabes/WNG-FoundryVTT.git
cd WNG-FoundryVTT && npm install
```

Our final task is to deal with webpack. From the `WNG-FoundryVTT` folder, you should be able to run `npx webpack`. It will spit out some warning that we can ignore for now. `npx` is a program (node package eXecute) that will allow you to run programs that `npm` has installed for you. Being able to successfully run `npx webpack` means that `webpack` has been installed to your local repository. It is important to know that if your shell is not in the `WNG-FoundryVTT` directory, stuff won't work!

Set up completed, you can now muck about! Head back to the [Installation](../README.md#Installation) to build the current version of the application, and install it to your foundry server!
 
#### Foundry.JS

The `foundry.js` file is included with the NodeJS version of the FoundryVTT software you can download from the foundry site after purchase. It is highly recommended to include this file as an external library in your IDE, as it will serve as a reference for your code, and help your IDE perform type and import checking. `foundry.js` can be found in the `resources/app/public/scripts` folder of the NodeJS FoundryVTT download. 
