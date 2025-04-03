import { useEffect, useState } from "react";
import { CircularLoader } from "../components/CircularLoader";
import { MessagesTable } from "../components/MessagesTable";

export const Admin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/data/service-program');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                // Normalizar datos a array
                if (Array.isArray(result)) {
                    setData(result);
                } else if (result?.data) {
                    setData(Array.isArray(result.data) ? result.data : [result.data]);
                } else if (result && typeof result === 'object') {
                    setData([result]);
                } else {
                    setData([]);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-red-500 text-xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <>
            {data.length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-gray-500 text-xl">No hay solicitudes de desarrollo disponibles</div>
                </div>
            ) : (
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-center my-8">Solicitudes de Desarrollo de Aplicaciones</h1>

                    <div className="flex flex-col gap-8">
                        {data.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-6 text-center border-b pb-2">
                                        Solicitud #{index + 1} - {item.companyName || 'Sin nombre'}
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Información</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {/* Información General */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 w-1/4">Información General</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">ID:</span> {item.id || 'N/A'}</li>
                                                            <li><span className="font-semibold">Empresa:</span> {item.companyName || 'N/A'}</li>
                                                            <li><span className="font-semibold">Contacto:</span> {item.contactPerson || 'N/A'}</li>
                                                            <li><span className="font-semibold">Cargo:</span> {item.position || 'N/A'}</li>
                                                            <li><span className="font-semibold">Teléfono:</span> {item.phone || 'N/A'}</li>
                                                            <li><span className="font-semibold">Email:</span> {item.email || 'N/A'}</li>
                                                            <li><span className="font-semibold">Dirección:</span> {item.address || 'N/A'}</li>
                                                            <li><span className="font-semibold">Sitio web:</span> {item.website || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Información del Proyecto */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Información del Proyecto</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Nombre:</span> {item.projectName || 'N/A'}</li>
                                                            <li><span className="font-semibold">Descripción:</span> {item.projectDescription || 'N/A'}</li>
                                                            <li><span className="font-semibold">Objetivo:</span> {item.projectObjective || 'N/A'}</li>
                                                            <li><span className="font-semibold">Público objetivo:</span> {item.targetAudience || 'N/A'}</li>
                                                            <li><span className="font-semibold">Plataforma:</span> {item.platform || 'N/A'}</li>
                                                            <li><span className="font-semibold">Sistemas operativos:</span> {item.operatingSystems || 'N/A'}</li>
                                                            <li><span className="font-semibold">Dispositivos:</span> {item.devices || 'N/A'}</li>
                                                            <li><span className="font-semibold">Alcance:</span> {item.projectScope || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Funcionalidades */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Funcionalidades</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Esenciales:</span> {item.essentialFeatures || 'N/A'}</li>
                                                            <li><span className="font-semibold">Servicios externos:</span> {item.externalServices || 'N/A'}</li>
                                                            <li><span className="font-semibold">Autenticación:</span> {item.authenticationMethods || 'N/A'}</li>
                                                            <li><span className="font-semibold">Gestión de usuarios:</span> {item.userManagement || 'N/A'}</li>
                                                            <li><span className="font-semibold">Multiidioma:</span> {item.multiLanguage ? 'Sí' : 'No'}</li>
                                                            <li><span className="font-semibold">Accesibilidad:</span> {item.accessibility ? 'Sí' : 'No'}</li>
                                                            <li><span className="font-semibold">Personalización:</span> {item.customizationOptions || 'N/A'}</li>
                                                            <li><span className="font-semibold">Módulos:</span> {item.specificModules || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Diseño */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Diseño</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Estilo visual:</span> {item.visualStyle || 'N/A'}</li>
                                                            <li><span className="font-semibold">Referencias:</span> {item.visualReferences || 'N/A'}</li>
                                                            <li><span className="font-semibold">Esquema de colores:</span> {item.colorSchemes || 'N/A'}</li>
                                                            <li><span className="font-semibold">Nivel de personalización:</span> {item.customizationLevel || 'N/A'}</li>
                                                            <li><span className="font-semibold">Interacciones:</span> {item.interactionsAnimations || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Requerimientos Técnicos */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Requerimientos Técnicos</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Tecnologías:</span> {item.preferredTech || 'N/A'}</li>
                                                            <li><span className="font-semibold">Integración:</span> {item.systemIntegration || 'N/A'}</li>
                                                            <li><span className="font-semibold">Almacenamiento:</span> {item.dataStorage || 'N/A'}</li>
                                                            <li><span className="font-semibold">Base de datos:</span> {item.preferredDatabase || 'N/A'}</li>
                                                            <li><span className="font-semibold">Escalabilidad:</span> {item.scalability || 'N/A'}</li>
                                                            <li><span className="font-semibold">Seguridad:</span> {item.securityMeasures || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Gestión y Mantenimiento */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Gestión y Mantenimiento</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Actualizaciones:</span> {item.updateFrequency || 'N/A'}</li>
                                                            <li><span className="font-semibold">Soporte post-lanzamiento:</span> {item.postLaunchSupport || 'N/A'}</li>
                                                            <li><span className="font-semibold">Capacitación:</span> {item.trainingNeeds || 'N/A'}</li>
                                                            <li><span className="font-semibold">Documentación:</span> {item.documentation || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Presupuesto y Plazos */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Presupuesto y Plazos</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Presupuesto:</span> {item.budget || 'N/A'}</li>
                                                            <li><span className="font-semibold">Plazo de entrega:</span> {item.deadline || 'N/A'}</li>
                                                            <li><span className="font-semibold">Fechas críticas:</span> {item.criticalDates || 'N/A'}</li>
                                                            <li><span className="font-semibold">Disponibilidad:</span> {item.availability || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Aspectos Legales */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Aspectos Legales</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">NDA:</span> {item.nda ? 'Sí' : 'No'}</li>
                                                            <li><span className="font-semibold">Propiedad intelectual:</span> {item.intellectualProperty || 'N/A'}</li>
                                                            <li><span className="font-semibold">Cumplimiento legal:</span> {item.legalCompliance || 'N/A'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>

                                                {/* Otros Detalles */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Otros Detalles</td>
                                                    <td className="px-6 py-4">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li><span className="font-semibold">Comentarios:</span> {item.additionalComments || 'N/A'}</li>
                                                            <li><span className="font-semibold">Restricciones:</span> {item.restrictions || 'N/A'}</li>
                                                            <li><span className="font-semibold">Documentación existente:</span> {item.existingDocumentation ? 'Sí' : 'No'}</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Componente separado para mensajes */}
            <MessagesTable />
        </>
    );
};




























