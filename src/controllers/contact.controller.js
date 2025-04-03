import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const contactController = {
    saveContactMessage: async (req, res) => {
        try {
            const { name, email, message } = req.body;
            
            const status = await prisma.contact.create({
                data: {
                    name,
                    email,
                    message
                }
            });

            if (!status) {
                return res.status(400).json({ message: 'Error al guardar el mensaje' });
            }

            res.status(200).json({ success: true, message: 'Mensaje recibido correctamente', data: { name, email, message } });
        } catch (error) {
            console.error('Error al guardar el mensaje:', error);
            res.status(500).json({ success: false, message: 'Error al guardar el mensaje' });
        }
    },
    getContactMessages: async (req, res) => {
        try {
            const messages = await prisma.contact.findMany();
            res.status(200).json({ success: true, messages });
        } catch (error) {
            console.error('Error al obtener los mensajes:', error);
            res.status(500).json({ success: false, message: 'Error al obtener los mensajes' });
        }
    }
}