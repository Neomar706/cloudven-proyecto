import vpsImg from '../assets/images/vps-hosting.jpg';


export const Home = () => {
    return (
        <>
            <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(/images/vps-hosting.jpg)` }}>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <img src={vpsImg} alt="VPS Hosting" className="object-cover object-center h-full w-full" />
                </div>
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                    <h1 className="text-2xl px-10 md:px-0 md:text-5xl text-white font-bold text-center">Desarrollamos aplicaciones innovadoras y brindamos servicios VPS de alta calidad</h1>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Servidores Privados Virtuales (VPS)</h2>
                        <p>Ofrecemos soluciones escalables y confiables de hosting en la nube con planes desde $15/mes, ideales para alojar aplicaciones web, sistemas empresariales y plataformas de software.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Desarrollo de Software y Aplicaciones Web</h2>
                        <p>Creación de sitios web responsivos, optimizados para SEO y adaptados a las necesidades del cliente, con precios desde $500 por proyecto.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Desarrollo de Videojuegos y Aplicaciones Móviles</h2>
                        <p>Soluciones innovadoras en entretenimiento y productividad, con desarrollo de videojuegos y aplicaciones móviles/escritorio desde $1,000 por proyecto.</p>
                    </div>
                </div>
            </section>
        </>
    );
};
