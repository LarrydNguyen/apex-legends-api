const express = require('express')
const app = express()
const PORT = 8000

const apexLegends = {
    'Bloodhound':{
    'type': 'Technological Tracker',
    'birthname': 'Unknown',
    'birthLocation' : 'Talos'
    },
    'PATHFINDER':{
        'type': 'Forward Scout',
        'birthname': 'MRVN',
        'birthLocation' : 'He is trying to find out!'
    },
    'New Castle':{
        'type': 'Heroic Defender',
        'birthname': 'Jackson Williams',
        'birthLocation' : 'Gridiron'
    },
    'unknown':{
        'type': 'unknown',
        'birthname': 'unknown unknown',
        'birthLocation' : 'unknown'
    }
}



app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const legendName = request.params.name.toLowerCase()
    if (apexLegends[legendName]){
        response.json(apexLegends[legendName])
    }else{
        response.json(apexLegends['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

