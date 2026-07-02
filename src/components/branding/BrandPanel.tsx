import { Logo } from "./Logo";
import { Slogan } from "./Slogan";
import { BrandFooter } from "./BrandFooter";

export function BrandPanel() {
  return (
    <div className="flex h-full flex-col justify-between bg-primary px-10 py-12 text-primary-foreground">
      <div className="space-y-8">
        <Logo size="lg" />

        <Slogan />

        <p className="max-w-md text-lg opacity-90">
          Organiza tus relaciones, acompaña a tus clientes e impulsa el
          crecimiento de tu negocio con una plataforma moderna preparada para
          Inteligencia Artificial.
        </p>

        <ul className="space-y-2 text-sm opacity-90">
          <li>✓ CRM Inteligente</li>
          <li>✓ Automatización</li>
          <li>✓ Integración con WhatsApp</li>
          <li>✓ IA (Próximamente)</li>
        </ul>
      </div>

      <BrandFooter />
    </div>
  );
}