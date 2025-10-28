import Autor from "../models/schemaAutor.js";
import { autorSchema } from "../validations/validarAutor.js";

// Crear Autor
const agregarAutor = async (req, res) => {
  try {
    const { error } = autorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { nombre, nacionalidad, fechaNacimiento } = req.body;
    const nuevoAutor = new Autor({ nombre, nacionalidad, fechaNacimiento });
    await nuevoAutor.save();

    res.status(201).json(nuevoAutor);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el autor", error });
  }
};

// Obtener todos los autores
const consultarAutores = async (req, res) => {
  try {
    const autores = await Autor.find();
    console.error(`esto retorno la busqueda de los Autores ::: ${autores}`);
    res.json(autores);
  } catch (error) {
    console.log(`Error al consultar los autores :: ${error}`);
    res.status(500).json({
      message: "Error al consultar los autores ::",
      error: error.message,
    });
  }
};

//  Actualizar Autor con validación Joi
const actualizarAutor = async (req, res) => {
  try {
    const { id } = req.params;

    //  Validar datos antes de actualizar
    const { error } = autorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { nombre, nacionalidad, fechaNacimiento } = req.body;

    const autorActualizado = await Autor.findByIdAndUpdate(
      id,
      { nombre, nacionalidad, fechaNacimiento },
      { new: true }
    );

    if (!autorActualizado) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.status(200).json(autorActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el autor", error });
  }
};

// Eliminar Autor
const eliminarAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const autorEliminado = await Autor.findByIdAndDelete(id);

    if (!autorEliminado) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.status(200).json({ message: "Autor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el autor", error });
  }
};

//  Exportar funciones
export default{
  agregarAutor, 
  consultarAutores, 
  actualizarAutor, 
  eliminarAutor 
};
