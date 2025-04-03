import React from 'react';

export const DataView = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Desarrollo de Aplicaciones</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campos</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Información General */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Información General</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>ID</li>
                                    <li>Nombre de la empresa</li>
                                    <li>Persona de contacto</li>
                                    <li>Cargo/Posición</li>
                                    <li>Teléfono</li>
                                    <li>Email</li>
                                    <li>Dirección</li>
                                    <li>Sitio web</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Información del Proyecto */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Información del Proyecto</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Nombre del proyecto</li>
                                    <li>Descripción</li>
                                    <li>Objetivo</li>
                                    <li>Público objetivo</li>
                                    <li>Plataforma</li>
                                    <li>Sistemas operativos</li>
                                    <li>Dispositivos</li>
                                    <li>Alcance del proyecto</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Funcionalidades */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Funcionalidades</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Funcionalidades esenciales</li>
                                    <li>Servicios externos</li>
                                    <li>Métodos de autenticación</li>
                                    <li>Gestión de usuarios</li>
                                    <li>Soporte multiidioma</li>
                                    <li>Accesibilidad</li>
                                    <li>Opciones de personalización</li>
                                    <li>Módulos específicos</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Diseño */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Diseño</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Estilo visual</li>
                                    <li>Referencias visuales</li>
                                    <li>Esquema de colores</li>
                                    <li>Nivel de personalización</li>
                                    <li>Interacciones/Animaciones</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Requerimientos Técnicos */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Requerimientos Técnicos</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Tecnologías preferidas</li>
                                    <li>Integración de sistemas</li>
                                    <li>Almacenamiento de datos</li>
                                    <li>Base de datos preferida</li>
                                    <li>Escalabilidad</li>
                                    <li>Medidas de seguridad</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Gestión y Mantenimiento */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Gestión y Mantenimiento</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Frecuencia de actualizaciones</li>
                                    <li>Soporte post-lanzamiento</li>
                                    <li>Necesidades de capacitación</li>
                                    <li>Documentación</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Presupuesto y Plazos */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Presupuesto y Plazos</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Presupuesto</li>
                                    <li>Plazo de entrega</li>
                                    <li>Fechas críticas</li>
                                    <li>Disponibilidad</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Aspectos Legales */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Aspectos Legales</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Acuerdo NDA</li>
                                    <li>Propiedad intelectual</li>
                                    <li>Cumplimiento legal</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Otros Detalles */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Otros Detalles</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                <ul className="list-disc pl-5">
                                    <li>Comentarios adicionales</li>
                                    <li>Restricciones</li>
                                    <li>Documentación existente</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};