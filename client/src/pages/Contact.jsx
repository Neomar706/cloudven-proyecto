import { useState } from 'react';
import { toast } from 'react-toastify';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/v1/contact/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }

      toast.success('Mensaje enviado correctamente');
      setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario

    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Ocurrió un error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(/images/vps-LW.jpg)` }}>
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold text-center">Contáctanos</h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};