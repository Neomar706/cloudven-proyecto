import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dataController = {
    saveDataApplication: async (req, res) => {
        console.log('Datos recibidos:', req.body);

        const status = await prisma.serviceRequest.create({
            data: {
                // 1. Información General del Cliente
                companyName: req.body.companyName,
                contactPerson: req.body.contactPerson,
                position: req.body.position,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                website: req.body.website,

                // 2. Información del Proyecto
                projectName: req.body.projectName,
                projectDescription: req.body.projectDescription,
                projectObjective: req.body.projectObjective,
                targetAudience: req.body.targetAudience,
                platform: req.body.platform,
                operatingSystems: req.body.operatingSystems,
                devices: req.body.devices,
                projectScope: req.body.projectScope,

                // 3. Funcionalidades y Características
                essentialFeatures: req.body.essentialFeatures,
                externalServices: req.body.externalServices,
                authenticationMethods: req.body.authenticationMethods,
                userManagement: req.body.userManagement,
                multiLanguage: req.body.multiLanguage,
                accessibility: req.body.accessibility,
                customizationOptions: req.body.customizationOptions,
                specificModules: req.body.specificModules,

                // 4. Diseño y Experiencia de Usuario
                visualStyle: req.body.visualStyle,
                visualReferences: req.body.visualReferences,
                colorSchemes: req.body.colorSchemes,
                customizationLevel: req.body.customizationLevel,
                interactionsAnimations: req.body.interactionsAnimations,

                // 5. Requerimientos Técnicos
                preferredTech: req.body.preferredTech,
                systemIntegration: req.body.systemIntegration,
                dataStorage: req.body.dataStorage,
                preferredDatabase: req.body.preferredDatabase,
                scalability: req.body.scalability,
                securityMeasures: req.body.securityMeasures,

                // 6. Gestión y Mantenimiento
                updateFrequency: req.body.updateFrequency,
                postLaunchSupport: req.body.postLaunchSupport,
                trainingNeeds: req.body.trainingNeeds,
                documentation: req.body.documentation,

                // 7. Presupuesto y Plazos
                budget: req.body.budget,
                deadline: req.body.deadline,
                criticalDates: req.body.criticalDates,
                availability: req.body.availability,

                // 8. Aspectos Legales
                nda: req.body.nda,
                intellectualProperty: req.body.intellectualProperty,
                legalCompliance: req.body.legalCompliance,

                // 9. Otros Detalles
                additionalComments: req.body.additionalComments,
                restrictions: req.body.restrictions,
                existingDocumentation: req.body.existingDocumentation,
            }
        });

        if(!status) 
            return res.status(500).json({ success: false, message: 'Error al guardar los datos' });

        res.status(201).json({ success: true, message: 'Datos guardados correctamente' });
    },
    getDataApplication: async (req, res) => {
        const data = await prisma.serviceRequest.findMany();
        if(!data) 
            return res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        res.json({ success: true, data });
    }
}