export const COMPANY_NAME = "Apex Precision Engineering";
export const TAGLINE = "Precision Engineered. Quality Delivered.";

export const SERVICES = [
  {
    id: "cnc-turning",
    title: "CNC Turning",
    icon: "RotateCw",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "High-precision turning centers for cylindrical parts, ensuring exceptional surface finish and tight dimensional control.",
    details: "Our CNC turning centers are equipped with live tooling, enabling us to perform secondary operations like cross-drilling, milling, and tapping in a single setup. This reduces lead times and improves geometric accuracy.",
    capabilities: ["Max Diameter: 450mm", "Max Length: 1200mm", "Tolerance: down to ±5 microns", "Live Tooling & C-Axis Capabilities"]
  },
  {
    id: "cnc-milling",
    title: "CNC Milling",
    icon: "Grid",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    description: "Advanced milling capabilities for complex 3D profiles, prismatic parts, and custom mechanical components.",
    details: "With multi-axis milling options, we process raw blocks of steel, aluminum, brass, and exotic alloys into intricate parts. Our rigid machine structures guarantee repeatable accuracy for large production runs.",
    capabilities: ["X/Y/Z Travel: up to 1500 x 800 x 700mm", "Spindle Speed: up to 15,000 RPM", "Automatic Tool Changer: 30 Tools", "Rigid Tapping & High-Speed Machining"]
  },
  {
    id: "vmc-machining",
    title: "VMC Machining",
    icon: "ChevronsUpDown",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    description: "Vertical Machining Centers delivering high-speed cutting, drilling, and pocketing with excellent accuracy.",
    details: "Vertical machining is ideal for flat surfaces, cavities, and complex profiles. We utilize 3-axis and 4-axis VMCs for quick setup and high production throughput across medical, aerospace, and automotive components.",
    capabilities: ["4-Axis Rotary Tables", "High-Pressure Through-Spindle Coolant", "Workpieces up to 1.2 Tons", "Precision Mold & Die Machining"]
  },
  {
    id: "hmc-machining",
    title: "HMC Machining",
    icon: "MoveRight",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80",
    description: "Horizontal Machining Centers optimized for multi-sided high-volume manufacturing of complex castings and housings.",
    details: "Our HMC setups feature dual pallets which enable continuous machining: parts can be loaded/unloaded on one pallet while the machine cuts on the other. Perfect for heavy gearbox housings, pumps, and engine blocks.",
    capabilities: ["Dual Pallet Changer", "Full 4th Axis Indexing", "Rapid Traverse Rate: 60m/min", "Heavy-Duty Box Way Construction"]
  },
  {
    id: "metal-fabrication",
    title: "Metal Fabrication",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
    description: "End-to-end metal fabrication solutions including shearing, bending, rolling, and complete structural assembly.",
    details: "We convert metal sheets, plates, and structural sections into complete products. Our team handles everything from structural columns to complex machine frames with full code-compliance.",
    capabilities: ["Heavy plate bending up to 20mm", "Structural framing & truss assemblies", "Custom enclosure manufacturing", "Post-fabrication stress relieving"]
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80",
    description: "High-power Fiber Laser cutting for sheets and plates with extreme precision and clean edge finish.",
    details: "Using state-of-the-art Fiber Laser technology, we achieve clean cuts with minimal heat-affected zones. This guarantees excellent quality for subsequent bending, welding, or finishing operations.",
    capabilities: ["Power: 6kW Fiber Laser", "Mild Steel up to 25mm", "Stainless Steel up to 16mm", "Aluminum & Copper up to 12mm"]
  },
  {
    id: "sheet-metal-fabrication",
    title: "Sheet Metal Fabrication",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Precision sheet metal punching, bending, and forming for panels, brackets, and customized electronics cabinets.",
    details: "We manufacture high-precision enclosures and bracketry for electronics, medical, and industrial automation. Our CNC Press Brakes ensure precise bend angles for multi-bend components.",
    capabilities: ["Precision bending: ±0.2 degrees", "CNC Turret Punching", "Hardware insertion (PEM nuts/studs)", "Deburring & surface graining"]
  },
  {
    id: "mig-welding",
    title: "MIG Welding",
    icon: "Link",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "High-productivity MIG/GMAW welding for structural steel, heavy fabrications, and chassis.",
    details: "Our certified MIG welders deliver strong, aesthetic welds in carbon steel, stainless steel, and aluminum. We use advanced pulsed-MIG welding to control heat input and minimize distortion.",
    capabilities: ["AWS D1.1 Certified Welders", "Pulsed MIG technology for low spatter", "Positioners for circular/radial welding", "Full weld preparation & beveling"]
  },
  {
    id: "tig-welding",
    title: "TIG Welding",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0b4b?auto=format&fit=crop&w=800&q=80",
    description: "Precision TIG/GTAW welding for critical thin-gauge materials, pressure vessels, and piping.",
    details: "TIG welding delivers the highest quality welds with superior aesthetics. We use TIG primarily for clean stainless steel, aluminum, and titanium assemblies where weld purity and leak-proof integrity are vital.",
    capabilities: ["High-purity orbital purging", "Thin-gauge sheet welding (down to 0.5mm)", "Stainless steel pipe & manifold welding", "Non-destructive testing (NDT) compliant"]
  },
  {
    id: "industrial-assembly",
    title: "Industrial Assembly",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=800&q=80",
    description: "Mechanical assembly of parts, including installation of bearings, fasteners, pneumatics, and electronic integration.",
    details: "We do not just machine parts; we build assemblies. We integrate machined components, sheet metal parts, commercial hardware, wiring, and pneumatic actuators into complete working sub-assemblies.",
    capabilities: ["Clean assembly environment", "Torque-controlled fastening", "Pneumatic & leak testing", "Functional factory testing"]
  },
  {
    id: "reverse-engineering",
    title: "Reverse Engineering",
    icon: "RefreshCw",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Re-creating precise CAD drawings and physical components from worn, broken, or legacy sample parts.",
    details: "Our metrology lab uses CMM and 3D scanners to digitize complex legacy components, enabling us to generate parametric 3D CAD models and reproduce the components with modern material grades.",
    capabilities: ["3D Laser Scanning", "Material composition analysis", "Hardness testing & metallurgy evaluation", "CAD model generation (STEP, IGES)"]
  },
  {
    id: "prototype-development",
    title: "Prototype Development",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Fast-turnaround functional prototyping to validate engineering designs before mass production.",
    details: "We support engineering teams with rapid manufacturing of single units or small test batches. We suggest design-for-manufacturability (DFM) changes to lower mass production costs.",
    capabilities: ["Express turnaround in 3-7 days", "DFM review and optimization feedback", "Multi-process prototype integration", "Functional testing support"]
  },
  {
    id: "custom-component-manufacturing",
    title: "Custom Component Manufacturing",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    description: "Tailored manufacturing of unique parts based on customer drawings, blueprints, and specific technical parameters.",
    details: "Whether you need a specialty shaft, a bespoke manifold, or a high-wear ceramic-coated guide, we source special raw materials and design custom tooling to manufacture your proprietary components.",
    capabilities: ["Machining exotic alloys (Inconel, Titanium)", "Custom heat treatment & surface coatings", "100% inspection tracking & serialization", "JIT & KanBan inventory supply agreements"]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "precision",
    title: "High Precision Manufacturing",
    icon: "Target",
    description: "We work with tolerances as tight as ±5 microns, verifying dimensions inside our temperature-controlled inspection lab."
  },
  {
    id: "machines",
    title: "Modern CNC Machines",
    icon: "Cpu",
    description: "Our shop floor features Japanese and German multi-axis turning, milling, and laser cutting machines for high repeatability."
  },
  {
    id: "engineers",
    title: "Experienced Engineers",
    icon: "Users",
    description: "Our production team has over 25 years of experience in metallurgy, tool selection, fixture design, and CNC programming."
  },
  {
    id: "quality",
    title: "ISO Quality Standards",
    icon: "Award",
    description: "ISO 9001:2015 certified process controls with full raw material heat traceability and computerized inspection reports."
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    icon: "Truck",
    description: "Rigorous planning and Kanban scheduling ensure your production batches are manufactured and delivered on time."
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    icon: "DollarSign",
    description: "Advanced tooling optimization and material nestings yield maximum efficiency, saving manufacturing costs for you."
  },
  {
    id: "export",
    title: "Export Ready",
    icon: "Globe",
    description: "We comply with international packaging standards (ISPM-15 wood crating) and export to clients in Europe, USA, and Middle East."
  },
  {
    id: "custom",
    title: "Custom Manufacturing",
    icon: "Settings",
    description: "No drawing is too complex. We specialize in low-volume, high-mix custom components tailored to your exact application."
  }
];

