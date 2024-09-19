import React from 'react';
import '../index.css';
import img from '../images/telemarketing.svg'; 
import img2 from '../images/sms.svg';
import img3 from '../images/email.svg';
import img4 from '../images/socialmedia.svg';
import img5 from '../images/supply.svg';
import img6 from '../images/assess.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-purple-900 uppercase font-bold">servicios</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-purple-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-purple-900">Estamos profundamente comprometidos con el crecimiento y éxito su negocio.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center text-purple-900">Telemarketing</h2>
                                    <p className="text-md font-medium"> 
                                    Programamos citas mediante telemarketing efectivo, conectando directamente con clientes potenciales en tiempo real. Nuestro enfoque es ideal para industrias donde el contacto directo y la generación de confianza son clave para cerrar negocios. Nos especializamos en llegar a la comunidad latina, asegurando que cada cita sea altamente calificada y relevante.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center text-purple-900">SMS</h2>
                                    <p className="text-md font-medium">
                                    Utilizamos SMS para confirmar citas y mantener una comunicación ágil con clientes potenciales. Este método es ideal para industrias que requieren actualizaciones rápidas. Al enfocarnos en la comunidad latina, aseguramos que nuestros mensajes sean culturalmente relevantes, maximizando la tasa de respuesta y manteniendo a los clientes informados y comprometidos.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center text-purple-900">Correo Electrónico</h2>
                                    <p className="text-md font-medium">
                                    Utilizamos el correo electrónico para coordinar y confirmar citas, asegurando un proceso fluido y bien organizado. Este método es ideal para industrias donde la programación precisa y la comunicación clara son esenciales. Nos especializamos en contactar con la comunidad latina, garantizando que cada mensaje esté adaptado culturalmente y que cada cita se confirme con éxito.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center text-purple-900">Redes Sociales</h2>
                                    <p className="text-md font-medium">
                                    Empleamos redes sociales para programar citas a través de mensajes directos y publicaciones estratégicas. Este enfoque es ideal para industrias donde la interacción en tiempo real y la visibilidad son clave. Al conectar con la comunidad latina en plataformas populares, aseguramos que cada interacción sea relevante y que las citas se establezcan de manera efectiva.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <img src={img5} alt="" className="img-style" />
                            </div>
                            <h3 className="text-3xl  text-purple-900 
                            font-bold">Nosotros <span className='font-black'>Suplimos</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    En CommunityTech, suplimos la necesidad de una programación de citas eficiente y personalizada para negocios que buscan optimizar su tiempo y mejorar su rendimiento. Ofrecemos servicios adaptados a diversas industrias, conectando de manera efectiva con la comunidad latina para asegurar que cada cita sea relevante y bien gestionada. Nuestro enfoque se centra en brindar soluciones prácticas que faciliten el crecimiento y éxito de nuestros clientes.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                
                                <img src= {img6} alt="" className="img-style"/>
                            </div>
                            <h3 className="text-3xl  text-purple-900 font-bold">Nosotros <span className='font-black'>Asesoramos</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>En CommunityTech, asesoramos a nuestros clientes en la optimización de su proceso de programación de citas, brindando estrategias personalizadas que se alinean con sus objetivos comerciales. Nuestra experiencia en conectar con la comunidad latina nos permite ofrecer recomendaciones precisas y efectivas para mejorar la eficiencia y maximizar los resultados. Estamos comprometidos en guiar a nuestros clientes hacia un éxito sostenible mediante soluciones prácticas y adaptadas a sus necesidades específicas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;