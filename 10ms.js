const { urlencoded } = require('express');
const express = require('express');
const app = express()
// const mysql = require('10ms')

app.use(urlencoded({extended: true}))
app.use(express.json())

// GET Endpoints Start //

// app.get('/user/:id', (req, res) => {
//     console.log("Fetching users with id: " + req.params.id)

//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         database: '10msEvents'
//     })

//     connection.query("SELECT * FROM users", (err, rows, fields) => {
//         console.log("Fetched Successfully")
//         res.json(rows)
    

//     })
// })


app.get('/EventList', function(req, res){
    res.send([

        {
            "events1":[
            {
            "id": 1,
            "title": "Demo Event 1",
            "start_at": "2022-11-17 12:00:00",
            "end_at": "2022-11-17 17:00:00"
            }
            ],
        
            "pagination1":{
            "total": 50,
            "per_page": 10,
            "total_pages": 5,
            "current_page": 1
            },
            
        
        
            "events2":[
            {
            "id": 2,
            "title": "Demo Event 2",
            "start_at": "2022-11-18 12:00:00",
            "end_at": "2022-11-18 17:00:00"
            }
            ],
        
            "pagination2":{
            "total": 50,
            "per_page": 10,
            "total_pages": 5,
            "current_page": 2
            },
        
        
            "events3":[
            {
            "id": 3,
            "title": "Demo Event 3",
            "start_at": "2022-11-19 12:00:00",
            "end_at": "2022-11-19 17:00:00"
            }
        
            ],
            "pagination3":{
            "total": 50,
            "per_page": 10,
            "total_pages": 5,
            "current_page": 3
            }
        }
        
])

})


app.get('/EventDetails1', function(req, res){
    res.send([

        {
            id: 1,
            title: "Demo Event 1",
            start_at: "2022-11-17 12:00:00",
            end_at: "2022-11-17 17:00:00",
            total_workshops: 30
            }
    ])
})

            app.get('/EventDetails2', function(req, res){
                res.send([
        {
            id: 2,
            title: "Demo Event 2",
            start_at: "2022-11-18 12:00:00",
            end_at: "2022-11-18 17:00:00",
            total_workshops: 20
            }
    ])
})

    app.get('/EventDetails3', function(req, res){
        res.send([    
        {
            id: 3,
            title: "Demo Event 3",
            start_at: "2022-11-19 12:00:00",
            end_at: "2022-11-19 17:00:00",
            total_workshops: 7
            }
        
])

})


app.get('/WSList', function(req, res){
    res.send([

        {
            id: 1,
            title: "Demo Event 1",
            start_at: "2022-11-17 12:00:00",
            end_at: "2022-11-17 17:00:00",
            workshops:[
            {
            id: 1,
            title: "Demo Workshop 1",
            description: "Demo Workshop 1 description",
            start_at: "2022-11-13 12:00:00",
            end_at: "2022-11-13 15:00:00"
            }
            ]
            },
        {
            id: 2,
            title: "Demo Event 2",
            start_at: "2022-11-18 12:00:00",
            end_at: "2022-11-18 17:00:00",
            workshops:[
            {
            id: 2,
            title: "Demo Workshop 2",
            description: "Demo Workshop description",
            start_at: "2022-11-14 12:00:00",
            end_at: "2022-11-14 15:00:00"
            }
            ]
            },
        {
            id: 3,
            title: "Demo Event 3",
            start_at: "2022-11-19 12:00:00",
            end_at: "2022-11-19 17:00:00",
            workshops:[
            {
            id: 3,
            title: "Demo Workshop 3",
            description: "Demo Workshop description",
            start_at: "2022-11-15 12:00:00",
            end_at: "2022-11-15 15:00:00"
            }
            ]
            }
        
])

})


app.get('/WSDetails1', function(req, res){
    res.send([

        {
            id: 1,
            title: "Demo Workshop 1",
            description: "This is demo workshop 1",
            start_at: "2022-11-13 12:00:00",
            end_at: "2022-11-13 15:00:00",
            total_reservations: 100
            }
])

})

app.get('/WSDetails2', function(req, res){
    res.send([
        {
            id: 2,
            title: "Demo Workshop 2",
            description: "This is demo workshop 2",
            start_at: "2022-11-14 12:00:00",
            end_at: "2022-11-14 15:00:00",
            total_reservations: 200
            }
])

})

app.get('/WSDetails3', function(req, res){
        res.send([
        {
            id: 3,
            title: "Demo Workshop 3",
            description: "This is demo workshop 3",
            start_at: "2022-11-15 12:00:00",
            end_at: "2022-11-15 15:00:00",
            total_reservations: 300
            }
       
        
])

})

// GET Endpoints End //


// POST Endpoints Start //

app.post('/WS_Res1', function(req, res){
    res.send([
        {
            reservation: {
            id: 1,
            name: "Sakib Faiyaz",
            email: "sakib_faiyaz@gmail.com"
            },
            event:{
            id: 1,
            title: "Demo Event 1",
            start_at: "2022-11-17 12:00:00",
            end_at: "2022-11-17 17:00:00",
            },
            workshop:{
            id: 1,
            title: "Demo Workshop 1",
            description: "Demo Workshop description 1",
            start_at: "2022-11-13 12:00:00",
            end_at: "2022-11-13 15:00:00"
            }
        }
    ])
})

