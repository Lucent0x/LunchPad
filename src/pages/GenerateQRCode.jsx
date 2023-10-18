import React, { useState, useEffect } from 'react';


const GenerateQRCode = () => {
  const [qrCode, setQRCode] = useState('');

  const fetchQRCode = async () => {
    const response = await fetch('/generate-qr-code');
    const data = await response.json();

    setQRCode(data.qrCode);
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={fetchQRCode}>
        Generate QR Code
      </Button>
      <QRCode value={qrCode} />
    </div>
  );
};

export default GenerateQRCode;
