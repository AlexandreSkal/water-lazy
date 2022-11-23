[{
    "$date": {
        "$numberLong": "1669210315999"
    },
    "sensorId": "2222",
    "type": "humidity",
    "location": "yard",
    "humidity": "78"
},
{
    "timestamp": {
        "$date": {
            "$numberLong": "1669210316999"
        }
    },
    "sensorId": "1111",
    "type": "humidity",
    "location": "yard",
    "humidity": "89"
}
]

/*
Commando to create a database:
First we need to create a database named "water-lazy".
db.createCollection(
    "sensors",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "hours"
       }
    }
)

*/
