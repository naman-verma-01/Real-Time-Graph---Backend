const graphData = require("../model/data")

const getData = async () => {
    let response = {}
    try {
        
        let data = await graphData.find()

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


const addData = async (bodyData) => {
    let response = {}
    try {
        let data = new graphData(bodyData)

        data = await data.save()

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


module.exports = { getData, addData }