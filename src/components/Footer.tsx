export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">PITTURA NOSTRA</p>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-muted-foreground">Tous les Produits Décoratifs</p>
          <p className="text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} PITTURA NOSTRA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
