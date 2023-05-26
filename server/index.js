const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");
const database = require("mysql");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");
const util = require("util");
const { application, request, response } = require("express");
const { error } = require("console");

// const dbHandler = require("");

const add = express();
add.use(cors());
add.use(fileUpload());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static("public"));

//connectivity with the database
let a = database.createConnection({
    host: "localhost",
    user: "root",
    password: "Lokesh@123",
    database: "clg_db"
});

a.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("db connected");
    }
});


//this api is used to register with a new user
add.post('/add', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let { firstName, lastName, dob, gender, email, phone, password } = request.body;
        console.log(request.body);
        console.log(typeof (request.body));
        if (Object.keys(request.body).length == 0) {

            console.log("failure")
            let s = { "status": "data_Missing" };
            response.send(s);

        } else {
            console.log("success")
            let sql = 'insert into clg_det(first_name,last_name,dob,gender,email,phone_number,password,status,effective_from,effective_to,created_by,created_on) values(?,?,?,?,?,?,?,"A",current_timestamp(),current_timestamp(),"lokesh",current_timestamp())';
            a.query(sql, [firstName, lastName, dob, gender, email, phone, password], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = {
                        "status": "200",
                        "message": "Registered successfully"
                    };
                    response.send(s);
                }
            })


        }

    } catch (error) {
        console.log(error);
    }

})



//this api is for Login it will check the database with email and password whether it is existing user or not 
add.post('/signin', (req, res) => {
    try {
        try {
            let { email, password } = req.body;
            console.log(email + "---" + password);
            let sql_query = 'select id, email, password, status from clg_det where email = ? and password = ? and status = "A"';
            a.query(sql_query, [email, password], (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    console.log('2');

                    if (result.length > 0) {
                        const user = result[0];
                        if (user.password === password) {

                            let msg = {
                                "message": "login successfully",
                                "userId": result[0].id
                            }
                            res.send(msg);
                        }
                    } else {
                        let msg = {
                            'mesasge': "user details not matched"
                        }
                        res.send(msg)
                    }
                }
            })
        } catch (app_error) {
            res.send(app_error)
        }
    } catch (system_error) {
        res.send(system_error)
    }

});

// engineering colllege
add.get('/engcollege', (request, response) => {

    let sql = 'select * from eng_clg where status ="A"'
    a.query(sql, (error, result) => {
        if (error) {
            let s = { "status": "error" };
            console.log(error);
        } else {
            let s = { "status": "success" };
            response.send(result);
        }
    })
})

//to view the details of Engineering college
add.get('/api/Engdata/:id', (req, res) => {
    const { id } = req.params;

    a.query('SELECT * FROM eng_clg WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching data details' });
        } else {
            if (results.length > 0) {
                const dataDetails = results[0];
                res.json(dataDetails);
            } else {
                res.status(404).json({ error: 'Data not found' });
            }
        }
    });
});

// arts colllege
add.get('/artscollege', (request, response) => {

    let sql = 'select * from arts_clg where status ="A"'
    a.query(sql, (error, result) => {
        if (error) {
            let s = { "status": "error" };
            console.log(error);
        } else {
            let s = { "status": "success" };
            response.send(result);
        }
    })
})

//to view the details of arts college
add.get('/api/Artsdata/:id', (req, res) => {
    const { id } = req.params;

    a.query('SELECT * FROM arts_clg WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching data details' });
        } else {
            if (results.length > 0) {
                const dataDetails = results[0];
                res.json(dataDetails);
            } else {
                res.status(404).json({ error: 'Data not found' });
            }
        }
    });
});

// admin panel
add.get('/artscollege', (request, response) => {

    let sql = 'select * from arts_clg where status ="A"'
    a.query(sql, (error, result) => {
        if (error) {
            let s = { "status": "error" };
            console.log(error);
        } else {
            let s = { "status": "success" };
            response.send(result);
        }
    })
})

add.get('/scheduleJob', (request, response) => {
    try {
        try {
            console.log("success")
            schedule.scheduleJob('3 * * * * *', () => {
                let sql = 'select first_name,last_name,gender,email from clg_det where status="A"'
                a.query(sql, (error, result) => {
                    if (error) {
                        let s = { "status": "error" };
                        console.log(error);
                    } else {
                        let s = { "status": "success" };
                        console.log(result);
                    }

                })
            })
            response.send("working")
        } catch (app_error) {
            response.send(app_error);
        }
    } catch (system_error) {
        response.send(system_error);
    }
})



add.listen(50, () => {
    console.log('server is running on 50 port');
})