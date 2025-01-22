export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Here you would typically save the data to a database
        // For simplicity, we'll just log it to the console
        console.log('Received contact form submission:', { name, email, message });

        return res.status(200).json({ message: 'Message received successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};