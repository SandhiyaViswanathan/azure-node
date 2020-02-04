
// const { EventHubClient } = require("@azure/event-hubs");

// const connectionString = "Endpoint=sb://demonamespaceeventhub.servicebus.windows.net/;SharedAccessKeyName=DemoPolicy;SharedAccessKey=hi6ACZmxP8VK2yQlBY9771TJ2Avfk834Xh16gBOu3Ow=;EntityPath=demoevent";
// const eventHubName = "demoevent";

// async function main() {

//   // create a producer client to send messages to the event hub
//   const producer = EventHubClient.createFromConnectionString(connectionString, eventHubName);

//   await producer.send({ body: "my-event-body" });
//     await producer.sendBatch(
//     [
//         { body: "my-event-body-1" },
//         { body: "my-event-body-2" },
//         { body: "my-event-body-3" }
//     ]
//     );
//   console.log("dsfb")
// }

// main().catch((err) => {
//   console.log("Error occurred: ", err);
// });

const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/',(req,res) => res.send("Hello world"));
app.listen(port , () => console.log("successfully running on port " + port))