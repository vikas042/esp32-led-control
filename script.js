const broker = "wss://92a236948b6d410982701057e4ac5349.s1.eu.hivemq.cloud:8884/mqtt";

const options = {
  username: "Vikas042",
  password: "Vikas@123"
};

const client = mqtt.connect(broker, options);

client.on("connect", () => {
  console.log("Connected to MQTT");
});

function turnOn() {
  client.publish("esp32/led/control", "ON");
  document.getElementById("status").innerText = "Status: ON ⚡";
}

function turnOff() {
  client.publish("esp32/led/control", "OFF");
  document.getElementById("status").innerText = "Status: OFF ❌";
}