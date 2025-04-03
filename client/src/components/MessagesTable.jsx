import { useEffect, useState } from "react";
import { CircularLoader } from "./CircularLoader";

export const MessagesTable = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [html, setHtml] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/contact/messages');

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();


                setHtml(
                    data.messages.map((message, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {message.name || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a href={`mailto:${message.email}`} className="text-blue-600 hover:text-blue-800">
                                    {message.email || 'N/A'}
                                </a>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={message.message}>
                                {message.message || 'N/A'}
                            </td>
                        </tr>
                    )
                ))


                // Normalizar datos a array
                if (Array.isArray(data)) {
                    setMessages(JSON.parse(JSON.stringify(data.messages)));
                } else if (data?.data) {
                    setMessages(Array.isArray(data.data) ? data.data : [data.data]);
                } else if (data && typeof data === 'object') {
                    setMessages([data]);
                } else {
                    setMessages([]);
                }

            } catch (err) {
                console.error('Error al cargar mensajes:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) return <CircularLoader />;
    if (error) return <div className="text-red-500">Error: {error}</div>;
    if (messages.length === 0) return <div className="text-gray-500">No hay mensajes disponibles</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Mensajes Recibidos</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensaje</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {html}
                    </tbody>
                </table>
            </div>
        </div>
    );
};