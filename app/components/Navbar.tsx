import { ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="Navbar grid grid-cols-11 pt-4 pb-4">
      <div className="col-start-2 col-end-2">
        <img src="/favicon.ico" alt="Logo" className="h-[40px] w-[40px]" />
      </div>
      <div className="col-start-4 col-end-8"></div>
      <div className="col-start-9 col-end-11 flex items-center">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* CARRITO - Acción principal */}
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm">
            <ShoppingCart size={20} />
            <span>Carrito</span>
          </button>
          {/* INICIAR - Acción secundaria */}
          <button className="flex items-center gap-2 bg-white hover:bg-gary-600 hover:text-black text-green-700 px-4 py-2 rounded-lg font-medium border-2 border-green-600 transition-all">
            <User size={20} />
            <span>Iniciar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
