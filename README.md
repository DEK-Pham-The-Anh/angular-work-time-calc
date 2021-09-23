# angular-work-time-calc

Work Time Calc: 
https://dek-pham-the-anh.github.io/angular-work-time-calc/
 

## Getting Started

1. Install packages: `npm install`
2. Launch a DEV server: `npm run start`
3. Build for PROD: `npm run build`


## How to host your app on GitHub Pages

1. In `angular.json` add the line `"outputPath": "docs"` like so:
```
"build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
        "outputPath": "docs",
```
This sets directory `/docs` as the folder into which you can put your built app files   

2. Build your app for deployment on GitHub pages:
```
ng build --prod --baseHref="https://_YOUR_GITHUB_NAME_IN_LOWER_CASE_.github.io/_YOUR_REPO_NAME_/"
```
*Example: ng build --prod --baseHref="https://dek-pham-the-anh.github.io/angular-work-time-calc/"* 

3. Commit and push changes to GitHub. In repository settings, set `/docs` as the folder from which the app will be built for your GitHub Page.


## Solutions to possible issues

1. https://www.codegrepper.com/code-examples/javascript/angular+cli+version+is+greater+than+your+local+version
2. https://stackoverflow.com/questions/57216110/the-angular-compiler-requires-typescript-3-4-0-and-3-5-0-but-3-5-3-was-found
