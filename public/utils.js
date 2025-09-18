const data = [
  {
    id: 1,
    title: "Modern Office Space in Downtown",
    description:
      "This spacious office is located in the heart of downtown, offering easy access to major transport routes, restaurants, and banking facilities. With large windows for natural light, modern fittings, and an open-plan design, it is perfect for startups and established businesses alike. The building provides 24/7 security, high-speed internet, and ample parking space, ensuring a productive and comfortable work environment.",
    location: "Accra, Ghana",
    capacity: "15 people",
    "year-built": "2015",
  },
  {
    id: 2,
    title: "Executive Office with Conference Room",
    description:
      "An executive office designed with professionalism in mind. This listing comes with a private conference room that seats up to 10, making it ideal for board meetings and team strategy sessions. The workspace includes modern furniture, climate control, and a reception area for clients. Its central location provides easy access to nearby coffee shops, transport facilities, and major business centers.",
    location: "Kumasi, Ghana",
    capacity: "20 people",
    "year-built": "2012",
  },
  {
    id: 3,
    title: "Cozy Office in Quiet Neighborhood",
    description:
      "Situated in a serene environment, this office provides a quiet workspace for professionals who value focus and minimal distractions. The property is well-maintained, with tiled floors, strong ventilation, and modern security systems. It is suitable for small businesses, consultants, or freelancers who need a private yet comfortable working environment. Local amenities like grocery stores and cafes are within walking distance.",
    location: "Takoradi, Ghana",
    capacity: "8 people",
    "year-built": "2018",
  },
  {
    id: 4,
    title: "Luxury Office with Ocean View",
    description:
      "This premium office space offers breathtaking views of the Atlantic Ocean from its expansive windows. It features open-plan layouts, stylish glass partitions, and designer lighting fixtures. The building is equipped with advanced security, backup power supply, and underground parking. Its location in a high-end business district makes it perfect for companies looking to impress clients and employees alike.",
    location: "Accra, Ghana",
    capacity: "25 people",
    "year-built": "2020",
  },
  {
    id: 5,
    title: "Affordable Office for Small Businesses",
    description:
      "An affordable office option designed to meet the needs of small businesses and startups. The space is compact yet efficient, offering all the essentials like air conditioning, security, and reliable internet connectivity. Located in a growing commercial area, the office is close to public transport, making it easy for employees and clients to commute. The rent is competitive, making it a great value for money.",
    location: "Tema, Ghana",
    capacity: "6 people",
    "year-built": "2016",
  },
  {
    id: 6,
    title: "Open-Plan Office with Breakout Areas",
    description:
      "This open-plan office is designed for collaboration and creativity. It includes breakout areas, a lounge space, and a kitchenette for staff convenience. With bright lighting, ergonomic seating, and high ceilings, the office fosters productivity and comfort. The property is located near major road networks, making it easily accessible for employees and clients. Perfect for tech companies, marketing agencies, or design firms.",
    location: "Accra, Ghana",
    capacity: "30 people",
    "year-built": "2019",
  },
  {
    id: 7,
    title: "Furnished Office with Modern Amenities",
    description:
      "Move-in ready office space that comes fully furnished with modern desks, chairs, and storage cabinets. It features high-speed internet, centralized air conditioning, and access to shared meeting rooms. Located in a secure building with 24/7 access, this office is ideal for businesses that want a hassle-free setup. The property is surrounded by cafes, gyms, and banking services, offering convenience for both staff and clients.",
    location: "Cape Coast, Ghana",
    capacity: "12 people",
    "year-built": "2014",
  },
  {
    id: 8,
    title: "Creative Workspace in Trendy District",
    description:
      "This office is designed to inspire creativity with its vibrant interior design, exposed brick walls, and open layouts. It includes common areas for brainstorming sessions, as well as private nooks for focused work. The building hosts several creative companies, making it a hub for networking and collaboration. Located in a trendy district, it is close to restaurants, coffee shops, and entertainment venues.",
    location: "Accra, Ghana",
    capacity: "18 people",
    "year-built": "2017",
  },
  {
    id: 9,
    title: "Corporate Office with Multiple Units",
    description:
      "A large office complex suitable for corporations that require multiple units under one roof. The property includes a reception lobby, shared kitchen facilities, private offices, and open workspaces. It also has dedicated parking for staff and visitors. The building’s central location makes it easy to reach government offices, banks, and other corporate headquarters.",
    location: "Kumasi, Ghana",
    capacity: "50 people",
    "year-built": "2010",
  },
  {
    id: 10,
    title: "Tech-Friendly Workspace with Fiber Internet",
    description:
      "This modern workspace is tailored for IT companies and startups. Equipped with fiber optic internet, multiple power outlets, and ergonomic workstations, it ensures a seamless workflow for tech professionals. The property also offers meeting rooms, a reception desk, and a backup generator. Its proximity to universities and innovation hubs makes it a strategic choice for growing tech businesses.",
    location: "Accra, Ghana",
    capacity: "22 people",
    "year-built": "2018",
  },
  {
    id: 11,
    title: "Spacious Office Near Business District",
    description:
      "An expansive office located close to the central business district, making it convenient for employees and clients. The space features multiple meeting rooms, private offices, and open workstations. It has modern fittings, backup power, and secure access. Nearby, you’ll find banks, restaurants, and retail outlets for convenience.",
    location: "Tamale, Ghana",
    capacity: "35 people",
    "year-built": "2013",
  },
  {
    id: 12,
    title: "Compact Office with Affordable Rent",
    description:
      "A compact yet efficient office space designed for entrepreneurs and small teams. It includes a reception area, private office, and shared kitchenette. The property has CCTV surveillance and is situated near public transport for easy commuting. Perfect for businesses looking for a low-cost setup without compromising essential features.",
    location: "Accra, Ghana",
    capacity: "5 people",
    "year-built": "2011",
  },
  {
    id: 13,
    title: "Eco-Friendly Office Building",
    description:
      "This modern eco-friendly office prioritizes sustainability with energy-efficient lighting, water-saving systems, and excellent natural ventilation. It features large open areas, meeting rooms, and a rooftop garden for relaxation. Its location near public transport and urban facilities makes it ideal for forward-thinking companies.",
    location: "Accra, Ghana",
    capacity: "28 people",
    "year-built": "2021",
  },
  {
    id: 14,
    title: "Serviced Office in Prime Location",
    description:
      "A fully serviced office space in a prime commercial hub. The rent includes access to cleaning services, internet, utilities, and reception support. The workspace is designed with flexibility in mind, allowing businesses to expand easily. Surrounded by banks, restaurants, and corporate offices, it is well-positioned for growth.",
    location: "Tema, Ghana",
    capacity: "14 people",
    "year-built": "2019",
  },
  {
    id: 15,
    title: "Large Office Complex with Parking",
    description:
      "A large office complex designed for companies with big teams. The building includes dedicated parking spaces, elevators, and multiple floors of office units. Security is top-notch, with 24/7 surveillance and access control. Its location near highways makes it accessible for staff and clients commuting from different areas.",
    location: "Accra, Ghana",
    capacity: "80 people",
    "year-built": "2009",
  },
  {
    id: 16,
    title: "Minimalist Office with Simple Design",
    description:
      "This office offers a clean, minimalist design that emphasizes functionality. With ample natural lighting, tiled floors, and neutral colors, it provides a distraction-free workspace. It includes basic facilities like internet, air conditioning, and parking, making it suitable for consultants or small startups.",
    location: "Sekondi, Ghana",
    capacity: "10 people",
    "year-built": "2016",
  },
  {
    id: 17,
    title: "Shared Co-Working Office",
    description:
      "A co-working office space where professionals from different industries can work and collaborate. It offers shared desks, private meeting rooms, and a community kitchen. Events and networking opportunities are hosted regularly. This environment fosters innovation and collaboration, making it great for freelancers and small teams.",
    location: "Accra, Ghana",
    capacity: "40 people",
    "year-built": "2017",
  },
  {
    id: 18,
    title: "High-Rise Office with City View",
    description:
      "Located in a high-rise building, this office provides stunning panoramic views of the city skyline. It features modern architecture, glass walls, and high-speed elevators. The property includes a rooftop lounge, ample parking, and advanced security. Ideal for companies wanting prestige and visibility.",
    location: "Accra, Ghana",
    capacity: "55 people",
    "year-built": "2020",
  },
  {
    id: 19,
    title: "Budget-Friendly Office in Suburb",
    description:
      "An affordable office located in a quiet suburb, away from the noise of the city. It includes the basics like internet, air conditioning, and security. Perfect for small consultancies or NGOs looking for a cost-effective workspace with easy access to local transport and amenities.",
    location: "Sunyani, Ghana",
    capacity: "7 people",
    "year-built": "2012",
  },
  {
    id: 20,
    title: "Modern Office with Training Room",
    description:
      "This modern office includes a dedicated training room, making it ideal for businesses that frequently conduct staff development sessions. The property comes with modern desks, high-speed internet, and strong security. Located near universities, it’s convenient for companies that hire interns or trainees.",
    location: "Kumasi, Ghana",
    capacity: "24 people",
    "year-built": "2015",
  },
  {
    id: 21,
    title: "Luxury Penthouse Office",
    description:
      "A penthouse office that combines luxury with functionality. With high-end finishes, a private balcony, and designer furniture, it creates an impressive image for clients. The building includes concierge services, underground parking, and 24/7 access. Best suited for companies that want a premium workspace.",
    location: "Accra, Ghana",
    capacity: "20 people",
    "year-built": "2021",
  },
  {
    id: 22,
    title: "Compact Office with Storage Space",
    description:
      "This office is small but practical, including extra storage space for files and equipment. It is well-ventilated, air-conditioned, and located in a secure building. Great for law firms, accountants, or agencies that require organized filing and storage facilities.",
    location: "Takoradi, Ghana",
    capacity: "9 people",
    "year-built": "2014",
  },
  {
    id: 23,
    title: "Renovated Office in Old Building",
    description:
      "An older building that has been renovated to meet modern business needs. It retains some vintage charm while offering essentials like internet, lighting, and security. The office is suitable for small creative studios or consulting firms looking for character and affordability.",
    location: "Cape Coast, Ghana",
    capacity: "12 people",
    "year-built": "2005",
  },
  {
    id: 24,
    title: "Office with Large Meeting Hall",
    description:
      "This office includes a spacious meeting hall that can host company-wide events, training sessions, or client presentations. The property also includes standard office units, internet access, and secure parking. Great for organizations that frequently hold large gatherings.",
    location: "Accra, Ghana",
    capacity: "60 people",
    "year-built": "2018",
  },
  {
    id: 25,
    title: "Quiet Office for Freelancers",
    description:
      "A simple, quiet office space ideal for freelancers or remote workers. The building provides internet, a shared kitchen, and reliable security. It is located in a calm neighborhood with nearby cafes and stores, offering convenience without distractions.",
    location: "Tema, Ghana",
    capacity: "4 people",
    "year-built": "2013",
  },
  {
    id: 26,
    title: "Office Near Industrial Area",
    description:
      "This office is strategically located near an industrial area, making it suitable for logistics companies or businesses dealing with manufacturing partners. The property includes meeting rooms, high ceilings, and ample parking for delivery vehicles.",
    location: "Accra, Ghana",
    capacity: "30 people",
    "year-built": "2011",
  },
  {
    id: 27,
    title: "Modern Glass-Walled Office",
    description:
      "An office with sleek glass walls that create a modern and transparent work environment. The space includes private rooms, meeting areas, and open collaborative sections. Ideal for companies that want a stylish yet functional workplace.",
    location: "Accra, Ghana",
    capacity: "25 people",
    "year-built": "2019",
  },
  {
    id: 28,
    title: "Compact Office with Balcony",
    description:
      "This office offers a small but practical space with the added benefit of a private balcony. Perfect for small teams who want a touch of outdoor relaxation during breaks. The property includes air conditioning, internet, and secure access.",
    location: "Sekondi, Ghana",
    capacity: "6 people",
    "year-built": "2017",
  },
  {
    id: 29,
    title: "Shared Creative Studio Office",
    description:
      "A shared creative office designed for designers, photographers, and content creators. The space includes photo backdrops, editing stations, and collaborative work areas. The environment encourages creativity and networking among like-minded professionals.",
    location: "Accra, Ghana",
    capacity: "15 people",
    "year-built": "2020",
  },
  {
    id: 30,
    title: "Large Corporate Headquarters",
    description:
      "A massive office complex built for corporate headquarters. The building features multiple floors of workspaces, a cafeteria, gym facilities, and advanced IT infrastructure. Security is state-of-the-art, and the property has its own dedicated parking lot for hundreds of employees.",
    location: "Accra, Ghana",
    capacity: "120 people",
    "year-built": "2008",
  },
];

export default data;
