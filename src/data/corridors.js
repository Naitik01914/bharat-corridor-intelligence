/** Public programme summary. Node lists follow widely published NICDC investment regions. */
export const corridors = [
  {
    id: "dmic",
    number: "01",
    code: "DMIC",
    name: "Delhi–Mumbai Industrial Corridor",
    label: "Delhi-Mumbai (DMIC)",
    color: "#2563EB",
    colorName: "Royal Blue",
    textColor: "#ffffff",
    span: "Delhi NCR to Jawaharlal Nehru Port, Mumbai",
    length: "About 1,500 km",
    summary:
      "The flagship corridor of the National Industrial Corridor Development Programme (NICDP), planned along the Western Dedicated Freight Corridor (WDFC).",
    industry:
      "Manufacturing cities and investment regions for automobiles, electronics, engineering, and chemicals. Dholera in Gujarat is the best-known greenfield industrial city on this belt.",
    logistics:
      "Western Dedicated Freight Corridor (WDFC) from Dadri toward JNPT, the Delhi–Mumbai highway spine (NH-48), and western ports including JNPT, Mundra, and Pipavav.",
    nodes: [
      "Dadri–Noida–Ghaziabad",
      "Manesar–Bawal",
      "Khushkhera–Bhiwadi–Neemrana",
      "Pithampur–Dhar–Mhow",
      "Ahmedabad–Dholera",
      "Shendra–Bidkin",
    ],
    states: ["Delhi (UT)", "Uttar Pradesh", "Haryana", "Rajasthan", "Madhya Pradesh", "Gujarat", "Maharashtra"],
  },
  {
    id: "akic",
    number: "02",
    code: "AKIC",
    name: "Amritsar–Kolkata Industrial Corridor",
    label: "Amritsar-Kolkata (AKIC)",
    color: "#F97316",
    colorName: "Vibrant Orange",
    textColor: "#ffffff",
    span: "Amritsar to Kolkata",
    length: "About 1,800 km",
    summary:
      "The northern and eastern manufacturing belt planned along the influence area of the Eastern Dedicated Freight Corridor.",
    industry:
      "Agro-processing, textiles, leather, food, and general manufacturing across the Indo-Gangetic plain, linking Punjab’s industry to the Kolkata port system.",
    logistics:
      "Eastern Dedicated Freight Corridor from the Ludhiana side toward Dankuni, with connections to Kolkata and Haldia.",
    nodes: ["Amritsar", "Ludhiana", "Khurja", "Kanpur", "Prayagraj", "Sonnagar", "Dankuni"],
    states: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar", "Jharkhand", "West Bengal"],
  },
  {
    id: "cbic",
    number: "03",
    code: "CBIC",
    name: "Chennai–Bengaluru Industrial Corridor",
    label: "Chennai-Bengaluru (CBIC)",
    color: "#16A34A",
    colorName: "Forest Green",
    textColor: "#ffffff",
    span: "Chennai to Bengaluru",
    length: "About 560 km across Tamil Nadu, Andhra Pradesh, and Karnataka",
    summary:
      "A southern manufacturing corridor connecting Chennai’s ports and electronics base with Bengaluru’s engineering and technology cluster.",
    industry:
      "Electronics, automobiles, aerospace, engineering, and auto-components clustered around Sriperumbudur, Hosur, and Bengaluru.",
    logistics:
      "Chennai, Ennore, and Krishnapatnam ports, the Chennai–Bengaluru express highway, and dedicated rail spine.",
    nodes: ["Chennai–Sriperumbudur", "Hosur", "Bengaluru–Tumakuru", "Krishnapatnam"],
    states: ["Tamil Nadu", "Andhra Pradesh", "Karnataka"],
  },
  {
    id: "vcic",
    number: "04",
    code: "VCIC",
    name: "Vizag–Chennai Industrial Corridor",
    label: "Vizag-Chennai (VCIC)",
    color: "#9333EA",
    colorName: "Purple",
    textColor: "#ffffff",
    span: "Visakhapatnam to Chennai (Phase 1 of East Coast Economic Corridor)",
    length: "About 800 km coastal corridor",
    summary:
      "India's first coastal industrial corridor along the Bay of Bengal, developed with Asian Development Bank (ADB) support as Phase 1 of the East Coast Economic Corridor (ECEC).",
    industry:
      "Port-led manufacturing, pharmaceuticals, petrochemicals, aerospace, textiles, and agro-processing tied to Visakhapatnam, Kakinada, and Chennai.",
    logistics:
      "Deepwater ports including Visakhapatnam, Gangavaram, Kakinada, and Krishnapatnam, backed by NH-16 and eastern coastal rail lines.",
    nodes: ["Visakhapatnam", "Kakinada", "Amaravati region", "Chennai", "Srikalahasti–Yerpedu"],
    states: ["Andhra Pradesh", "Tamil Nadu", "West Bengal", "Odisha"],
  },
  {
    id: "bmic",
    number: "05",
    code: "BMIC",
    name: "Bengaluru–Mumbai Industrial Corridor",
    label: "Bengaluru-Mumbai (BMIC)",
    color: "#DC2626",
    colorName: "Crimson Red",
    textColor: "#ffffff",
    span: "Bengaluru to Mumbai (also designated BMEC)",
    length: "About 1,000 km Western Deccan link",
    summary:
      "Connects Bengaluru’s technology and engineering base with the Mumbai–Pune mega industrial hub across Karnataka and Maharashtra.",
    industry:
      "Engineering, automobiles, IT hardware, aerospace, machine tools, and pharmaceuticals across Dharwad, Belagavi, Pune, and Mumbai.",
    logistics:
      "NH-48 highway corridor, western rail network, Pune logistics nodes, and Jawaharlal Nehru Port (JNPT) at the northern terminal.",
    nodes: ["Bengaluru", "Tumakuru", "Dharwad", "Belagavi", "Pune", "Mumbai"],
    states: ["Karnataka", "Maharashtra"],
  },
  {
    id: "cbic-kochi",
    number: "06",
    code: "CBIC-Kochi",
    name: "Chennai–Bengaluru Extension to Kochi",
    label: "Chennai-Bengaluru Extension to Kochi",
    color: "#0D9488",
    colorName: "Teal",
    textColor: "#ffffff",
    span: "Bengaluru / Coimbatore to Kochi (via Palakkad)",
    length: "Regional extension through the southern industrial heartland",
    summary:
      "The southern peninsula extension of CBIC connecting the Coimbatore engineering cluster and Palakkad manufacturing node to the international port of Kochi.",
    industry:
      "Textiles, precision engineering, pump manufacturing, electronics, and port-driven export processing around Coimbatore, Palakkad, and Kochi.",
    logistics:
      "NH-544 highway corridor, Palakkad rail junction, and direct connection to Cochin International Seaport and Vallarpadam ICTT.",
    nodes: ["Coimbatore", "Palakkad", "Kochi"],
    states: ["Tamil Nadu", "Kerala"],
  },
  {
    id: "hnic",
    number: "07",
    code: "HNIC",
    name: "Hyderabad–Nagpur Industrial Corridor",
    label: "Hyderabad-Nagpur (HNIC)",
    color: "#EAB308",
    colorName: "Golden Yellow",
    textColor: "#17241e",
    span: "Hyderabad to Nagpur",
    length: "About 500 km Central India link",
    summary:
      "A central corridor connecting Telangana’s industrial and pharma base with central India's multimodal logistics crossroads at Nagpur.",
    industry:
      "Pharmaceuticals, defense manufacturing, heavy engineering, warehousing, and logistics around Hyderabad and Nagpur.",
    logistics:
      "NH-44 North–South highway spine, central rail lines, and Nagpur’s multi-modal cargo hub (MIHAN).",
    nodes: ["Hyderabad", "Medchal", "Adilabad", "Nagpur"],
    states: ["Telangana", "Maharashtra"],
  },
  {
    id: "hwic",
    number: "08",
    code: "HWIC",
    name: "Hyderabad–Warangal Industrial Corridor",
    label: "Hyderabad-Warangal (HWIC)",
    color: "#DB2777",
    colorName: "Magenta Pink",
    textColor: "#ffffff",
    span: "Hyderabad to Warangal",
    length: "About 150 km regional growth corridor",
    summary:
      "A dedicated regional industrial corridor dispersing industrial growth eastward from Hyderabad toward Warangal and the Kakatiya Mega Textile Park.",
    industry:
      "Textiles, apparel manufacturing, IT peripherals, biotechnology, and agricultural equipment.",
    logistics:
      "NH-163 expressway connection, South Central Railway trunk line, and proximity to Hyderabad International Airport.",
    nodes: ["Hyderabad", "Bhongir", "Ghanpur", "Warangal"],
    states: ["Telangana"],
  },
  {
    id: "hbic",
    number: "09",
    code: "HBIC",
    name: "Hyderabad–Bengaluru Industrial Corridor",
    label: "Hyderabad-Bengaluru (HBIC)",
    color: "#92400E",
    colorName: "Chocolate Brown",
    textColor: "#ffffff",
    span: "Hyderabad to Bengaluru",
    length: "About 570 km Deccan plateau link",
    summary:
      "Bridges two of southern India's primary technology and manufacturing capitals through Rayalaseema and the central Deccan plateau.",
    industry:
      "Pharmaceuticals, aerospace, defense systems, electronics, solar equipment, and mineral-based manufacturing (e.g. Orvakal industrial node).",
    logistics:
      "NH-44 six-lane highway, major rail spine, Kurnool logistics hub, and air-cargo facilities at Bengaluru and Hyderabad.",
    nodes: ["Hyderabad", "Mahbubnagar", "Kurnool (Orvakal)", "Anantapur", "Bengaluru"],
    states: ["Telangana", "Andhra Pradesh", "Karnataka"],
  },
  {
    id: "oec",
    number: "10",
    code: "OEC",
    name: "Odisha Economic Corridor",
    label: "Odisha Economic Corridor (OEC)",
    color: "#64748B",
    colorName: "Slate Grey",
    textColor: "#ffffff",
    span: "Odisha coastal, mineral, and steel belt",
    length: "About 600 km state corridor integrated with ECEC",
    summary:
      "Odisha’s strategic industrial corridor leveraging the state's deep mineral reserves, metals manufacturing, and major deepwater ports.",
    industry:
      "Steel, aluminium smelting, minerals processing, petrochemicals, green hydrogen, and port-based export manufacturing.",
    logistics:
      "Paradip, Dhamra, and Gopalpur deepwater ports, with the East Coast railway trunk line and NH-16.",
    nodes: ["Bhubaneswar", "Cuttack", "Paradip", "Kalinganagar", "Gopalpur"],
    states: ["Odisha"],
  },
  {
    id: "dnic",
    number: "11",
    code: "DNIC",
    name: "Delhi–Nagpur Industrial Corridor",
    label: "Delhi-Nagpur (DNIC)",
    color: "#84CC16",
    colorName: "Lime Green",
    textColor: "#17241e",
    span: "Delhi NCR to Nagpur",
    length: "About 1,000 km North–Central artery",
    summary:
      "Connects the national capital region with central India's freight crossroads at Nagpur, linking major industrial clusters across Uttar Pradesh and Madhya Pradesh.",
    industry:
      "Automobiles, defense corridor projects, machinery, food processing, warehousing, and nation-wide distribution networks.",
    logistics:
      "North–South transit trunk corridors, Agra–Gwalior–Bhopal–Nagpur highway spine, and multi-directional rail junctions at Nagpur.",
    nodes: ["Delhi NCR", "Agra", "Gwalior", "Bhopal", "Nagpur"],
    states: ["Delhi (UT)", "Uttar Pradesh", "Madhya Pradesh", "Maharashtra"],
  },
];

