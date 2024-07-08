import React from 'react';

export const About = () => {
  return (
    <div className="p-10 grid place-content-center text-center py-20 pb-10">
      <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-semibold text-primary mb-10">
        Sobre Nosotros
      </h3>

      <p className="mb-20 my-5 max-w-4xl leading-7 tracking-normal">
        Descubre nuestra plataforma integral que ofrece servicios expertos en
        calefacción, seguridad y computación. Desde instalaciones de sistemas de
        calefacción eficientes hasta soluciones de seguridad avanzadas y
        servicios de informática personalizados, estamos aquí para cubrir todas
        tus necesidades. Confía en nosotros para garantizar un hogar seguro,
        cálido y tecnológicamente avanzado.
      </p>
      {/* <Separator orientation="horizontal" /> */}
    </div>
  );
};
