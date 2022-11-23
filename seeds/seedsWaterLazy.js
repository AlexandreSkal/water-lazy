[{
    "timestamp": {
        "$date": {
            "$numberLong": "1669210315999"
        }
    },
    "metadata": {
        "location": "yard",
        "sensorId": 9999,
        "type": "humidity"
    },
    "humidity": 78
},
{
    "timestamp": {
        "$date": {
            "$numberLong": "1669210316999"
        }
    },
    "metadata": {
        "location": "yard",
        "sensorId": 9999,
        "type": "humidity"
    },
    "humidity": 78
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
