import qrCode from "@/assets/qr-code.png";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">PITTURA NOSTRA</p>
          <div className="flex justify-center my-4">
            <img 
              src={qrCode}
              alt="QR Code PITTURA NOSTRA"
              className="w-28 h-28 rounded-lg bg-white p-2"
            />
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} PITTURA NOSTRA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
