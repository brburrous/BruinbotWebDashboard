# BruinbotWebDashboard

## This is a flask web app used to control ASME's Bruin Bot. 

For first time use, start by cloning repo onto local machine. Run command `git clone https://github.com/brburrous/BruinbotWebDashboard.git`. 
CD into BruinbotWebDashboard. Create a virtual environment by running `python3 -m venv venv`. Activate venv by running `source venv/bin/activate`. Install requirements by running `pip3 install -r requirements.txt`. 

`export FLASK_APP=webdashboard.py`
`flask run`

Get a firebase key add store it in root directory as `key.json`. 

CD into static folder and run `npm init` to create node_modules folder
Install tailwind using: `npm install tailwind`
Compile tailwind using: `npx tailwindcss-cli@latest build ./src/style.css -o css/main.css`

We're using daisyUI tailwind components. To install dasiyUI, run npm i daisyui. After installing daisy, you must compile tailwind. 

## Video stream
The video stream is handled by Vision-AI. In that git repo, there's a file stream.py. Instructions to run it are found in that repo's readme. Once running, the program streams webcam data to a local port. This local port is then hosted online using ngrok. Accessing this stream is very easy. Just modify the src of the img element used to view the stream so that it's pointing towards the ngrok url. 