export const MACHINERY = [
  {
    id: "5axis-cnc",
    name: "5-Axis CNC Machining Center",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art Japanese continuous 5-Axis machine for fabricating highly complex aerospace impellers, turbine blades, and medical implants in a single setup.",
    specs: {
      "X/Y/Z Travel": "650 x 520 x 475 mm",
      "A-Axis Tilt": "-120° to +30°",
      "C-Axis Rotation": "360° Continuous",
      "Spindle Speed": "18,000 RPM",
      "Control System": "Heidenhain TNC 640"
    },
    applications: ["Aerospace Impellers", "Turbine Blades", "Medical Joint Implants", "Complex Mold Cavities"]
  },
  {
    id: "vmc",
    name: "Vertical Machining Center (VMC)",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    description: "High-rigidity VMC featuring high-torque geared spindles for heavy metal removal in steels and casting blocks.",
    specs: {
      "X/Y/Z Travel": "1100 x 600 x 580 mm",
      "Spindle Taper": "BT-40 Heavy Duty",
      "Spindle Speed": "10,000 RPM",
      "Tool Capacity": "24 Tools (Arm Type)",
      "Max Table Load": "800 kg"
    },
    applications: ["Engine Blocks", "Die & Mold Bases", "Structural Brackets", "Heavy Manifolds"]
  },
  {
    id: "hmc",
    name: "Horizontal Machining Center (HMC)",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80",
    description: "Pallet-changing horizontal machine dedicated to medium-to-large production runs of multi-sided components.",
    specs: {
      "Pallet Size": "500 x 500 mm (Dual Pallet)",
      "X/Y/Z Travel": "800 x 750 x 800 mm",
      "B-Axis Indexing": "0.001° (Full 4th Axis)",
      "Spindle Speed": "12,000 RPM",
      "Tool Capacity": "60 Tools Chain Type"
    },
    applications: ["Gearbox Housings", "Valve Manifolds", "Pump Castings", "Automotive Transmissions"]
  },
  {
    id: "cnc-turning-centers",
    name: "CNC Turning Center (Live Tooling)",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    description: "Equipped with live milling turret, sub-spindle, and bar feeder for automated, complex turned parts.",
    specs: {
      "Max Turning Diameter": "380 mm",
      "Max Turning Length": "650 mm",
      "Bar Capacity": "65 mm",
      "Chuck Size": "8 inch Main, 6 inch Sub",
      "Turret Station": "12 Stations (All Live)"
    },
    applications: ["Steering Shafts", "Bespoke Fittings", "Threaded Connectors", "Piston Sleeves"]
  },
  {
    id: "laser-cutting-machine",
    name: "Fiber Laser Cutting Machine",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-high-speed fiber laser sheet metal cutting system with automatic pallet exchanger for high throughput.",
    specs: {
      "Laser Power": "6,000 Watts Fiber",
      "Bed Size": "3000 x 1500 mm (Dual Bed)",
      "Positioning Accuracy": "±0.03 mm",
      "Max Acceleration": "1.5G",
      "Materials Cuts": "Mild Steel, Stainless Steel, Aluminum, Brass, Copper"
    },
    applications: ["Cabinet Enclosures", "Precision Gaskets", "Laser Cut Profiles", "Perforated Plates"]
  },
  {
    id: "cnc-press-brake",
    name: "CNC Hydraulic Press Brake",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=800&q=80",
    description: "Multi-axis backgauge press brake for precise, repeatable forming of complex sheet metal bends.",
    specs: {
      "Bending Force": "130 Tons",
      "Bending Length": "3100 mm",
      "Backgauge Axes": "4-Axis (X, R, Z1, Z2)",
      "Control System": "Delem DA-66T",
      "Accuracy": "±0.1 mm Bend Position"
    },
    applications: ["Chassis & Cabinets", "Mounting Brackets", "Specialist Channels", "Formed Metal Covers"]
  },
  {
    id: "hydraulic-press",
    name: "Heavy-Duty Hydraulic Press",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "High tonnage press used for metal drawing, stamping, blanking, and heavy bushing pressing.",
    specs: {
      "Capacity": "250 Tons",
      "Stroke Length": "400 mm",
      "Table Size": "1000 x 800 mm",
      "Ram Speed": "100 mm/sec"
    },
    applications: ["Deep Drawn Shells", "Heavy Stamped Components", "Bushing / Bearing Installation", "Metal Straightening"]
  },
  {
    id: "surface-grinder",
    name: "Precision Surface Grinder",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Enables sub-micron flatness and mirror finish on flat tooling parts, plates, and guides.",
    specs: {
      "Max Grinding Area": "600 x 300 mm",
      "Table Movement": "Hydraulic Infinitely Variable",
      "Flatness Tolerance": "0.002 mm",
      "Surface Roughness": "Ra 0.1 Ra"
    },
    applications: ["Machine Tool Ways", "Precision Spacers", "Die Plates", "Hardened Guides"]
  },
  {
    id: "tool-room",
    name: "Advanced Tool Room Setups",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
    description: "Features manual lathes, manual millers, radial drills, band saws, and wire cut EDM machines for tooling support.",
    specs: {
      "Wire EDM Travel": "400 x 300 x 220 mm",
      "Radial Drill Arm": "1200 mm length",
      "EDM Surface Finish": "0.4 Ra"
    },
    applications: ["Custom Jigs & Fixtures", "Extrusion Dies", "Punch & Die Maintenance", "Specialty Fasteners"]
  },
  {
    id: "quality-lab",
    name: "Quality Inspection Lab (CMM)",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    description: "Temperature and humidity-controlled laboratory houses our Coordinate Measuring Machine (CMM), optical profilometers, and hardness testers.",
    specs: {
      "CMM Travel Range": "800 x 1000 x 600 mm",
      "CMM Volumetric Accuracy": "E = 1.7 + L/333 µm",
      "Measuring Software": "PC-DMIS Premium",
      "Temperature Standard": "20°C ± 0.5°C"
    },
    applications: ["Geometric Dimensioning & Tolerancing (GD&T) Inspection", "First Article Inspection (FAI) Reports", "Statistical Process Control (SPC) Sampling", "Reverse Engineering Digitization"]
  }
];

