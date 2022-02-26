const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


let players = [ 
    {
          
         "name": "manish",
         "dob": "1/1/1995",
         "gender":"male",
         "city": "jalandhar",
         "sports": [ " swimming"],
         "bookings": [

            {
                "bookingNumber":1,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "12345",
                "bookedOn":"31/08/2021",
                "bookedFor":" 01/09/2021"
            },
            {
                "bookingNumber":2,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "123456",
                "bookedOn":"31/08/2021",
                "bookedFor":" 03/09/2021"
            }

         ]
  },
 
 
  {
    "name": "Rajnish",
    "dob": "1/3/1998",
    "gender":"male",
    "city": "jalandhar",
    "sports": [ " swimming"],
    "bookings": [ ]

 },

  {

    "name": "ramu",
    "dob": "1/2/1999",
    "gender":"male",
    "city": "jalandhar",
    "sports": [ " swimming"],
    "bookings": [ ]




  }

]

let a = players.length;

// Part 1 ==> Add new player.

router.post('/player',function(req,res){

let ele = req.body.nplayer.name;
let ele1 = req.body.nplayer
for (let i=0;i<a;i++){
if(ele === players[i].name ){
    console.log(ele)
    res.send("player already exists")
    
   
}
else if (i === a-1){

    players.push(ele1)
    console.log(ele1)
    res.send({data :players , status : true})
   
}

}





})





module.exports = router;


