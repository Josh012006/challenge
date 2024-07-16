const multer = require('multer');
const path = require('path');

// Configuration de stockage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/img"); // Remplacez 'uploads/' par votre chemin de stockage
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nom du fichier avec extension
    }
});

// Filtre pour les types de fichiers
const fileFilter = (req, file, cb) => {
    // Accepter uniquement les images
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non supporté'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
