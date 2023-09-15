import React from 'react';
import { jsPDF } from 'jspdf';

const QRGenerator = ({ hexImages }) => {
  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;
  const IMAGE_WIDTH = 50;
  const IMAGE_HEIGHT = 50;
  const IMAGES_PER_ROW = Math.floor(PAGE_WIDTH / IMAGE_WIDTH);
  const handlePrintClick = () => {
    const doc = new jsPDF();

    let rowIndex = 0;
    let colIndex = 0;
    let currentY = 10;

    hexImages.forEach((hex, index) => {
      if (colIndex >= IMAGES_PER_ROW) {
        colIndex = 0;
        rowIndex++;
        currentY += IMAGE_HEIGHT;
      }

      if (currentY + IMAGE_HEIGHT > PAGE_HEIGHT) {
        rowIndex = 0;
        currentY = 10;
        doc.addPage();
      }

      const x = colIndex * IMAGE_WIDTH + 10;
      const y = currentY;

      const imgData = hexToDataURL(hex);
      doc.addImage(imgData, 'PNG', x, y, IMAGE_WIDTH, IMAGE_HEIGHT);

      colIndex++;
    });

    // Save or print the PDF
    doc.save('QR.pdf');
  };

  const hexToDataURL = (hex) => {
    const cleanedHex = hex.startsWith('0x') ? hex.slice(2) : hex;
    return `data:image/png;base64,${cleanedHex}`;
  };

  return (

    <div className='flex flex-wrap gap-4'>
      {hexImages.map((hex, index) => (
        <img
          className='h-32 w-32 object-cover'
          src={hexToDataURL(hex)}
          alt={`Image ${index}`}
        />
      ))}
      <div className='flex'>
        <button className='bg-green-400 border-solid border-2 border-black rounded-lg' onClick={handlePrintClick}>Print</button>
      </div>
    </div>
  );
};

export default QRGenerator;
