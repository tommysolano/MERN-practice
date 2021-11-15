require("dotenv").config()

const productsData = require("./data/products")
const connectDB = require("./config/db")
const Product = require("./models/products")

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({})

        await Product.insertMany(productsData)

        console.log("Data Import success")
        
        process.exit()
    } catch (error) {
        console.error("Error importing")

        process.exit(1)
    }
}

importData()