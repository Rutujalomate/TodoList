const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const ItemRoutes=require("./routes/itemRoutes")
const UserRoutes=require("./routes/userRoutes")

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/task",ItemRoutes)
app.use("/api/user",UserRoutes)

app.listen(8080,()=>console.log("app running on port 8080"))