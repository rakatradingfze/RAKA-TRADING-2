import React from 'react';

const InstagramPreview: React.FC = () => {
    // Curated posts reflecting RAKA Trading's actual product lines
    const posts = [
        {
            src: "https://iili.io/KYKI9ix.jpg",
            caption: "Precision Bearings in Stock"
        },
        {
            src: "https://iili.io/KYKIRRt.jpg",
            caption: "Industrial Solutions"
        },
        {
            src: "https://iili.io/KYKIfOF.jpg", 
            caption: "Maintenance Products"
        },
        {
            src: "https://iili.io/f8RdZFt.png",
            caption: "Featured Brand: VLH"
        },
    ];

  return (
    <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px] rounded-full">
                        <div className="bg-white p-[2px] rounded-full">
                            <img src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" alt="Profile" className="w-10 h-10 rounded-full object-contain" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-raka-blue text-sm">@rakatrading_official</h4>
                        <p className="text-xs text-gray-500">Follow us for stock updates & offers</p>
                    </div>
                </div>
                
                <a 
                    href="https://www.instagram.com/rakatrading_official?igsh=MXB1ZmttdndqcDFpbQ==" 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-blue-500 font-bold text-sm hover:underline"
                >
                    <i className="fab fa-instagram mr-2 text-lg"></i> View Profile
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {posts.map((post, i) => (
                    <a 
                        key={i} 
                        href="https://www.instagram.com/rakatrading_official?igsh=MXB1ZmttdndqcDFpbQ==" 
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block overflow-hidden rounded-lg aspect-square"
                    >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                            <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <i className="fab fa-instagram text-white text-3xl mb-2"></i>
                            </div>
                        </div>
                        <img 
                            src={post.src} 
                            alt={post.caption} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default InstagramPreview;