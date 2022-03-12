let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getSessionsByDistId = async function (req,res){
    try{
        let districtId = req.query.district_id
        let date = req.query.date;
        console.log(districtId)
        console.log(date)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        let data =  result.data
        res.status(200).send({msg: result.data} )
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
}
}

let getWeatherByCity = async function(req,res){
    try{
        let city = req.query
        let appid = req.query.appid
        console.log(city)
        console.log(appid)
        var options = {
            method: "get",
            url : `http://api.openweathermap.org/data/2.5/weather?city=${city}&appid=${appid}`
        }
    
        let result = await axios(options)
        console.log(result.data)
        let data = result.data
        res.status(200).send({msg: result.data})
        }
    
        catch(err){
            console.log(err)
            res.status(500).send({msg:err.message})

        }
    }

    let getTemperature = async function (req,res){
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let id = req.query.id;
        console.log(id)
        let resultTemp = []
        
        for (let i = 0; i < cities.length; i++) {
        
        
            let option = {
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
                
            }
            let result = await axios(option);
            let tempResult = result.data.main.temp;
            resultTemp.push(tempResult);
        
            
        }
        let sortedTemp = resultTemp.sort((a,b)=>a-b)
        res.status(200).send(sortedTemp);
        }



        let getDrakeBabaMeme = async function (req, res) {
            try {
                
                var options = {
                    method: "post",
                    url: `https://api.imgflip.com/caption_image`,
                }
                let result = await axios(options)
                res.status(200).send(result.data)
                }
                catch(err){
                    console.log(err)
                    res.status(500).send({msg:err.message})
        
                }

                }









    
    // let getTemp = async function(req,res){
    //     try{
    //         //let q = "London"
    //         let id = req.query.id
    //         var resultTemp = []
    //         var resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?&appid=${id}`)
            
    //         var tempResult = resp.data.main.temp
    //         resultTemp.push(tempResult)
    //         console.log(resultTemp)
    //         res.status(200).send({msg: resultTemp.data})

        
    //     }
    //     catch(err){
    //         console.log(err)
    //         res.status(500).send({msg:err.message})
    //     }
    // }



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getSessionsByDistId = getSessionsByDistId
module.exports.getWeatherByCity = getWeatherByCity
module.exports.getTemperature = getTemperature
module.exports.getDrakeBabaMeme = getDrakeBabaMeme