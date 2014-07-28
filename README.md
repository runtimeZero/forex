Execution intructions:
=========================
1. Clone the project
2. Goto the root directory of the cloned project in the root directory
3. Execute the following commands
    /forex $>npm intall
    /forex $>node server.js

E2e testing instructions:
========================
1. Goto the root directory
2. Execute
    /forex $> node server.js
3. Open another terminal and navigate to the root directory of this project
   /forex $> protractor client/tests/config/e2e.js


Unit testing instructions:
========================
1. Goto the root directory
2. Execute
    /forex $> node server.js
3. Open browser window and open the URL
   http://localhost:3000/SpecRunner.html

To Check for JSHINT errors
============================
1. Goto the root directory
2. Execute $>grunt jshint
