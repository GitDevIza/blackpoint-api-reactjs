const express = require('express');
const Path = require('path');
const Fs = require('fs-extra');

const imagesViewer = async (req, res) => {
		const imageView = req.params.img;
		const pathImage = Path.resolve(__dirname, `../src/images/${imageView}`);
		if(await Fs.existsSync(pathImage)){
			res.sendFile(pathImage);
		}else{
			res.send('no se encontró la imagen requerida en la ruta especificada '+ pathImage);
		}
}

// const viewImage = (req, res) => {
// 	res.send(require(`../src/images/${req.params.img}`));
// }

module.exports = {imagesViewer};