export const PRODUCTS = [
  {
    id: "shafts",
    name: "Precision Machined Shafts",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    material: "EN24, EN19, AISI 316, AISI 4140",
    tolerance: "±5 microns (h6 fit)",
    industry: "Automotive, Power Transmission",
    drawingUrl: "#"
  },
  {
    id: "bushes",
    name: "Bronze & Hardened Steel Bushes",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80",
    material: "Phosphor Bronze (PB1/PB2), Gunmetal, EN8 Case Hardened",
    tolerance: "±8 microns (H7/g6 fit)",
    industry: "Heavy Engineering, Hydraulic Cylinders",
    drawingUrl: "#"
  },
  {
    id: "flanges",
    name: "Custom Pipe & Blind Flanges",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    material: "ASTM A105 Carbon Steel, Stainless Steel 304L/316L",
    tolerance: "±0.1 mm",
    industry: "Oil & Gas, Chemical Process Piping",
    drawingUrl: "#"
  },
  {
    id: "gears",
    name: "Spur & Helical Gear Components",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80",
    material: "20MnCr5 (Case Carburized), EN353",
    tolerance: "DIN Class 7",
    industry: "Industrial Automation, Machine Tools",
    drawingUrl: "#"
  },
  {
    id: "automotive-parts",
    name: "Suspension & Engine Components",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&q=80",
    material: "Forged Microalloyed Steel, Aluminum A356",
    tolerance: "±10 microns",
    industry: "Automotive, Off-Highway Vehicles",
    drawingUrl: "#"
  },
  {
    id: "medical-components",
    name: "Titanium Implants & Instruments",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    material: "Titanium Grade 5 (Ti-6Al-4V ELI), Medical Grade PEEK",
    tolerance: "±3 microns",
    industry: "Medical Devices, Healthcare",
    drawingUrl: "#"
  },
  {
    id: "industrial-components",
    name: "Specialized Hydraulic Blocks & Manifolds",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    material: "Aluminum 6061-T6, Cast Ductile Iron GGG40",
    tolerance: "±15 microns",
    industry: "Hydraulics, Industrial Equipment",
    drawingUrl: "#"
  },
  {
    id: "pump-parts",
    name: "Stainless Steel Pump Impellers",
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0b4b?auto=format&fit=crop&w=600&q=80",
    material: "Duplex Stainless Steel (UNS S31803), Monel 400",
    tolerance: "Dynamic Balance G2.5",
    industry: "Marine, Fluid Handling",
    drawingUrl: "#"
  },
  {
    id: "valve-components",
    name: "High Pressure Valve Stems & Plugs",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=600&q=80",
    material: "SS316 Stellite Coated, Inconel 625",
    tolerance: "±5 microns",
    industry: "Oil & Gas, Power Generation",
    drawingUrl: "#"
  },
  {
    id: "custom-machined-parts",
    name: "Custom Robotic Arm Joints",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    material: "Aircraft Grade Aluminum 7075-T6",
    tolerance: "±5 microns",
    industry: "Robotics & Industrial Automation",
    drawingUrl: "#"
  }
];

