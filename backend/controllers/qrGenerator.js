const qr = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require("../errors");

// Function to generate unique IDs
const generateUniqueIDs = (count) => {
    const uniqueIDs = [];
    for (let i = 0; i < count; i++) {
        uniqueIDs.push(uuidv4());
    }
    return uniqueIDs;
}

// Function to generate QR codes as base64-encoded images with unique IDs
const generateQRCodeImagesWithUniqueIDs = async(count) => {
    const uniqueIDs = generateUniqueIDs(count);
    const qrCodeImages = [];

    for (const uniqueID of uniqueIDs) {
        try {
            const qrCodeDataURL = await qr.toDataURL(uniqueID);
            qrCodeImages.push(qrCodeDataURL);
        } catch (error) {
            console.error(`Error generating QR code for "${uniqueID}":`, error);
        }
    }
    return qrCodeImages;
}

generateQRCodeImagesWithUniqueIDs(numberOfQRcodes)
    .then((qrCodeImages) => {
        // qrCodeImages is an array of base64-encoded QR code images with unique IDs
        qrCodeImages.forEach((qrCodeDataURL, index) => {
            console.log(`Base64-encoded QR code with unique ID "${generateUniqueIDs(1)[0]}":`);
            console.log(qrCodeDataURL);
        });
    })
    .catch((error) => {
        console.error('Error generating QR codes:', error);
});

const getNumberOfQrCodes = async(req, res) => {
    const { numberOfQrCodes } = req.body;
    res.status(200).json({ numberOfQrCodes });
}

module.exports = { generateQRCodeImagesWithUniqueIDs, getNumberOfQrCodes };