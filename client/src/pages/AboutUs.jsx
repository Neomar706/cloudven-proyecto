
export const AboutUs = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/best-vps.jpg)' }}>
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
        <div className="bg-white/70 p-8 rounded-xl shadow-lg max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">¿Quiénes Somos?</h1>
          <p className="text-lg text-gray-700">
            En CloudVen Solutions nos especializamos en el desarrollo de aplicaciones innovadoras y servicios VPS de alta calidad. Nuestro equipo de expertos trabaja con pasión para brindar soluciones tecnológicas de vanguardia que impulsan el éxito de nuestros clientes.
          </p>
          <p className="mt-4 text-gray-600">
            Nuestra misión es ofrecer soluciones escalables y de alto rendimiento, adaptadas a las necesidades del mercado actual.
          </p>
        </div>
      </div>
    </div>
  );
};
