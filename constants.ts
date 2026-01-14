// Constants for the RAKA Industrial Site
import { BearingCategory, PageView } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home', view: 'home' },
  { name: 'About Us', href: '#about', view: 'home' },
  { name: 'Products', href: '#products', view: 'home' },
  { name: 'Bearings', href: '#bearings-catalog', view: 'bearings' }, 
  { name: 'RAMA Wires', href: '#rama-wire', view: 'rama-wire' }, // New Page Link
  { name: 'EH Handwash', href: '#eh-handwash', view: 'eh-handwash' },
  { name: 'Contact', href: '#contact', view: 'home' },
];

export const STATS = [
  { value: 'Authorized', label: 'Distributor' },
  { value: '100%', label: 'Genuine Parts' },
  { value: 'Technical', label: 'Expertise' },
  { value: 'UAE & GCC', label: 'Fast Delivery' },
];

export interface OrbitItem {
  id: number;
  image: string;
  label: string;
  angle: number;
  delay: string;
}

export const ORBIT_ITEMS: OrbitItem[] = [
  { id: 1, image: 'https://i.ibb.co/Bp2NHDb/1.png', label: 'Copper Wire', angle: 0, delay: '0.1s' },
  { id: 2, image: 'https://i.ibb.co/svnJP6JH/2.png', label: 'Ball Bearings', angle: 40, delay: '0.2s' },
  { id: 3, image: 'https://i.ibb.co/N2ffdnb2/3.png', label: 'Pillow Block', angle: 80, delay: '0.3s' },
  { id: 4, image: 'https://i.ibb.co/zhVx8gXn/4.png', label: 'Industrial Degreaser', angle: 120, delay: '0.4s' },
  { id: 5, image: 'https://i.ibb.co/d4Hs9cht/5.png', label: 'Hub Bearings', angle: 160, delay: '0.5s' },
  { id: 6, image: 'https://i.ibb.co/0RQKKyJb/6.png', label: 'Capacitors', angle: 200, delay: '0.6s' },
  { id: 7, image: 'https://i.ibb.co/fYjrLqTH/7.png', label: 'Mechanical Seals', angle: 240, delay: '0.7s' },
  { id: 8, image: 'https://i.ibb.co/1YxdG7WD/8.png', label: 'Varnish', angle: 280, delay: '0.8s' },
  { id: 9, image: 'https://i.ibb.co/kg055HdZ/9.png', label: 'Submersible Wire', angle: 320, delay: '0.9s' },
];

export const PRODUCTS = [
  {
    id: 'bearings',
    title: "Industrial Rolling Bearings",
    brand: "LAZIO & VLH",
    description: "High-performance rolling bearings designed for extreme industrial loads and speeds. From deep groove ball bearings to heavy-duty pillow blocks.",
    image: "https://iili.io/f8I9cT7.png",
    features: ["Deep Groove Ball Bearings", "Pillow Blocks", "Tapered Roller Bearings", "High Load Capacity"],
    targetView: 'bearings' as PageView
  },
  {
    id: 'wires',
    title: "Winding Solutions",
    brand: "RAMA",
    description: "Premium copper winding wires with superior conductivity and insulation properties. Essential for motors, transformers, and generators.",
    image: "https://iili.io/f8ITqIn.png",
    features: ["Enameled Copper Wire", "Submersible Winding Wire", "High Thermal Index", "IEC Standards"],
    targetView: 'rama-wire' as PageView
  },
  {
    id: 'chemicals',
    title: "Industrial Maintenance",
    brand: "EH & CHEMICALS",
    description: "Professional grade cleaning and maintenance chemicals. Heavy-duty workshop handwash, thinners, and varnishes for equipment upkeep.",
    image: "https://iili.io/KYKInWJ.jpg",
    features: ["Workshop Handwash", "Industrial Thinners", "Insulating Varnish", "Degreasers"],
    targetView: 'eh-handwash' as PageView
  }
];

export const BRANDS = [
  // Global Brands
  { src: 'https://www.thebearingcompany.co.uk/wp-content/uploads/2023/12/628ca8ee9f5557831305935b.png', alt: 'SKF' }, 
  { src: 'https://image.bearing.cn/qy/member/746349/2023042329338_704.jpg', alt: 'NSK' },
  { src: 'https://ibtinc.com/wp-content/uploads/2022/11/Timken-Logo-708x145-1.png', alt: 'Timken' },
  { src: 'https://mcb.ae/wp-content/uploads/2021/08/ntn.webp', alt: 'NTN' },
  { src: 'https://bearingworld.com.sa/wp-content/uploads/2023/07/koyo-logo-2.png', alt: 'KOYO' },
  
  // ARB at 6th Place
  { src: 'https://iili.io/f8IK0HG.png', alt: 'ARB Bearings' },
  
  // Remaining Global Brands
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnEdBb_loCymNtLlUO5divPi6emf0bYr71Q&s', alt: 'FAG' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQFn-GA3jSZWpkW5ksH_do-H0vaqWBIGchA&s', alt: 'NACHI' },
  
  // RAKA Brands
  { src: 'https://iili.io/f8IGxt4.png', alt: 'Lazio Bearings' },
  { src: 'https://iili.io/f8RdZFt.png', alt: 'VLH Bearings' },

  // C&U at Last (of bearings)
  { src: 'https://iili.io/f8uLvlp.png', alt: 'C&U Bearings' },
  
  // Non-Bearings (Mixed in middle usually, but placed here before RAKA brands to keep RAKA brands strictly last)
  { src: 'https://iili.io/f8I8aEu.png', alt: 'RAMA Copper Wires' },
  { src: 'https://iili.io/KTLSu5X.png', alt: 'EH Workshop Handwash' },
];

