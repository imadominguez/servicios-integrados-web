import { Navbar } from '@/components/navbar/navbar';
import { About } from '@/components/pages/home/about';
import { Carrousel } from '@/components/pages/home/carrousel';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-[2000px] mx-auto">
        <Carrousel />
        <div className="grid md:grid-cols-3 p-20 py-12 px-5 bg-muted-foreground/5 gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="grid place-content-center text-center"
          >
            <h2 className=" font-bold">Envíos</h2>
            <p className="opacity-90 text-sm">
              Realizamos envíos a todo el país.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="grid place-content-center text-center"
          >
            <h2 className=" font-bold">Métodos de envío</h2>
            <p className="opacity-90 text-sm">
              Envíos a través de Correo Argentino.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="grid place-content-center text-center"
          >
            <h2 className=" font-bold">Métodos de pago</h2>
            <p className="opacity-90 text-sm">Podés pagar en hasta 12 cuotas</p>
          </div>
        </div>
        <About />

        <a href="/auth/login">ingresar</a>
      </div>
    </>
  );
}
