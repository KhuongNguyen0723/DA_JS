module.exports = { 
    multipleDataToObject: function (mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    dataToObject: function (mongoose){
        return mongoose? mongoose.toObject():mongoose
    }
}