import React, { useState } from 'react';
import { CircularLoader } from '../components/CircularLoader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { api } from '../utils/api';

export const ProgrammingServices = () => {
    const [formData, setFormData] = useState({
        // Información General del Cliente
        companyName: '',
        contactPerson: '',
        position: '',
        phone: '',
        email: '',
        address: '',
        website: '',

        // Información del Proyecto
        projectName: '',
        projectDescription: '',
        projectObjective: '',
        targetAudience: '',
        platform: '',
        operatingSystems: '',
        devices: '',
        projectScope: '',

        // Funcionalidades y Características
        essentialFeatures: '',
        externalServices: '',
        authenticationMethods: '',
        userManagement: '',
        multiLanguage: false,
        accessibility: false,
        customizationOptions: '',
        specificModules: '',

        // Diseño y UX/UI
        visualStyle: '',
        visualReferences: '',
        colorSchemes: '',
        customizationLevel: '',
        interactionsAnimations: '',

        // Requerimientos Técnicos
        preferredTech: '',
        systemIntegration: '',
        dataStorage: '',
        preferredDatabase: '',
        scalability: '',
        securityMeasures: '',

        // Gestión y Mantenimiento
        updateFrequency: '',
        postLaunchSupport: '',
        trainingNeeds: '',
        documentation: '',

        // Presupuesto y Plazos
        budget: '',
        deadline: '',
        criticalDates: '',
        availability: '',

        // Aspectos Legales
        nda: false,
        intellectualProperty: '',
        legalCompliance: '',

        // Otros Detalles
        additionalComments: '',
        restrictions: '',
        existingDocumentation: false
    });
    const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        
        try {
            setIsSubmitting(true);
            
            const response = await fetch('http://localhost:5000/api/v1/data/service-program', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json(); // Mover esta línea antes de la verificación de response.ok
    
            if (!response.ok) {
                throw new Error(data.message || `Error HTTP: ${response.status}`);
            }
    
            if(!data.success) { // Corregir el typo de "succees" a "success"
                throw new Error(data.message || 'Error al guardar los datos');
            }
            
            toast.success('Solicitud enviada correctamente, dentro de poco nos contactaremos con usted.');
            setSubmitMessage({ text: 'Solicitud enviada correctamente', isError: false });
            navigate('/');
            


        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            toast.error(error.message || 'Error al enviar la solicitud');
            setSubmitMessage({ 
                text: error.message || 'Error al enviar la solicitud', 
                isError: true 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {!isSubmitting ? (

                <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Servicio de Programación</h1>

                        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
                            {/* Sección 1: Información General del Cliente */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">1. Información General del Cliente</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                            Nombre de la empresa o cliente
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                                            Persona de contacto
                                        </label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            id="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                                            Cargo o posición
                                        </label>
                                        <input
                                            type="text"
                                            name="position"
                                            id="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Dirección de la empresa (opcional)
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                            Sitio web o redes sociales (si aplica)
                                        </label>
                                        <input
                                            type="url"
                                            name="website"
                                            id="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 2: Información del Proyecto */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">2. Información del Proyecto</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                                            Nombre del proyecto o aplicación
                                        </label>
                                        <input
                                            type="text"
                                            name="projectName"
                                            id="projectName"
                                            value={formData.projectName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                                            Breve descripción del proyecto
                                        </label>
                                        <textarea
                                            name="projectDescription"
                                            id="projectDescription"
                                            rows={3}
                                            value={formData.projectDescription}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="projectObjective" className="block text-sm font-medium text-gray-700">
                                            Objetivo principal de la aplicación (¿Qué problema resuelve?)
                                        </label>
                                        <textarea
                                            name="projectObjective"
                                            id="projectObjective"
                                            rows={3}
                                            value={formData.projectObjective}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
                                            Público objetivo (¿Quiénes usarán la aplicación?)
                                        </label>
                                        <textarea
                                            name="targetAudience"
                                            id="targetAudience"
                                            rows={2}
                                            value={formData.targetAudience}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
                                            Plataforma deseada
                                        </label>
                                        <select
                                            name="platform"
                                            id="platform"
                                            value={formData.platform}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="web">Web</option>
                                            <option value="mobile">Móvil</option>
                                            <option value="desktop">Desktop</option>
                                            <option value="multi">Multiplataforma</option>
                                        </select>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="operatingSystems" className="block text-sm font-medium text-gray-700">
                                            Sistemas operativos a soportar
                                        </label>
                                        <input
                                            type="text"
                                            name="operatingSystems"
                                            id="operatingSystems"
                                            value={formData.operatingSystems}
                                            onChange={handleChange}
                                            placeholder="Ej: Android, iOS, Windows"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="devices" className="block text-sm font-medium text-gray-700">
                                            Dispositivos específicos
                                        </label>
                                        <input
                                            type="text"
                                            name="devices"
                                            id="devices"
                                            value={formData.devices}
                                            onChange={handleChange}
                                            placeholder="Ej: smartphones, tablets, desktops"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700">
                                            Alcance del proyecto
                                        </label>
                                        <select
                                            name="projectScope"
                                            id="projectScope"
                                            value={formData.projectScope}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="mvp">MVP (Producto Mínimo Viable)</option>
                                            <option value="beta">Beta</option>
                                            <option value="final">Producto final</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Sección 3: Funcionalidades y Características */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">3. Funcionalidades y Características</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="essentialFeatures" className="block text-sm font-medium text-gray-700">
                                            Funcionalidades esenciales
                                        </label>
                                        <textarea
                                            name="essentialFeatures"
                                            id="essentialFeatures"
                                            rows={3}
                                            value={formData.essentialFeatures}
                                            onChange={handleChange}
                                            placeholder="Ej: Login, registro, panel de usuario, etc."
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="externalServices" className="block text-sm font-medium text-gray-700">
                                            Integración con servicios externos
                                        </label>
                                        <textarea
                                            name="externalServices"
                                            id="externalServices"
                                            rows={2}
                                            value={formData.externalServices}
                                            onChange={handleChange}
                                            placeholder="Ej: API, servicios de terceros"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="authenticationMethods" className="block text-sm font-medium text-gray-700">
                                            Métodos de autenticación
                                        </label>
                                        <textarea
                                            name="authenticationMethods"
                                            id="authenticationMethods"
                                            rows={2}
                                            value={formData.authenticationMethods}
                                            onChange={handleChange}
                                            placeholder="Ej: correo, redes sociales, autenticación en dos pasos"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="userManagement" className="block text-sm font-medium text-gray-700">
                                            Gestión de usuarios
                                        </label>
                                        <textarea
                                            name="userManagement"
                                            id="userManagement"
                                            rows={2}
                                            value={formData.userManagement}
                                            onChange={handleChange}
                                            placeholder="Ej: roles y permisos"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="multiLanguage"
                                                id="multiLanguage"
                                                checked={formData.multiLanguage}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="multiLanguage" className="ml-2 block text-sm text-gray-700">
                                                Soporte para múltiples idiomas
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="accessibility"
                                                id="accessibility"
                                                checked={formData.accessibility}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="accessibility" className="ml-2 block text-sm text-gray-700">
                                                Características de accesibilidad (cumplimiento de estándares)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="customizationOptions" className="block text-sm font-medium text-gray-700">
                                            Opciones de personalización
                                        </label>
                                        <textarea
                                            name="customizationOptions"
                                            id="customizationOptions"
                                            rows={2}
                                            value={formData.customizationOptions}
                                            onChange={handleChange}
                                            placeholder="Ej: temas, perfiles de usuario"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="specificModules" className="block text-sm font-medium text-gray-700">
                                            Módulos específicos
                                        </label>
                                        <textarea
                                            name="specificModules"
                                            id="specificModules"
                                            rows={2}
                                            value={formData.specificModules}
                                            onChange={handleChange}
                                            placeholder="Ej: reportes, dashboards, facturación"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 4: Diseño y Experiencia de Usuario */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">4. Diseño y Experiencia de Usuario (UX/UI)</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="visualStyle" className="block text-sm font-medium text-gray-700">
                                            Estilo visual deseado
                                        </label>
                                        <input
                                            type="text"
                                            name="visualStyle"
                                            id="visualStyle"
                                            value={formData.visualStyle}
                                            onChange={handleChange}
                                            placeholder="Ej: minimalista, corporativo, interactivo"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="visualReferences" className="block text-sm font-medium text-gray-700">
                                            Referencias visuales
                                        </label>
                                        <textarea
                                            name="visualReferences"
                                            id="visualReferences"
                                            rows={3}
                                            value={formData.visualReferences}
                                            onChange={handleChange}
                                            placeholder="Ej: sitios web o apps que el cliente considere inspiradoras"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="colorSchemes" className="block text-sm font-medium text-gray-700">
                                            Esquemas de colores preferidos
                                        </label>
                                        <input
                                            type="text"
                                            name="colorSchemes"
                                            id="colorSchemes"
                                            value={formData.colorSchemes}
                                            onChange={handleChange}
                                            placeholder="Ej: Azul corporativo, tonos claros"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="customizationLevel" className="block text-sm font-medium text-gray-700">
                                            Grado de personalización en la interfaz
                                        </label>
                                        <input
                                            type="text"
                                            name="customizationLevel"
                                            id="customizationLevel"
                                            value={formData.customizationLevel}
                                            onChange={handleChange}
                                            placeholder="Ej: Básico, Medio, Alto"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="interactionsAnimations" className="block text-sm font-medium text-gray-700">
                                            Interacciones y animaciones
                                        </label>
                                        <textarea
                                            name="interactionsAnimations"
                                            id="interactionsAnimations"
                                            rows={2}
                                            value={formData.interactionsAnimations}
                                            onChange={handleChange}
                                            placeholder="Ej: Transiciones suaves, micro-interacciones"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 5: Requerimientos Técnicos */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">5. Requerimientos Técnicos</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="preferredTech" className="block text-sm font-medium text-gray-700">
                                            Lenguajes o frameworks preferidos (si aplica)
                                        </label>
                                        <input
                                            type="text"
                                            name="preferredTech"
                                            id="preferredTech"
                                            value={formData.preferredTech}
                                            onChange={handleChange}
                                            placeholder="Ej: React, Node.js, Python"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="systemIntegration" className="block text-sm font-medium text-gray-700">
                                            Integración con sistemas internos
                                        </label>
                                        <textarea
                                            name="systemIntegration"
                                            id="systemIntegration"
                                            rows={2}
                                            value={formData.systemIntegration}
                                            onChange={handleChange}
                                            placeholder="Ej: ERP, CRM, bases de datos"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="dataStorage" className="block text-sm font-medium text-gray-700">
                                            Almacenamiento de datos
                                        </label>
                                        <select
                                            name="dataStorage"
                                            id="dataStorage"
                                            value={formData.dataStorage}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="local">Local</option>
                                            <option value="cloud">En la nube</option>
                                            <option value="hybrid">Híbrido</option>
                                        </select>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="preferredDatabase" className="block text-sm font-medium text-gray-700">
                                            Bases de datos preferidas
                                        </label>
                                        <input
                                            type="text"
                                            name="preferredDatabase"
                                            id="preferredDatabase"
                                            value={formData.preferredDatabase}
                                            onChange={handleChange}
                                            placeholder="Ej: SQL, NoSQL, MySQL, MongoDB"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="scalability" className="block text-sm font-medium text-gray-700">
                                            Escalabilidad y rendimiento esperado
                                        </label>
                                        <textarea
                                            name="scalability"
                                            id="scalability"
                                            rows={2}
                                            value={formData.scalability}
                                            onChange={handleChange}
                                            placeholder="Ej: Soporte para 10,000 usuarios concurrentes"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="securityMeasures" className="block text-sm font-medium text-gray-700">
                                            Medidas de seguridad
                                        </label>
                                        <textarea
                                            name="securityMeasures"
                                            id="securityMeasures"
                                            rows={2}
                                            value={formData.securityMeasures}
                                            onChange={handleChange}
                                            placeholder="Ej: cifrado, protección de datos"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 6: Gestión y Mantenimiento */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">6. Gestión y Mantenimiento</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="updateFrequency" className="block text-sm font-medium text-gray-700">
                                            Frecuencia de actualizaciones esperadas
                                        </label>
                                        <input
                                            type="text"
                                            name="updateFrequency"
                                            id="updateFrequency"
                                            value={formData.updateFrequency}
                                            onChange={handleChange}
                                            placeholder="Ej: Mensual, Trimestral, Según necesidad"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="postLaunchSupport" className="block text-sm font-medium text-gray-700">
                                            Soporte post-lanzamiento
                                        </label>
                                        <textarea
                                            name="postLaunchSupport"
                                            id="postLaunchSupport"
                                            rows={2}
                                            value={formData.postLaunchSupport}
                                            onChange={handleChange}
                                            placeholder="Ej: mantenimiento, resolución de bugs"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="trainingNeeds" className="block text-sm font-medium text-gray-700">
                                            Capacitación para el uso de la aplicación
                                        </label>
                                        <textarea
                                            name="trainingNeeds"
                                            id="trainingNeeds"
                                            rows={2}
                                            value={formData.trainingNeeds}
                                            onChange={handleChange}
                                            placeholder="Ej: Sesiones presenciales, manuales en video"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="documentation" className="block text-sm font-medium text-gray-700">
                                            Documentación requerida
                                        </label>
                                        <textarea
                                            name="documentation"
                                            id="documentation"
                                            rows={2}
                                            value={formData.documentation}
                                            onChange={handleChange}
                                            placeholder="Ej: manual de usuario, guía de administración"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 7: Presupuesto y Plazos */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">7. Presupuesto y Plazos</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                            Presupuesto estimado
                                        </label>
                                        <input
                                            type="text"
                                            name="budget"
                                            id="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            placeholder="Ej: $10,000 - $15,000"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                                            Plazo de entrega deseado
                                        </label>
                                        <input
                                            type="text"
                                            name="deadline"
                                            id="deadline"
                                            value={formData.deadline}
                                            onChange={handleChange}
                                            placeholder="Ej: 3 meses desde la firma del contrato"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="criticalDates" className="block text-sm font-medium text-gray-700">
                                            Fechas críticas
                                        </label>
                                        <textarea
                                            name="criticalDates"
                                            id="criticalDates"
                                            rows={2}
                                            value={formData.criticalDates}
                                            onChange={handleChange}
                                            placeholder="Ej: lanzamiento, pruebas"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                                            Disponibilidad del equipo del cliente
                                        </label>
                                        <textarea
                                            name="availability"
                                            id="availability"
                                            rows={2}
                                            value={formData.availability}
                                            onChange={handleChange}
                                            placeholder="Ej: para reuniones o pruebas"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 8: Aspectos Legales y de Privacidad */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">8. Aspectos Legales y de Privacidad</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="nda"
                                                id="nda"
                                                checked={formData.nda}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="nda" className="ml-2 block text-sm text-gray-700">
                                                Requiere Acuerdos de confidencialidad (NDA)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="intellectualProperty" className="block text-sm font-medium text-gray-700">
                                            Propiedad intelectual del software
                                        </label>
                                        <textarea
                                            name="intellectualProperty"
                                            id="intellectualProperty"
                                            rows={2}
                                            value={formData.intellectualProperty}
                                            onChange={handleChange}
                                            placeholder="Ej: Retención de derechos por el desarrollador, transferencia al cliente"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="legalCompliance" className="block text-sm font-medium text-gray-700">
                                            Cumplimiento de normativas legales
                                        </label>
                                        <textarea
                                            name="legalCompliance"
                                            id="legalCompliance"
                                            rows={2}
                                            value={formData.legalCompliance}
                                            onChange={handleChange}
                                            placeholder="Ej: RGPD, CCPA, normativas locales"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Sección 9: Otros Detalles */}
                            <section className="pt-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-6">9. Otros Detalles</h2>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700">
                                            Comentarios adicionales o especificaciones especiales
                                        </label>
                                        <textarea
                                            name="additionalComments"
                                            id="additionalComments"
                                            rows={3}
                                            value={formData.additionalComments}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="restrictions" className="block text-sm font-medium text-gray-700"> Restricciones o limitaciones conocidas </label>
                                        <textarea name="restrictions" id="restrictions" rows={2} value={formData.restrictions} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                    <div className="sm:col-span-6">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="existingDocumentation"
                                                id="existingDocumentation"
                                                checked={formData.existingDocumentation}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="existingDocumentation" className="ml-2 block text-sm text-gray-700">
                                                ¿El cliente ya tiene documentación previa o prototipos?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Botón de envío */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center h-full'>
                    <CircularLoader />
                </div>
            )}
        </>
    )
}