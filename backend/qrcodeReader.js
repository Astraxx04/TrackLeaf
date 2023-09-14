const QRCode = require('qrcode');

const data = {
    name: "Bench",
    price: 100
};

const filename = "myQRCode.png";

const jsonData = JSON.stringify(data);

QRCode.toFile(filename, jsonData, {
  errorCorrectionLevel: 'H'
}, function(err) {
  if (err) throw err;
  console.log('QR code saved as ' + filename);
});
