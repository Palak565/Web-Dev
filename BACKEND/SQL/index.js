const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'plk94161'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password()
  ];
}


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }


app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            let count = result[0]['COUNT(*)'];
            res.render("home.ejs", {count});
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});


app.get("/user", (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            let data = result;
            res.render("users.ejs", {data});
        })
    } catch (err) {
        console.log(err);
        res.send("Some error occurred");
    }
});

//Edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = "SELECT * FROM user WHERE id = ?";
    try {
        connection.query(q, id, (err, result) => {
            if (err) {
                throw err;
            }
            let user = result[0];
            console.log(result);
            res.render("edit.ejs", {user});
        })
    } catch (err) {
        console.log(err);
        res.send("Some error occurred");
    }
});


//Update (DB) route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong password");
            } else {
                let q2 =`UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query (q2, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    res.redirect("/user");
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.send("Some error occurred");
    }
});

app.get("/user/newuser", (req, res) => {
    res.render("new.ejs");
});

app.listen (port, () => {
    console.log("Server is listening to port 8080");
});

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

// connection.end();