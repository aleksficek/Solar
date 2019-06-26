#include "ESP8266WiFi.h"
#include "ESP8266WebServer.h"
 
ESP8266WebServer server(80);
 
void setup() {

  Serial.begin(9600);
  pinMode(2, OUTPUT);
  
  // WiFi.begin("dlink-5EA0", "bxyaw96438");  //Connect to the WiFi network
  WiFi.begin("Tri-City Wifi 509", "12345678");  //Connect to the WiFi network
  //  WiFi.begin("iPhone", "thisworks");  //Connect to the WiFi network
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for connection
 
    delay(500);
    Serial.println("Waiting to connect…");
 
  }
 
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //Print the local IP
 
  server.on("/other", []() {   //Define the handling function for the path
 
    server.send(200, "text / plain", "Other URL");
 
  });

  server.on("/test_serial", []() {   //Define the handling function for the path

    String sample_value = "Nothing";
    while (Serial.available()) {
      sample_value = Serial.read();
    }
    server.send(200, "text / plain", sample_value);
 
  });
 
  server.on("/", handleRootPath);    //Associate the handler function to the path
  server.begin();                    //Start the server
  Serial.println("Server listening");
 
}
 
void loop() {

  server.handleClient();         //Handling of incoming requests
 
}
 
void handleRootPath() {            //Handler for the rooth path
 
  server.send(200, "text/plain", "Hello world");
 
}
