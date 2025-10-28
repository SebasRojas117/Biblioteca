import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Libreria", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Conexión fallida a MongoDB:", error);
  }
};

export default conectarDB;
