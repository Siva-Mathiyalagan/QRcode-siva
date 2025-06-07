import { useState } from "react";

export const Qrcode = () => {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrdata, setQrdata] = useState("Siva");
  const [qrsizeInput, setQrsizeInput] = useState("150"); // input field
  const [qrsize, setQrsize] = useState("150"); // applied when Generate is pressed

  async function genqr() {
    if (!/^\d+$/.test(qrsizeInput)) {
      alert("Please enter a valid numeric size.");
      return;
    }

    setLoad(true);
    try {
      setQrsize(qrsizeInput); // Apply the input size
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsizeInput}x${qrsizeInput}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    } catch (error) {
      console.error("Error while generating QR code", error);
    } finally {
      setLoad(false);
    }
  }

  function downloadQR() {
    if (img) {
      const link = document.createElement("a");
      link.href = img;
      link.download = "qrcode.png";
      link.click();
    }
    fetch(img).then((Response)=>Response.blob()).then((blob)=>{
        const link =document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="QRcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch((error)=> {
        console.error("Error in downloading QR code",error);
        
    })
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>

      {img && (
        <img
          src={img}
          alt="QR Code"
          style={{ height: `${qrsize}px`, width: `${qrsize}px` }}
          className="qr-image"
        />
      )}

      {load && <p>Please wait...</p>}

      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrdata}
          placeholder="Enter data for QR code"
          onChange={(e) => setQrdata(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input
          type="text"
          id="sizeInput"
          value={qrsizeInput}
          placeholder="Enter image size"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) setQrsizeInput(value);
          }}
        />

        <button className="gen-button" disabled={load} onClick={genqr} disabled={load}>
          Generate QR Code
        </button>
        <button className="dow-button" onClick={downloadQR} disabled={!img}>
          Download QR Code
        </button>

        <p className="footer">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/sivaranjan-mathiyalagan/"
            target="_blank"
            rel="noreferrer"
          >
            Siva
          </a>
        </p>
      </div>
    </div>
  );
};
