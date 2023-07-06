const { mongoose } = require("mongoose")

const graphDataSchema = new mongoose.Schema({
    value: {
        type: Number
    },
    time: {
        type: Number
    }

}, { timestamp: true }

);


const graphData = mongoose.model('graphData', graphDataSchema);
module.exports = graphData