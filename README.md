# Solar

There are 4 planned components to this project:

Front-End (React)
- Run using yarn start from solar-front directory
- This will be available on http://localhost:3000

Back-End (Node.js)
- Run using nodemon index.js from solar-back directory
- This will be available on http://localhost:4000/

Firmware (C)
- Run BarebonesAPI.ino from solar-firm in the Arduino IDE
- The IP address changes per network and can be found in the serial monitor
- To upload code to connected ESP, unplug RX connection (plug in after upload complete)
- Call http://10.78.154.47/test_serial for test data

Database (MongoDB)
- This has not been started yet
