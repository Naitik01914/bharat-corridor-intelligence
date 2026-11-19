import QrStudio from "../components/QrStudio.jsx";

export default function QrPage() {
  return (
    <article className="page qr-page">
      <header className="page-intro no-print">
        <p className="eyebrow">Sticker</p>
        <h1>QR code</h1>
        <p className="prose">
          Generate the code for the physical map, then download a PNG or SVG, or print the sheet.
          The encoded address is always the public /scan page.
        </p>
      </header>
      <QrStudio />
    </article>
  );
}
