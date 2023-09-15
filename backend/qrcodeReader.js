const qr = require('qrcode');
const { v4: uuidv4 } = require('uuid');

// Function to generate unique IDs
function generateUniqueIDs(count) {
  const uniqueIDs = [];
  for (let i = 0; i < count; i++) {
    uniqueIDs.push(uuidv4());
  }
  return uniqueIDs;
}

// Function to generate QR codes as base64-encoded images with unique IDs
async function generateQRCodeImagesWithUniqueIDs(count) {
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

const numberOfQRcodes = 3;
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