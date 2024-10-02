const Photo = require("../models/PhotoModel");

exports.photoUpload = async (req, res) => {
  try {
    const file = {
      base64: Buffer.from(req.file.buffer).toString("base64"),
      name: req.file.originalname,
    };

    const photo = new Photo({ file: file.base64, name: file.name });
    await photo.save();
    res.status(200).json({ message: "Imagen salva com sucesso." });
  } catch (e) {
    res.status(500).json({ message: "Erro ao salvar imagem.", Erro: e });
  }
};

exports.findAll = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json({ photos });
  } catch (e) {
    res.status(500).json({ message: "Erro ao buscar imagens" });
  }
};
