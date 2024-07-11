import { Navbar } from '@/components/navbar/navbar';
import { About } from '@/components/pages/home/about';
import { Carrousel } from '@/components/pages/home/carrousel';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[2000px]">
        <Carrousel />
        <div className="grid gap-10 bg-muted-foreground/5 p-20 px-5 py-12 md:grid-cols-3">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="grid place-content-center text-center"
          >
            <h2 className="font-bold">Envíos</h2>
            <p className="text-sm opacity-90">
              Realizamos envíos a todo el país.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="grid place-content-center text-center"
          >
            <h2 className="font-bold">Métodos de envío</h2>
            <p className="text-sm opacity-90">
              Envíos a través de Correo Argentino.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="grid place-content-center text-center"
          >
            <h2 className="font-bold">Métodos de pago</h2>
            <p className="text-sm opacity-90">Podés pagar en hasta 12 cuotas</p>
          </div>
        </div>
        <About />

        <section className="mx-auto max-w-[2000px]">
          <h2 className="mt-10 text-center text-3xl font-bold">
            Conocé nuestros productos
          </h2>

          <div>
            <article className="grid grid-cols-2 gap-4 px-5 md:grid-cols-2 lg:grid-cols-4">
              <a href="#" className="group block overflow-hidden">
                <div className="relative h-[350px] sm:h-[450px]">
                  <Image
                    width={200}
                    height={200}
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <Image
                    width={200}
                    height={200}
                    src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="relative pt-3">
                  <h3 className="text-sm group-hover:underline group-hover:underline-offset-4">
                    Limited Edition Sports Trainer
                  </h3>

                  <p className="mt-1.5 tracking-wide">$189.99</p>
                </div>
              </a>
              <a href="#" className="group block overflow-hidden">
                <div className="relative h-[350px] sm:h-[450px]">
                  <Image
                    width={200}
                    height={200}
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <Image
                    width={200}
                    height={200}
                    src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="relative pt-3">
                  <h3 className="text-sm group-hover:underline group-hover:underline-offset-4">
                    Limited Edition Sports Trainer
                  </h3>

                  <p className="mt-1.5 tracking-wide">$189.99</p>
                </div>
              </a>
              <a href="#" className="group block overflow-hidden">
                <div className="relative h-[350px] sm:h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="relative pt-3">
                  <h3 className="text-sm group-hover:underline group-hover:underline-offset-4">
                    Limited Edition Sports Trainer
                  </h3>

                  <p className="mt-1.5 tracking-wide">$189.99</p>
                </div>
              </a>
              <a href="#" className="group block overflow-hidden">
                <div className="relative h-[350px] sm:h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="relative pt-3">
                  <h3 className="text-sm group-hover:underline group-hover:underline-offset-4">
                    Limited Edition Sports Trainer
                  </h3>

                  <p className="mt-1.5 tracking-wide">$189.99</p>
                </div>
              </a>
              {/* <div className="flex flex-col items-center">
                <Image
                  src="/imgs/1.png"
                  width={200}
                  height={200}
                  alt="imagen"
                  className="w-full h-80 object-contain"
                />
                <h3 className="text-center text-lg font-bold mt-2">
                  Producto 1
                </h3>
                <p className="text-center text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor, purus auctor.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/imgs/1.png"
                  alt="imagen"
                  width={200}
                  height={200}
                  className="w-fulll h-48 object-cover"
                />
                <h3 className="text-center text-lg font-bold mt-2">
                  Producto 1
                </h3>
                <p className="text-center text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor, purus auctor.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/imgs/1.png"
                  alt="imagen"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-cover"
                />
                <h3 className="text-center text-lg font-bold mt-2">
                  Producto 1
                </h3>
                <p className="text-center text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor, purus auctor.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/imgs/1.png"
                  alt="imagen"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-cover"
                />
                <h3 className="text-center text-lg font-bold mt-2">
                  Producto 1
                </h3>
                <p className="text-center text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor, purus auctor.
                </p>
              </div> */}
            </article>
          </div>
        </section>

        <a href="/auth/login">ingresar</a>
      </div>
    </>
  );
}