// New Detailed Bearings Catalog matched to Rolman structure
export const BEARING_CATALOG: BearingCategory[] = [
  {
    id: 'ball-bearings',
    title: 'Ball Bearings',
    description: 'Versatile bearings offering low friction and high speed capabilities. Suitable for radial and axial loads in electric motors, pumps, and gearboxes.',
    subTypes: [
      {
        title: 'Deep Groove Ball Bearings',
        description: 'Versatile and widely used for various applications. Capable of supporting radial and axial loads in both directions.',
        image: 'https://i.ibb.co/svnJP6JH/2.png' 
      },
      {
        title: 'Angular Contact Ball Bearings',
        description: 'Designed for radial and unidirectional axial loads. The contact angle allows for higher axial load capacity.',
        image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/Y2079903-01'
      },
      {
        title: 'Self Aligning Ball Bearings',
        description: 'Featuring a spherical raceway to accommodate misalignment between the shaft and housing.',
        image: 'https://sealsstore.net/wp-content/uploads/2023/08/deep-groove-ball-bearing-1.jpg' 
      },
      {
        title: 'Thrust Ball Bearings',
        description: 'Comprising washer-type rings with precision grooves. Designed exclusively for axial loads.',
        image: 'https://beznaltech.by/wp-content/uploads/2023/05/image-472343.jpg' 
      }
    ]
  },
  {
    id: 'roller-bearings',
    title: 'Roller Bearings',
    description: 'Engineered for heavy radial loads. The line contact of the rollers allows for higher load capacity compared to ball bearings.',
    subTypes: [
      {
        title: 'Cylindrical Roller Bearings',
        description: 'High radial load capacity and suitability for high speeds. Separable design for easy mounting.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9ivmTOzG-6xlFebfCZW5gKk6_kYN0yHExIR42oK0BOcNpqV1' 
      },
      {
        title: 'Tapered Roller Bearings',
        description: 'Designed to accommodate combined radial and axial loads. Often used in vehicle wheel bearings.',
        image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F2080084-01'
      },
      {
        title: 'Spherical Roller Bearings',
        description: 'Self-aligning bearings designed for heavy loads and severe misalignment conditions.',
        image: 'https://i.ibb.co/svnJP6JH/2.png'
      },
      {
        title: 'Needle Roller Bearings',
        description: 'Bearings with cylindrical rollers that are small in diameter relative to their length. High load capacity in small spaces.',
        image: 'https://m.media-amazon.com/images/I/51Kg8j6p6AL._AC_UF350,350_QL80_.jpg'
      }
    ]
  },
  {
    id: 'automotive-bearings',
    title: 'Automotive Bearings',
    description: 'Specialized bearings and hub assemblies designed for vehicle wheel applications, ensuring smooth rotation and high load support.',
    subTypes: [
      {
        title: 'Wheel Hub Assembly',
        description: 'Integrated hub bearing units pre-assembled with mounting flanges for easy installation and high durability in automotive applications.',
        image: 'https://m.media-amazon.com/images/I/61BG67HN1LL._AC_UF1000,1000_QL80_.jpg'
      }
    ]
  },
  {
    id: 'housings',
    title: 'Bearing Housings',
    description: 'Modular housing units designed to mount bearings safely and protect them from contaminants while retaining lubricant.',
    subTypes: [
      {
        title: 'Pillow Block Unit',
        description: 'Cast iron housing with a mounted bearing, providing shaft support on a mounting surface parallel to the shaft axis.',
        image: 'https://cdn.moglix.com/p/nJnUxC2YHRRlX-xxlarge.jpg'
      },
      {
        title: '4-Bolt Flange Units',
        description: 'Square housing with four bolt holes, designed for mounting on vertical surfaces perpendicular to the shaft.',
        image: 'https://cdn11.bigcommerce.com/s-m2tbfwjufh/images/stencil/1280x1280/products/3551/17008/UCF205-16-4__66274.1674765480.jpg?c=1'
      },
      {
        title: 'Oval Flange Units',
        description: 'Oval-shaped housing with two bolt holes, suitable for applications with limited mounting space.',
        image: 'https://4.imimg.com/data4/GV/IA/MY-259396/oval-flange-bearing-units-ucfl.jpg'
      },
      {
        title: '4-Bolt Flange Cartridge Units',
        description: 'Circular housing with a pilot spigot for precise alignment, featuring four bolt holes.',
        image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R7508845-01'
      },
      {
        title: 'Stamped Steel Flange Units',
        description: 'Economical, lightweight housing made from pressed steel, designed for light loads and moderate speeds.',
        image: 'https://www.ldk-bearings.com/uploads/image/20231121/16/3-hole-flange-bearing.webp'
      },
      {
        title: 'Take-Up Units',
        description: 'Used in belt tensioning systems for conveyors, allowing for shaft adjustment.',
        image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F2094166-02'
      },
      {
        title: 'Hanger Units',
        description: 'Screw conveyor hanger units designed to support the drive shaft of screw conveyors.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjtOYJtPaZu2zG_Nr6Y4Igd3fs8zbmM3gwQ&s'
      }
    ]
  },
  {
    id: 'linear-motion',
    title: 'Linear Motion',
    description: 'Precision components for linear movement. Essential for automation, CNC machinery, and robotics applications.',
    subTypes: [
      {
        title: 'Linear Guides',
        description: 'High precision rail and block systems for smooth linear motion under load.',
        image: 'https://www.schaeffler.ae/remotemedien/media/_shared_media_rwd/05_products_services_1/industrial_products_services/linear_guidance_systems/0001989D_16_9-schaeffler-products-four-row-linear-recirculating-ball-bearing-and-guideway-assemblies_rwd_800.jpg' 
      },
      {
        title: 'Ball Screws',
        description: 'Efficient mechanical linear actuators that translate rotational motion to linear motion.',
        image: 'https://www.heason.com/images/content/slides/601_700x400.jpg?12:00:00&_e=.jpg' 
      },
      {
        title: 'Ball Spline',
        description: 'Innovative linear motion bearing that can transmit torque while allowing for linear movement.',
        image: 'https://www.thomsonlinear.com/ds_images/document_format/BallSpline_Heavy-Duty.png'
      },
      {
        title: 'Linear Bushings',
        description: 'Round shaft linear bearings offering low friction smooth motion.',
        image: 'https://boschrexroth.africa/public/uploads/files/media_images/media_dfa9b0414123036eccc7ee25f2abe9d9.jpg'
      },
      {
        title: 'Cross Roller Guide/Ball Guide',
        description: 'High-precision guides for limited stroke applications requiring high rigidity.',
        image: 'https://www.schneeberger.com/fileadmin/_processed_/3/0/csm_R-Fuehrungen_45x281px_8f65557a01.jpg'
      },
      {
        title: 'Linear Ball Slide',
        description: 'Compact, lightweight slide units for light-load applications.',
        image: 'https://www.thk.com/eu/assets/images/products/linear_ball_slide_lsp.png'
      },
      {
        title: 'Linear Motion Roller',
        description: 'Heavy-duty roller systems for linear motion on flat tracks.',
        image: 'https://ikont.com/wp-content/uploads/2021/01/1583E_LRWX.jpg'
      },
      {
        title: 'Flat Roller',
        description: 'Low profile roller guides ideal for high-load applications in limited spaces.',
        image: 'https://www.thk.com/jp/assets/images/products/other_linear_motion_guides_flat_roller.png'
      }
    ]
  },
  {
    id: 'plain-bearings',
    title: 'Plain Bearings',
    description: 'Simple, high-load capacity bearings used in oscillating movements or where space is limited.',
    subTypes: [
      {
        title: 'Spherical Bushings',
        description: 'Self-aligning spherical plain bearings designed to handle high radial loads and misalignment.',
        image: 'https://cdn11.bigcommerce.com/s-pqjmdlht5a/images/stencil/1280x1280/products/4237/18584/qa1_spherical_bearing_ypbseries_ypbt_rotation_gif__79605.1728590178__41478.1728936561.gif?c=1'
      },
      {
        title: 'Pilloballs',
        description: 'Rod end bearings featuring a spherical sliding contact surface for oscillating and tilting motions.',
        image: 'https://ik.imagekit.io/eqpoilpzmca/tr:w-360/http://m2.harfington.com/photo_new/20211223/g/ux_a21122300ux0417_ux_g03.jpg'
      },
      {
        title: 'L-Balls',
        description: 'Self-lubricating spherical plain bearings consisting of a special die-cast zinc alloy body.',
        image: 'https://cdn.pneucons.com/media/catalog/product/cache/0e26eaa76f5545ded6103e14431f38ca/i/k/iko-lhs_18_1_.jpg'
      }
    ]
  }
];