export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(302, { Location: '/index.html' });
    return res.end();
  }

  const { nombre, email, ciudad, presupuesto, mensaje } = req.body || {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !mensaje || !emailRegex.test(email || '')) {
    res.writeHead(302, { Location: '/index.html?contacto=error#contacto' });
    return res.end();
  }

  // TODO: sustituir por el email real del estudio una vez confirmado por el cliente.
  const destinatario = process.env.CONTACT_TO_EMAIL || 'estudio@antoniorabadan.com';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // TODO: cambiar a un remitente del dominio verificado en Resend cuando esté disponible.
        from: 'Web Antonio Rabadán <onboarding@resend.dev>',
        to: destinatario,
        reply_to: email,
        subject: `Nueva consulta desde la web - ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\nCiudad: ${ciudad || ''}\nPresupuesto estimado: ${presupuesto || ''}\n\nMensaje:\n${mensaje}`,
      }),
    });

    if (!response.ok) throw new Error(`Resend respondió ${response.status}`);

    res.writeHead(302, { Location: '/index.html?contacto=ok#contacto' });
    return res.end();
  } catch (err) {
    console.error('Error enviando email de contacto:', err);
    res.writeHead(302, { Location: '/index.html?contacto=error#contacto' });
    return res.end();
  }
}