export const INDUSTRIES = [
  {
    id: "automotive",
    title: "Automotive",
    icon: "Car",
    description: "Tier-1 component manufacturing for high-performance passenger vehicles, commercial trucks, and suspension assemblies."
  },
  {
    id: "aerospace",
    title: "Aerospace",
    icon: "Plane",
    description: "Highly controlled machining of critical aero-structure components, bracketry, and engine housing fittings in Titanium and Inconel."
  },
  {
    id: "medical",
    title: "Medical",
    icon: "Activity",
    description: "Ultra-precision components for surgical instruments, implantable devices, and laboratory diagnostics equipment under strict ISO 13485 standards."
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: "Droplet",
    description: "Heavy-duty valves, drill bits, subsea housings, and high-pressure flanges designed to withstand corrosive environments."
  },
  {
    id: "defence",
    title: "Defence",
    icon: "Shield",
    description: "Partnering in national defense manufacturing with high-reliability mechanical assemblies, armor plating, and radar mounting fixtures."
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    icon: "Cpu",
    description: "Pneumatic valve manifolds, servo-motor shaft adapters, robotic arm linkages, and sensor brackets for automated assembly lines."
  },
  {
    id: "textile-machinery",
    title: "Textile Machinery",
    icon: "Scissors",
    description: "High-speed guide rollers, cams, gears, and structural frames that support continuous operation of spinning and weaving machines."
  },
  {
    id: "food-processing",
    title: "Food Processing",
    icon: "Coffee",
    description: "Food-grade stainless steel (SS316L) mixers, shafts, housings, and filling nozzles fabricated and polished to prevent product accumulation."
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: "Sprout",
    description: "High-wear gearboxes, axles, hitch adapters, and structural components for tractors, harvesters, and irrigation systems."
  },
  {
    id: "power-generation",
    title: "Power Generation",
    icon: "Zap",
    description: "Machining gas and steam turbine components, heat exchanger tubesheets, and generator stator parts for power utilities."
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: "Tablet",
    description: "Precision-milled aluminum heatsinks, EMI shield enclosures, micro-brackets, and sensor casings for electronics manufacturers."
  },
  {
    id: "heavy-engineering",
    title: "Heavy Engineering",
    icon: "Anchor",
    description: "Large-scale fabrication and heavy milling for mining equipment, steel mill rollers, earthmovers, and infrastructure projects."
  }
];

