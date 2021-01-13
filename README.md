**Pre-requisites to open, build and run this project**
 - [ ] Visual Studio 2019+ / Rider (Web Projects templates installed
       for Angular).
 - [ ] .NET Core 3.1
  
## Project code structure:
* gosports.sln solution file.
* gosports
    * **Web** folder contains the Client Application built in Angular.
    * Rest of the folders (Controllers, Services, Repositories, Models etc.) containig the Server-side API code written in ASP.NET Core (C#).
    * appsettings.json file contains the configurations/settings
  

## How to run the build the solution?

1. Open Solution file (gosports.sln) in Visual Studio 2019+ / Ride  
2. Right click on Solution and click "Restore nuget packages" (if not restoring the package automatically)
3. Right click on Solution and click "Build Solution".
4. Right click on Project "gosports" and click Debug->Start New Instance. This will open the web application on https://localhost:44398 url.
  

## Application workflow

1. First page (https://localhost:44398/) shows all the available sports  
2. Clicking on one of the available 'sport' will navigate to matches page where all the available and upcoming matches for that particular sport will be displayed.  
3. To begin recording events for a particular match, click on one of the available matches.  
  

## How to run Web Unit Tests (Angular)

Please follow below steps to run the Client side unit tests:  
1. Navigate to Web Folder in source code path. (package.json exists here.)  
2. Open Command Prompt in this folder.  
3. Run this command: ng test

## Assumptions
* There is no database involved so I made a decision to store the recorded events temporarily on localstorage. There is a SYNC button that should sync these events to the db but I mock the post response to always returns `Ok` status.
* Made the app to suit better on mobile devices
