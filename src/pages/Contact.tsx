import React, { useState,useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  useEffect(() => {
    emailjs.init("3WtE-t5OFdz3XDLdc"); // Your public key
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_3tlf6m9",      // Your service ID
        "template_dwfpulw",      // Your template ID
        templateParams,
        "3WtE-t5OFdz3XDLdc"     // Your public key
      );

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      if (!error.message.includes("Could not establish connection")) {
        console.error('Email Error:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Contact Me
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>Name: Akash Yadav</p>
          <p>Phone: +919113702866</p>
          <p>Email: akashyadav15032002@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/cdAkash" className="text-blue-500">linkedin.com/in/cdAkash</a></p>
          <p>GitHub: <a href="https://github.com/cdAkash" className="text-blue-500">github.com/cdAkash</a></p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;