export const QUALITY_PROCESS = [
  {
    id: "material-inspection",
    step: "01",
    title: "Raw Material Receipt & Chemical Verification",
    description: "Verification of mill test certificates (MTC). Random samples undergo spectrometer chemical composition and ultrasonic flaw tests to ensure zero inclusions."
  },
  {
    id: "first-article",
    step: "02",
    title: "First Article Inspection (FAI)",
    description: "The initial part of each production run is fully inspected inside our metrology lab. CNC programs are frozen only after FAI approval by Quality Manager."
  },
  {
    id: "in-process",
    step: "03",
    title: "In-Process Inspection & SPC Charting",
    description: "Machinists perform scheduled checks using micrometers and digital height gauges. Dimensions are recorded in SPC charts to identify drift."
  },
  {
    id: "cmm-inspection",
    step: "04",
    title: "Final 3D CMM & Metrology Audit",
    description: "Finished components are cleaned and transferred to the metrology lab where our Coordinate Measuring Machine validates complex tolerances."
  },
  {
    id: "surface-testing",
    step: "05",
    title: "Surface Finish & Hardness Profiling",
    description: "Evaluation of surface roughness (Ra) using digital profilometers and mechanical hardness (Rockwell/Vickers) checks on heat-treated parts."
  },
  {
    id: "material-traceability",
    step: "06",
    title: "Serialization & Traceability Marking",
    description: "Parts are laser-etched with unique batch or serial numbers. Inspection reports, MTCs, and CMM datasheets are archived for 100% material traceability."
  }
];

