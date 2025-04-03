import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userController = {
    auth: async (req, res) => {
        // console.log(req.body);
        try {
            const { username, password } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    username,
                },
            });

            if (!user) {
                return res.status(404).json({ success: false, message: "Usuario no encontrado" });
            }
            
            if (username === "admin" && password === user.password) {
                return res.json({ success: true, token: "497cd004-006b-4322-b7fb-74ebfe0eb45d" });
            } else {
                return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });
            }

        } catch (error) {
            console.error("Error en la autenticación:", error);
            return res.status(500).json({ success: false, message: "Error en el servidor" });
        }
    }
}