<h1 align="center">SUPER GALACTIC AGE CALCULATOR</h1>
<div align="center">
<img src="https://github.com/BrianSturgis.png" width="200px" height="auto" >
</div>

<p align="center"> Authored by Brian Sturgis</p>

<p align="center">Updated on Dec 7th, 2020</p>

## Detailed Description

This application calculates your age in years on four other planets based on the age you give it.  In its current state it uses a fixed age of 70 to do provide an answer.


## Setup/Installation Requirements

CLONING THIS APPLICATION FROM GIT HUB 
- repository location (https://github.com/BrianSturgis/week5projectS.C.G
- open through a git termianl or clone editor.
- got to repo location.
- using git commands clone to local repo
- or click "download" and unpack on machine

## USING THIS APPLICATION
- This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
- After installing node, navigate to the root directory of the cloned repo in a as Command Prompt or Git Bash. 
- type in "npm install".
- Then type in "npm run build".

If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.

If you use Jest to run your tests, open your terminal and go to the root of the project directory and type in "npm test".
If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.



## Known Bugs
- there are three bootsrtap libraries in ./css/ any version with out these brings up console warnings and project size is so small that they have been left in.  


## Stretch goals
-a user interface
-improved and animated user interface
  

## Support and contact details
email Brian Sturgis @ <sturujisu@gmail.com>


## Tables

placeholder text in testing graph!

| Earthage {}, |  |
| ------| -----------|
test:  Should create and instance of EarthAge |                         
expect: EarthAge === (70,0,3) |  |



| alienAge(); |  |
| ------| -----------|
test:   | should calculate 70 years into Mercury years  |
expect:  | (earthAge.alienYears[0]).toEqual(292) |

| alienAge(); |  |
| ------| -----------|
test:   | should calculate 70 years into Venus years |
expect:  | (earthAge.alienYears[1]).toEqual(113) |

| alienAge(); |  |
| ------| -----------|
| test:   |should calculate 70 years into Mars years |
| expect:  | (earthAge.alienYears[2]).toEqual(37)) |

| alienAge(); |  |
| ------| -----------|
| test:   |should calculate 70 years into jupiter years |
| expect:  | (earthAge.alienYears[3]).toEqual(6) |

| alienExpectancy(); |  |
| ------| -----------|
| test:   |should calculate 70 years into years left to live in Mercury years |
| expect:  | (earthAge.life[3]).toEqual(0) |  

| alienExpectancy(); |  |
| ------| -----------|
| test:   |should calculate 70 years into years left to live in Venus years |
| expect:  | (earthAge.life[2]).toEqual(0) |

| alienExpectancy(); |  |
| ------| -----------|
| test:   |should calculate 70 years into years left to live in Mars years |
| expect:  | (earthAge.life[1]).toEqual(0) |

| alienExpectancy(); |  |
| ------| -----------|
| test:   |should calculate 70 years into years left to live in Venus years |
| expect:  | (earthAge.life[0]).toEqual(0) |









## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Coffee
* jest
* Babel
* lint
* WWEBPACK
* NPM
  


### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..



Copyright (c) 2020 **Brian Micheal Sturgis**