export const places = [
  { state: "Delhi (UT)", cities: ["Delhi", "Dadri–NCR edge"], corridors: ["DMIC", "DNIC"] },
  { state: "Uttar Pradesh", cities: ["Noida", "Ghaziabad", "Dadri", "Khurja", "Kanpur", "Prayagraj", "Agra"], corridors: ["DMIC", "AKIC", "DNIC"] },
  { state: "Haryana", cities: ["Gurugram", "Manesar", "Bawal"], corridors: ["DMIC", "AKIC"] },
  { state: "Rajasthan", cities: ["Neemrana", "Bhiwadi", "Khushkhera", "Jodhpur"], corridors: ["DMIC"] },
  { state: "Punjab", cities: ["Amritsar", "Ludhiana"], corridors: ["AKIC"] },
  { state: "Bihar", cities: ["Sonnagar"], corridors: ["AKIC"] },
  { state: "Jharkhand", cities: ["Eastern freight belt"], corridors: ["AKIC"] },
  { state: "West Bengal", cities: ["Kolkata", "Dankuni", "Haldia"], corridors: ["AKIC", "VCIC"] },
  { state: "Madhya Pradesh", cities: ["Pithampur", "Dhar", "Mhow", "Gwalior", "Bhopal"], corridors: ["DMIC", "DNIC"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Dholera", "Vadodara", "Surat"], corridors: ["DMIC"] },
  { state: "Maharashtra", cities: ["Mumbai", "Nhava Sheva", "Shendra–Bidkin", "Pune", "Nagpur"], corridors: ["DMIC", "BMIC", "HNIC", "DNIC"] },
  { state: "Karnataka", cities: ["Bengaluru", "Tumakuru", "Dharwad", "Belagavi"], corridors: ["CBIC", "BMIC", "HBIC"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Sriperumbudur", "Hosur", "Coimbatore"], corridors: ["CBIC", "VCIC", "CBIC-Kochi"] },
  { state: "Andhra Pradesh", cities: ["Visakhapatnam", "Kakinada", "Krishnapatnam", "Kurnool", "Anantapur"], corridors: ["VCIC", "CBIC", "HBIC"] },
  { state: "Telangana", cities: ["Hyderabad", "Warangal", "Bhongir", "Medchal"], corridors: ["HNIC", "HWIC", "HBIC"] },
  { state: "Kerala", cities: ["Kochi", "Palakkad"], corridors: ["CBIC-Kochi"] },
  { state: "Odisha", cities: ["Bhubaneswar", "Paradip", "Cuttack", "Kalinganagar", "Gopalpur"], corridors: ["OEC", "VCIC"] },
];

/** Quick lookup for a corridor by its ID, code, or alias */
export function getCorridor(key) {
  if (!key) return corridors[0];
  const query = String(key).toLowerCase().trim();

  // Alias mappings for legacy codes
  const aliasMap = {
    ecec: "vcic",
    bmec: "bmic",
    "cbic-ext": "cbic-kochi",
    cbick: "cbic-kochi",
  };
  const resolved = aliasMap[query] || query;

  return (
    corridors.find(
      (c) =>
        c.id.toLowerCase() === resolved ||
        c.code.toLowerCase() === resolved ||
        c.number === resolved ||
        c.label.toLowerCase().includes(resolved)
    ) || corridors[0]
  );
}

/** Returns theme details { number, color, colorName, textColor, label } */
export function getCorridorTheme(key) {
  const c = getCorridor(key);
  return {
    number: c.number,
    code: c.code,
    name: c.name,
    label: c.label,
    color: c.color,
    colorName: c.colorName,
    textColor: c.textColor,
  };
}

export const references = [
  {
    name: "National Industrial Corridor Development Corporation (NICDC)",
    detail: "Implementing agency for the 11 national industrial corridors, node master plans, and smart city developments.",
    href: "https://www.nicdc.in/",
  },
  {
    name: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    detail: "Nodal department in the Ministry of Commerce and Industry for industrial corridor policy and national logistics.",
    href: "https://dpiit.gov.in/",
  },
  {
    name: "Dedicated Freight Corridor Corporation of India (DFCCIL)",
    detail: "Builds and operates the Western and Eastern Dedicated Freight Corridors (WDFC & EDFC) that anchor DMIC and AKIC.",
    href: "https://dfccil.com/",
  },
  {
    name: "Ministry of Ports, Shipping and Waterways",
    detail: "Port infrastructure and Sagarmala connectivity powering maritime and coastal corridors like VCIC and OEC.",
    href: "https://shipmin.gov.in/",
  },
  {
    name: "Asian Development Bank (ADB)",
    detail: "Development and financing partner for the Visakhapatnam–Chennai Industrial Corridor (VCIC).",
    href: "https://www.adb.org/",
  },
  {
    name: "Press Information Bureau (PIB)",
    detail: "Official Union Cabinet approvals and progress milestones for the National Industrial Corridor Programme.",
    href: "https://pib.gov.in/",
  },
];
