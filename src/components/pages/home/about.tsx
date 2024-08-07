export const About = () => {
  return (
    <div className="grid place-content-center bg-muted-foreground/10 p-10 py-20 pb-10 text-center">
      <h3
        data-aos="fade-up"
        data-aos-duration="500"
        className="mb-10 text-center text-xl font-semibold text-primary md:text-3xl lg:text-4xl xl:text-4xl"
      >
        Sobre Nosotros
      </h3>

      <p
        data-aos="fade-up"
        data-aos-duration="900"
        className="my-5 mb-20 max-w-4xl leading-7 tracking-normal"
      >
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
