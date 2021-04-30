
- initial setup
    - created npmInit.sh
    - ran npmInit.sh
    - created npmInstallTypescript.sh
    - ran npmInstallTypescript.sh
    - created initialPackages.sh
    - ran initialPackages.sh
    - setup mongodb on atlas
    - added tsconfig.json
    - added tslint.json
    - wrote on package.json
        - script 
            - "build:watch": "tsc -w",
            - "dev": "nodemon ./dist/index.js",
    - wrote .gitignore
        - node_modules/  
<br>


- created index.ts
    - created ./src/index.ts
    - ran npm run dev
        -failed
    - fixed package.json
        - "dev": "npx nodemon -w dist dist/index.js"
    - ran npm run dev
        - succeeded
        - change to test reload
        - reloaded
    - updated .gitignore
        - dist/
<br>

- creating test endpoint
    - import express, {Request, Response} from 'express' 
    - GET /test
        - ok

</br>
    




    