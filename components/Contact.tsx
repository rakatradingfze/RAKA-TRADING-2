import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = encodeURIComponent(`New Inquiry: ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open default email client
    window.location.href = `mailto:raagavan@raka.ae?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-raka-blue text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-raka-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
                <span className="text-raka-gold font-bold uppercase tracking-widest text-sm">Get In Touch</span>
                <h2 className="text-4xl sm:text-5xl font-display font-bold mt-3 mb-6">Ready to Order?</h2>
                <p className="text-gray-400 text-lg mb-10">
                    Contact our technical sales team for quotes, product specifications, or bulk order inquiries. We deliver across the UAE and GCC.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-raka-gold text-xl flex-shrink-0">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="ml-6">
                            <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                            <p className="text-gray-400">RAKA TRADING F.Z.E<br/>Ajman Free Zone, Ajman</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-raka-gold text-xl flex-shrink-0">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="ml-6">
                            <h4 className="text-xl font-bold mb-1">Call Us</h4>
                            <p className="text-gray-400">+971 56 595 9920</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-raka-gold text-xl flex-shrink-0">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="ml-6">
                            <h4 className="text-xl font-bold mb-1">Email Us</h4>
                            <p className="text-gray-400">raagavan@raka.ae</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 text-gray-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-raka-blue mb-6">Send an Inquiry</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name" 
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-raka-gold transition-colors" 
                        />
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name" 
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-raka-gold transition-colors" 
                        />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-raka-gold transition-colors" 
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-raka-gold transition-colors" 
                    />
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message / Product Details" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-raka-gold transition-colors"
                    ></textarea>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-raka-blue text-white font-bold py-4 rounded hover:bg-raka-dark transition-colors uppercase tracking-wide"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;