export const TIMELINE = [
  { year: "2001", title: "Company Inception", desc: "Started as a small manual workshop with 2 lathes and 3 workers in Coimbatore, India." },
  { year: "2006", title: "First CNC Investment", desc: "Acquired our first CNC Turing Center and expanded our team to 15 engineers." },
  { year: "2010", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2008 certification and became a Tier-1 supplier to leading auto OEMs." },
  { year: "2015", title: "Advanced VMC & HMC Expansion", desc: "Moved into a newly built 30,000 sq ft state-of-the-art facility. Installed multi-axis HMCs." },
  { year: "2020", title: "Laser & 5-Axis Tech", desc: "Pioneered continuous 5-Axis machining capabilities and added a 6kW high-speed fiber laser division." },
  { year: "2026", title: "Industry 4.0 Digital Factory", desc: "Integrated smart IoT sensors across all CNCs for live uptime tracking. Commenced global export operations." }
];

export const MANAGEMENT = [
  {
    name: "Dr. Ramesh Nair",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "PhD in Mechanical Engineering from IIT Bombay with 30+ years of industrial experience. Leading corporate strategy and technology investments."
  },
  {
    name: "Sanjay Sharma",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Ex-Tata Motors Operations Head. 20+ years of experience in Lean Manufacturing, shop-floor management, and production scheduling."
  },
  {
    name: "Meera Deshmukh",
    role: "Head of Quality Assurance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Certified ASQ Quality Auditor with 15 years experience in aerospace and medical component quality systems, CMM programming, and compliance audits."
  },
  {
    name: "Vikram Malhotra",
    role: "Director of International Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Focuses on global partnerships, OEM contract negotiations, and international exports. Coordinates closely with our European and US partners."
  }
];

export const FAQS = [
  {
    q: "What types of materials are you capable of machining?",
    a: "We machine a wide range of materials, including Carbon Steels (EN8, EN24, EN19), Stainless Steels (SS304, SS316, Duplex, SS410), Aluminum (6061-T6, 7075-T6), Brass, Bronze, Copper, Exotic Alloys (Inconel 625/718, Hastelloy, Titanium Grade 5), and engineering plastics like PEEK, Delrin, and Nylon."
  },
  {
    q: "What is your standard machining tolerance?",
    a: "Our typical production tolerances are around ±10 microns (0.01mm). However, in our temperature-controlled finish-machining centers, we can reliably achieve dimensional tolerances as tight as ±5 microns (0.005mm) and high surface finishes."
  },
  {
    q: "Do you have a Minimum Order Quantity (MOQ)?",
    a: "No, we do not have a strict MOQ. We support prototyping runs (1-10 parts), low-volume pre-production batches (100 parts), and high-volume continuous supply contracts (10,000+ parts/month)."
  },
  {
    q: "Are you ISO Certified?",
    a: "Yes, Apex Precision Engineering is ISO 9001:2015 certified. We are also compliant with major global defense and aerospace standard structures and are actively working towards AS9100 Rev D certification."
  },
  {
    q: "Can you assist with component design or engineering drawings?",
    a: "While we specialize in build-to-print manufacturing from customer drawings, our engineering team provides extensive Design-for-Manufacturability (DFM) reviews. We suggest design adjustments that can reduce tooling setups, cycle times, and raw material waste, lowering overall costs."
  },
  {
    q: "How do you ensure raw material authenticity?",
    a: "Every batch of raw material we buy is sourced from approved mills and arrives with a Mill Test Certificate (MTC). We verify the certificate details and perform physical/spectrochemical testing in independent labs before material release."
  },
  {
    q: "What are your sheet metal laser cutting capacities?",
    a: "Our 6kW Fiber Laser cuts sheets up to 3000 x 1500mm. Material thickness capacity is up to 25mm for Mild Steel, 16mm for Stainless Steel, 12mm for Aluminum, and 12mm for Brass/Copper."
  },
  {
    q: "Do you offer post-machining surface treatments?",
    a: "Yes, we offer complete turn-key solutions. We coordinate post-processing treatments including Heat Treatment (hardening, tempering, nitriding, induction), Plating (Zinc, Nickel, Chrome, Cadmium), Anodizing (Type II & Type III Hard Anodize), Powder Coating, Phosphating, and Black Oxide."
  },
  {
    q: "What inspection equipment does your QA lab utilize?",
    a: "Our QA lab is equipped with a high-accuracy CNC Coordinate Measuring Machine (CMM) from Zeiss, Digital Height Gauges (Mitutoyo), Optical Profile Projector, Digital Surface Roughness Testers, Micrometers, Calipers, Thread Gauges, Bore Gauges, and Coating Thickness Meters."
  },
  {
    q: "Can you provide First Article Inspection Reports (FAIR)?",
    a: "Yes, we provide first article inspection reports conforming to AS9102 formats upon request, along with raw material test reports, heat treatment certificates, and CMM inspection sheets."
  },
  {
    q: "What CAD/CAM software systems do your engineers use?",
    a: "Our engineering and programming department utilizes SOLIDWORKS for 3D modeling and design reviews, and Mastercam and Autodesk Fusion 360 for multi-axis CNC path generation and simulation."
  },
  {
    q: "How do you manage confidentiality and Intellectual Property?",
    a: "We take IP security very seriously. We routinely execute Non-Disclosure Agreements (NDAs) with our clients. All client CAD designs and drawings are stored on secure servers with restricted folder permissions."
  },
  {
    q: "Do you export machined components internationally?",
    a: "Yes, we are export-ready. We currently export custom components to customers in Germany, the USA, UAE, and Australia. We handle custom packaging (seaworthy vacuum barrier bags, rust preventatives, ISPM-15 heat-treated wood crates) and export customs clearance documentation."
  },
  {
    q: "What is your standard lead time for prototypes vs. production?",
    a: "Standard lead time for prototype parts is typically 5 to 10 working days depending on geometry and material availability. For production batches, standard lead times are 3 to 5 weeks. We also offer expedited turnaround services for emergency downtime situations."
  },
  {
    q: "Do you support Kanban or Just-In-Time (JIT) delivery systems?",
    a: "Yes, for long-term supply contracts, we offer buffer inventory programs. We hold agreed levels of finished components in our warehouse and dispatch shipments daily or weekly based on your production schedules."
  },
  {
    q: "What types of welding certifications do you hold?",
    a: "Our welding shop and operators are certified to AWS D1.1 (Structural Carbon Steel Welding) and AWS D1.6 (Structural Stainless Steel Welding) standards. We support MIG, TIG, and spot-welding processes."
  },
  {
    q: "Can you handle assembly of multi-part components?",
    a: "Absolutely. We have a dedicated assembly section. We install hardware like PEM fasteners, bearings, bush insertions, pins, seals, and perform structural bolting, riveting, and basic pneumatic integrations."
  },
  {
    q: "How do you calculate your manufacturing quotations?",
    a: "Quotations are calculated based on raw material costs, machining run time (hourly machine rates), setup times, custom tooling requirements, secondary outsourcing costs (heat treat/plating), and inspection/packaging time. We aim to return detailed RFQ quotes within 24-48 hours."
  },
  {
    q: "What is reverse engineering, and how do you do it?",
    a: "Reverse engineering is the process of recreating a drawing and manufacturing plan from an existing physical part. We use physical calipers/micrometers and 3D coordinate scanning to rebuild the CAD model, identify material hardness/composition, and manufacture an exact replica."
  },
  {
    q: "Who should I contact for immediate support or quotation updates?",
    a: "For RFQs and general business inquiries, please submit our online RFQ form or email sales@apexprecision.co.in. For urgent issues, you can click our floating WhatsApp link to chat directly with our technical support engineer."
  }
];

export const CAREERS = [
  {
    id: "cnc-programmer",
    title: "Senior CNC / VMC Programmer",
    dept: "Production & Programming",
    exp: "5-8 Years",
    loc: "Coimbatore (Race Course Site)",
    desc: "We are looking for a skilled programmer proficient in Mastercam and SolidWorks to create multi-axis milling and turning paths, optimize fixture layouts, and lead our shop floor machinist team.",
    reqs: [
      "Expert knowledge of Mastercam / Fusion 360 CAM software",
      "Hands-on experience with Fanuc, Siemens, and Heidenhain controls",
      "Ability to interpret complex GD&T drawing symbols and tolerances",
      "Strong understanding of high-speed machining (HSM) parameters and tool geometries"
    ]
  },
  {
    id: "qa-engineer",
    title: "Quality Assurance Engineer (CMM Operator)",
    dept: "Quality Control",
    exp: "3-5 Years",
    loc: "Coimbatore (Race Course Site)",
    desc: "Responsible for operating coordinate measuring machines (CMM), programming part inspections using PC-DMIS, generating First Article Inspection Reports (FAIR), and conducting calibration tests.",
    reqs: [
      "Degree or Diploma in Mechanical Engineering",
      "Proficient in operating and programming CNC CMMs (Zeiss / Mitutoyo)",
      "Strong command over height gauges, micrometers, and thread gauges calibration",
      "Knowledge of ISO 9001 quality audits and SPC record keeping"
    ]
  },
  {
    id: "welder-fabricator",
    title: "Certified TIG/MIG Welder & Fabricator",
    dept: "Welding & Assembly",
    exp: "2-5 Years",
    loc: "Coimbatore (Race Course Site)",
    desc: "Perform precision TIG and MIG welding on stainless steel plates, piping, and structural frames. Responsible for set up, jig alignment, and ensuring high-quality, leak-proof weld joints.",
    reqs: [
      "AWS D1.1 / D1.6 welding certification is a strong advantage",
      "Ability to read fabrication drawing prints and layout weld sequences",
      "Experience in grinding, polishing, and weld finishing to food-grade standards",
      "Familiarity with sheet metal press brake bending setup is a plus"
    ]
  },
  {
    id: "sales-engineer",
    title: "Technical Sales & Estimations Engineer",
    dept: "Sales & Marketing",
    exp: "3-6 Years",
    loc: "Coimbatore / Remote Options",
    desc: "Reviewing incoming RFQs and CAD models, preparing detailed cycle time estimates, calculating material weights, sourcing outsourcing prices, and creating professional pricing quotations for clients.",
    reqs: [
      "B.E. / B.Tech in Mechanical or Production Engineering",
      "Strong ability to read 2D technical drawings and identify production operations",
      "Prior experience in estimating CNC machining and fabrication cycle times",
      "Excellent communication and negotiation skills in English and Hindi"
    ]
  }
];

export const BLOGS = [
  {
    id: "cnc-machining-tolerance-guide",
    title: "Understanding CNC Machining Tolerances: A Guide for Designers",
    category: "CNC Machining",
    date: "June 25, 2026",
    summary: "Designing parts with tight tolerances can double your manufacturing costs. Learn how to specify cost-effective, functional tolerances for your machined components.",
    content: "When engineering custom machined components, the choice of tolerance plays a massive role in the final manufacturing cost. Designing a shaft with a ±5 micron tolerance requires slower finish-machining cuts, specialized temperature-controlled environments, and 100% CMM inspection. In this article, we explain the difference between clearance, transition, and interference fits and provide practical recommendations for optimizing your drawings for lower manufacturing cycle times.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "industry-4-0-in-manufacturing",
    title: "Implementing Industry 4.0: Live CNC Monitoring & Smart Tooling",
    category: "Industry 4.0",
    date: "May 18, 2026",
    summary: "How connecting our shop floor machines to central databases helps improve overall equipment efficiency (OEE) and eliminate bottlenecks.",
    content: "Industry 4.0 is no longer a concept for the future; it is actively boosting productivity on our shop floor today. By installing IoT sensors and MTConnect adaptors on our Japanese HMCs and Turning Centers, our plant managers track spindle vibration, thermal expansion, and electrical load in real time. We share our experiences in reducing unplanned machine downtime by 18% and using predictive maintenance analytics to replace grinding tools before failure.",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "choosing-fiber-laser-power",
    title: "Fiber Laser Cutting vs. Waterjet: Which is Right for Your Plate?",
    category: "Fabrication",
    date: "April 11, 2026",
    summary: "A head-to-head comparison of Fiber Laser and Waterjet cutting based on material thickness, speed, accuracy, and operational cost.",
    content: "When cutting complex shapes out of sheet metal or heavy plate, engineers must choose between fiber lasers, CO2 lasers, plasma cutters, and abrasive waterjets. While waterjets excel at cutting super-thick titanium without thermal stresses, fiber lasers deliver unrivaled speeds and cost-per-part efficiency on mild steels up to 25mm and stainless steels. We analyze the technical differences to help you select the optimal cutting process.",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "titanium-machining-challenges",
    title: "Overcoming Tool Wear in Titanium Grade 5 Machining",
    category: "Precision Engineering",
    date: "March 02, 2026",
    summary: "Titanium's high strength and poor thermal conductivity lead to rapid tool failure. Read our engineering team's strategy for milling Titanium Grade 5.",
    content: "Titanium Grade 5 is highly sought after in aerospace and medical implants due to its strength-to-weight ratio. However, machining it is notoriously difficult. Its low thermal conductivity means heat generated during cutting accumulates at the cutter edge, leading to chipping and chemical wear. We discuss how we use trochoidal milling toolpaths, specialized carbide coatings, and high-pressure through-spindle coolant to double tool life and maintain tolerances.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rajesh Kulkarni",
    role: "VP of Supply Chain",
    company: "Mahindra & Mahindra Ltd",
    review: "Apex Precision has been our trusted partner for gear shafts and precision brackets for the last 5 years. Their delivery is consistent, and their ISO compliance makes material audits a breeze. Highly recommended for automotive OEM supplies.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t2",
    name: "Dr. Elizabeth Vance",
    role: "Director of R&D",
    company: "MedTech Solutions Europe",
    review: "The surgical instrument prototypes delivered by Apex were flawless. Tolerances were checked at ±3 microns, and their raw material chemical verification report was exceptionally detailed. They are our go-to partner for complex machining.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t3",
    name: "Amitabh Banerjee",
    role: "Procurement Manager",
    company: "Larsen & Toubro Heavy Engineering",
    review: "Apex manufactured custom heavy manifold blocks for our hydraulic systems. Their dual-pallet HMC capacity ensured they met our tight delivery schedule, and weld penetration testing reports (UT/NDT) were fully documented. Excellent engineering capabilities.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const GALLERY_ITEMS = [
  { id: 1, category: "Machines", title: "5-Axis CNC Machining Center", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Production", title: "Automated CNC Turning Run", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Workers", title: "Machinist setting up raw stock", image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Inspection", title: "Zeiss CMM checking 3D dimensions", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Assembly", title: "Hydraulic manifold mechanical assembly", image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Packaging", title: "Anti-rust VCI vacuum packing", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Loading", title: "Seaworthy crate loading for export", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Office", title: "Design team conducting DFM review", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" }
];
