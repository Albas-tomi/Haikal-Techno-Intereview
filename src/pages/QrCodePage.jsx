/* eslint-disable no-unused-vars */
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

const QrCodePage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-xl font-semibold">Scan My Barcode </h1>
      <QRCodeSVG
        value="https://haikal-techno-intereview.vercel.app/"
        size={254}
      />
    </div>
  );
};

export default QrCodePage;
