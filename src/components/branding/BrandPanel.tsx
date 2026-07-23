import { Logo } from "./Logo";
import { Slogan } from "./Slogan";
import { BrandFooter } from "./BrandFooter";

export function BrandPanel() {
  return (
    <div className="
    flex h-full flex-col justify-between
    bg-gradient-to-br
    from-slate-950
    via-slate-900
    to-blue-950
    text-white
    px-14
    py-8
    relative
    overflow-hidden">
    
    {/* Luz superior izquierda */}
    <div
    className="
        absolute
        -top-56
        -left-56
        h-[700px]
        w-[700px]
        rounded-full
        bg-blue-500/10
        blur-[120px]
        pointer-events-none
    "
    />

    {/* Luz inferior derecha */}
    <div
    className="
        absolute
        -bottom-52
        -right-52
        h-[600px]
        w-[600px]
        rounded-full
        bg-cyan-400/10
        blur-[120px]
        pointer-events-none
    "
    />  
      <div className="relative z-10 space-y-6">
        <Logo size="xl" />

        <Slogan />

        <p className="max-w-md text-base opacity-90">
          Organiza tus relaciones, acompaña a tus clientes e impulsa el
          crecimiento de tu negocio con una plataforma moderna preparada para
          Inteligencia Artificial.
        </p>

        <ul className="space-y-1 text-sm opacity-90">
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