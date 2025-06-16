const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
// const user1 = new User({name: "adam", email: "adam@yahoo.in", age: 48});
// user1.save();

// User.insertMany([
//     {name: "tony", email: "tony@gmail.com", age: 50},
//     {name: "peter", email: "peter@gmail.com", age: 30},
//     {name: "bruce", email: "bruce@gmail.com", age: 47}
// ]).then(res => console.log(res));


// User.findById('684fd38b4bb731d45b5611fa')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.updateOne({name: 'bruce'}, {age: 49})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.findByIdAndUpdate('684fd38b4bb731d45b5611fc', {age: 30}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.deleteMany({name:'adam'})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });  

// User.findOneAndDelete({name: 'peter'})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });  


User.insertOne({name: 'rahul', age: 19});