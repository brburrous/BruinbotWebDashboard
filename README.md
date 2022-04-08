# BruinbotWebDashboard

## This is a flask web app used to control ASME's Bruin Bot. 

For first time use, start by cloning repo onto local machine. Run command `git clone https://github.com/brburrous/BruinbotWebDashboard.git`. 
CD into BruinbotWebDashboard. 
# Using START bashflie
Run the START bash script by running `bash START`
This should create a virtual env, install python packages, install node packages, and generate tailwind CSS files. 


# Mnaual setup
Or do it manually by running:
Create a virtual environment by running `python3 -m venv venv`. Activate venv by running `source venv/bin/activate`. Install requirements by running `pip3 install -r requirements.txt`. 

`export FLASK_APP=webdashboard.py`
`flask run`

Get a firebase key and store it in root directory as `key.json`. 

CD into static folder and run `npm init` to create node_modules folder
Install tailwind using: `npm install tailwind`
Compile tailwind using: `npx tailwindcss -i ./src/style/style.css -o ./app/static/css/main.css`
Install daisyui using: `npm install daisyui`
Recompile tailwind: `npx tailwindcss -i ./src//style/style.css -o ./app/static/css/main.css` 

We're using daisyUI tailwind components. To install dasiyUI, run `npm i daisyui`. After installing daisy, you must compile tailwind. 

## Video stream
The video stream is handled by Vision-AI. In that git repo, there's a file stream.py. Instructions to run it are found in that repo's readme. Once running, the program streams webcam data to a local port. This local port is then hosted online using ngrok. Accessing this stream is very easy. Just modify the src of the img element used to view the stream so that it's pointing towards the ngrok url. 



## NPM stuff (For tailwind and daisy ui)
### Why tailwind?
Tailwind is used for styling components within HTML rather than css. It generates useful css classes that 
take care of styling. Just add the classnames you need to your html. 

### Tailwind setup
The following setup should already exist, however if you need to setup tailwind again, this is how it works:

Tailwind works by scanning through your files and only generating the CSS classes your files need. 
The path to the content is given in content array, found in `tailwind.config.js`

If this file doesn't exist, the tailwind setup can be completed by running:
`npm install -D tailwindcss` # To install tailwind
`npx tailwindcss init` # To create the tailwind config

Open `tailwind.config.js` and add path to all files containing tailwind classes:
    `content: ["./app/static/**/*.{html,js}", "./app/templates/**/*.{html,js}"],`

## Daisyui

We're using Daisyui, which is a tailwind CSS component library, to make the UI stuff a little easier. 

Daisyui works by combining different tailwind classes into new classes to make components. This means you can have classes like "button". 

To install Daisyui run: `npm install daisyui`
Next, tell tailwind we're using daisyui by adding the following line to tailwind.config.js: `plugins: [require("daisyui")],`

## Compiling Tailwind:

Tailwind only compiles the css your html files (specified in the tailwind config) actually call for. 
In order to compile these files, use the following command: `npx tailwindcss -i ./src/style.css -o ./app/static/css/main.css`

The filename after `-i` refers to the input file that tells tailwind what you want. The filename after `-o` refers to the location of
the css that tailwind is going to generate. 