app.post('/WS_Res11', function(req, res){
    res.send([
        {
            reservation: {
            id: 1,
            name: "Sakib Faiyaz",
            email: "sakib_faiyaz@gmail.com"
            },
            event:{
            id: 2,
            title: "Demo Event 2",
            start_at: "2022-11-18 12:00:00",
            end_at: "2022-11-18 17:00:00",
            },
            workshop:{
            id: 2,
            title: "Demo Workshop 2",
            description: "Demo Workshop description 2",
            start_at: "2022-11-14 12:00:00",
            end_at: "2022-11-14 15:00:00"
            }
        }
    ])
})
app.post('/WS_Res111', function(req, res){
    res.send([
        {
            reservation: {
            id: 1,
            name: "Sakib Faiyaz",
            email: "sakib_faiyaz@gmail.com"
            },
            event:{
            id: 3,
            title: "Demo Event 3",
            start_at: "2022-11-19 12:00:00",
            end_at: "2022-11-19 17:00:00",
            },
            workshop:{
            id: 3,
            title: "Demo Workshop 3",
            description: "Demo Workshop description 3",
            start_at: "2022-11-15 12:00:00",
            end_at: "2022-11-15 15:00:00"
            }
        }
    ])
})


app.post('/WS_Res2', function(req, res){
    res.send([
        {
            reservation: {
            id: 2,
            name: "Jabir Misbah",
            email: "jabir_misbah@gmail.com"
            },
            event:{
            id: 1,
            title: "Demo Event 1",
            start_at: "2022-11-17 12:00:00",
            end_at: "2022-11-17 17:00:00",
            },
            workshop:{
            id: 1,
            title: "Demo Workshop 1",
            description: "Demo Workshop description 1",
            start_at: "2022-11-13 12:00:00",
            end_at: "2022-11-13 15:00:00"
            }
        }
    ])
})
app.post('/WS_Res22', function(req, res){
    res.send([
        {
            reservation: {
            id: 2,
            name: "Jabir Misbah",
            email: "jabir_misbah@gmail.com"
            },
            event:{
            id: 2,
            title: "Demo Event 2",
            start_at: "2022-11-18 12:00:00",
            end_at: "2022-11-18 17:00:00",
            },
            workshop:{
            id: 2,
            title: "Demo Workshop 2",
            description: "Demo Workshop description 2",
            start_at: "2022-11-14 12:00:00",
            end_at: "2022-11-14 15:00:00"
            }
        }
    ])
})
app.post('/WS_Res222', function(req, res){
    res.send([
        {
            reservation: {
            id: 2,
            name: "Jabir Misbah",
            email: "jabir_misbah@gmail.com"
            },
            event:{
            id: 3,
            title: "Demo Event 3",
            start_at: "2022-11-19 12:00:00",
            end_at: "2022-11-19 17:00:00",
            },
            workshop:{
            id: 3,
            title: "Demo Workshop 3",
            description: "Demo Workshop description 3",
            start_at: "2022-11-15 12:00:00",
            end_at: "2022-11-15 15:00:00"
            }
        }
    ])
})


app.post('/WS_Res3', function(req, res){
    res.send([
        {
            reservation: {
            id: 3,
            name: "Faiyaz Jahin",
            email: "faiyaz_jahin@gmail.com"
            },
            event:{
            id: 1,
            title: "Demo Event 1",
            start_at: "2022-11-17 12:00:00",
            end_at: "2022-11-17 17:00:00",
            },
            workshop:{
            id: 1,
            title: "Demo Workshop 1",
            description: "Demo Workshop description 1",
            start_at: "2022-11-13 12:00:00",
            end_at: "2022-11-13 15:00:00"
            }
        }
            
        ])
})
app.post('/WS_Res33', function(req, res){
    res.send([
        {
            reservation: {
            id: 3,
            name: "Faiyaz Jahin",
            email: "faiyaz_jahin@gmail.com"
            },
            event:{
            id: 2,
            title: "Demo Event 2",
            start_at: "2022-11-18 12:00:00",
            end_at: "2022-11-18 17:00:00",
            },
            workshop:{
            id: 2,
            title: "Demo Workshop 2",
            description: "Demo Workshop description 2",
            start_at: "2022-11-14 12:00:00",
            end_at: "2022-11-14 15:00:00"
            }
        }
            
        ])
})
app.post('/WS_Res333', function(req, res){
    res.send([
        {
            reservation: {
            id: 3,
            name: "Faiyaz Jahin",
            email: "faiyaz_jahin@gmail.com"
            },
            event:{
            id: 3,
            title: "Demo Event 3",
            start_at: "2022-11-19 12:00:00",
            end_at: "2022-11-19 17:00:00",
            },
            workshop:{
            id: 3,
            title: "Demo Workshop 1",
            description: "Demo Workshop description 1",
            start_at: "2022-11-15 12:00:00",
            end_at: "2022-11-15 15:00:00"
            }
        }
            
        ])
})




app.listen(5000, () => console.log('App is running in port 5000'))