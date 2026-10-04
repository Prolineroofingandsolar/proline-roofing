export interface LocationData {
  slug: string;
  name: string;
  county: string;
  postcodePrefix: string;
  intro: string;
  landmarks: string[];
  nearbyAreas: string[];
  roofingNote: string;
  solarNote: string;
  emergencyNote: string;
  faqs: Array<{ q: string; a: string }>;
  testimonial: { name: string; text: string; suburb: string; service: string };
  distanceFromTaunton: string;
  driveTime: string;
}

export const locations: LocationData[] = [
  {
    slug: "taunton",
    name: "Taunton",
    county: "Somerset",
    postcodePrefix: "TA1/TA2",
    intro:
      "ProLine Roofing & Solar is based right here in Taunton, making us the most responsive and knowledgeable roofing team in the county town. From the Victorian terraces of Staplegrove Road to the newer estates around Comeytrowe, we know every roof type and every local planning consideration.",
    landmarks: [
      "Taunton Castle",
      "Somerset County Cricket Ground",
      "Vivary Park",
      "The Brewhouse Theatre",
    ],
    nearbyAreas: [
      "Norton Fitzwarren",
      "Bishops Hull",
      "Wilton",
      "Creech St Michael",
      "Bradford on Tone",
    ],
    roofingNote:
      "Taunton's mix of Victorian slate terraces, Edwardian clay-tile semis and modern concrete-tile estates means our team regularly works across a wide variety of roof styles, and we keep stock of the most common local tile profiles for fast repairs.",
    solarNote:
      "Solar suitability in Taunton varies by roof orientation, pitch, shading, condition and available space. We assess those factors alongside the property's electricity use before proposing a system.",
    emergencyNote:
      "For urgent roof problems in Taunton, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "How quickly can ProLine respond to a roofing job in Taunton?",
        a: "Because we're based in Taunton, local travel is straightforward, but survey and urgent-repair timing still depends on workload, weather and safe access. Call us and we will confirm availability.",
      },
      {
        q: "Do you work on listed buildings in Taunton town centre?",
        a: "Yes. We have experience working on listed and heritage properties in the town centre and know which materials and methods satisfy Somerset Council's conservation requirements.",
      },
      {
        q: "What is the most common roof type in Taunton?",
        a: "Much of the older housing stock uses natural Welsh slate, while interwar and post-war properties tend to have concrete interlocking tiles. We carry matching replacements for both.",
      },
      {
        q: "Are there any planning restrictions for roofing work in Taunton?",
        a: "Most like-for-like repairs and replacements don't need planning permission, but if your property is listed or in a conservation area — which applies to parts of Taunton town centre — you may need listed building consent. We can advise during your free survey.",
      },
      {
        q: "Do you offer a guarantee on roofing work carried out in Taunton?",
        a: "Absolutely. All our workmanship carries a written guarantee, and we use materials backed by manufacturers' warranties of up to 30 years depending on the product.",
      },
    ],
    testimonial: {
      name: "Karen B.",
      text: "Will and his team replaced our ageing clay tile roof in Bishops Hull last autumn. They were tidy, professional and finished ahead of schedule. The new roof looks fantastic and we've had no issues through the winter.",
      suburb: "Bishops Hull, Taunton",
      service: "Full Roof Replacement",
    },
    distanceFromTaunton: "0 miles (based here)",
    driveTime: "based here",
  },
  {
    slug: "bridgwater",
    name: "Bridgwater",
    county: "Somerset",
    postcodePrefix: "TA6",
    intro:
      "Bridgwater is one of our busiest service areas, just 11 miles from our Taunton base along the A38. From the Victorian terrace streets near the town centre to the newer housing on the Sydenham and Hamp estates, we cover the full range of roof types found across TA6.",
    landmarks: [
      "Blake Museum",
      "Bridgwater Castle ruins",
      "St Mary's Church",
      "River Parrett",
    ],
    nearbyAreas: [
      "Cannington",
      "Nether Stowey",
      "North Petherton",
      "Westonzoyland",
      "Puriton",
    ],
    roofingNote:
      "Bridgwater's proximity to the Somerset Levels means properties here can experience higher groundwater-driven damp and more aggressive wind-driven rain than inland towns, making properly sealed and flashed rooflines especially important.",
    solarNote:
      "A Bridgwater property's solar potential depends on its individual roof and surroundings rather than the town alone. The survey checks orientation, shading, structure and electricity use before output is modelled.",
    emergencyNote:
      "For urgent roof problems in Bridgwater, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "How far are you from Bridgwater?",
        a: "We travel from Taunton and regularly work across TA6. Appointment timing depends on workload, traffic, weather and safe access, so call us to confirm availability.",
      },
      {
        q: "What types of roofing work do you carry out in Bridgwater?",
        a: "We cover the full range: full roof replacements, tile and slate repairs, flat roofing, chimney work, leadwork, fascias and guttering, and emergency call-outs.",
      },
      {
        q: "Can damp from the Somerset Levels affect my roof in Bridgwater?",
        a: "The humidity associated with proximity to the Levels can accelerate moss and lichen growth and cause mortar degradation on ridge and hip tiles. We recommend periodic roof inspections and ridge-mortar checks for Bridgwater properties.",
      },
      {
        q: "Do you cover villages around Bridgwater like Cannington and North Petherton?",
        a: "Yes, we regularly work in all the surrounding villages and rural parishes within the TA6 postcode area and beyond. Travel costs are built into our quotes.",
      },
      {
        q: "What is the typical cost of a roof repair in Bridgwater?",
        a: "Minor repairs such as replacing a few slipped or broken tiles typically start from around £150–£300. More complex work such as re-ridging, leadwork or flat-roof sections is priced after a free survey. We always provide a written, fixed quote before starting.",
      },
    ],
    testimonial: {
      name: "David T.",
      text: "Our flat garage roof had been leaking for two winters and we'd had quotes from three local roofers. ProLine gave us the clearest explanation of the problem, the most competitive fixed price, and the job was done within a week. No more leaks.",
      suburb: "Hamp, Bridgwater",
      service: "Flat Roof Replacement",
    },
    distanceFromTaunton: "11 miles",
    driveTime: "20 minutes",
  },
  {
    slug: "bath",
    name: "Bath",
    county: "Somerset / BANES",
    postcodePrefix: "BA1/BA2",
    intro:
      "Bath's UNESCO World Heritage status sets it apart from any other city we serve — the stunning Bath Stone Georgian architecture demands roofers who understand conservation requirements, appropriate materials and the sensitivity required when working on historic rooflines. ProLine has the experience and knowledge to work within Bath and Northeast Somerset's strict planning guidelines.",
    landmarks: [
      "Roman Baths",
      "Royal Crescent",
      "Pulteney Bridge",
      "Bath Abbey",
    ],
    nearbyAreas: [
      "Keynsham",
      "Midsomer Norton",
      "Radstock",
      "Peasedown St John",
      "Saltford",
    ],
    roofingNote:
      "Bath's Georgian and Victorian roofscapes rely heavily on natural Welsh slate and hand-cut stone details; working here means sourcing properly matched slates and understanding Bath and North East Somerset Council's Conservation Area Appraisals before a single tile is touched.",
    solarNote:
      "Bath contains many listed buildings and conservation areas, so solar proposals need an early planning and heritage check. Permission is property-specific and must be confirmed with the relevant authority where required.",
    emergencyNote:
      "For urgent roof problems in Bath, call with the postcode and details so we can assess the risk and confirm whether attendance is available.",
    faqs: [
      {
        q: "Can you work on listed buildings and conservation area properties in Bath?",
        a: "Yes. We have experience with listed building consent applications and conservation area requirements in Bath. We'll advise on what permissions are needed and can recommend appropriate materials that satisfy BANES planning officers.",
      },
      {
        q: "What roofing materials are acceptable in Bath's conservation areas?",
        a: "Natural Welsh slate is generally the required material for pitched roofs on historic properties in Bath. Synthetic slates are sometimes acceptable on rear elevations. Lead remains the standard for flashings, valleys and parapet gutters. We'll confirm what's required during your survey.",
      },
      {
        q: "Do you offer roof surveys for pre-purchase inspections in Bath?",
        a: "Yes — a roof condition survey before purchasing a Bath period property can save significant expense. We provide a detailed written report covering the condition of the roof covering, flashings, gutters and any chimney stacks.",
      },
      {
        q: "How long does it take to replace a roof on a Georgian terrace in Bath?",
        a: "A typical two-storey terraced property with natural slate will take 3–5 days depending on the roof area, chimney complexity and scaffold requirements. We'll give you a full programme at the survey stage.",
      },
      {
        q: "Can I get solar panels on my Bath property?",
        a: "It depends on whether the property is listed and whether the panels will be visible from a public highway within a conservation area. Many Bath homeowners install panels on rear-facing slopes without planning permission. We assess each case individually and advise honestly on feasibility.",
      },
    ],
    testimonial: {
      name: "Philippa H.",
      text: "We have a mid-terrace Georgian house in BA1 and were nervous about finding a roofer who understood the requirements. ProLine came highly recommended and did not disappoint — they sourced matching Welsh slate, obtained the listed building consent on our behalf, and the work was immaculate.",
      suburb: "Larkhall, Bath",
      service: "Slate Roof Restoration",
    },
    distanceFromTaunton: "35 miles",
    driveTime: "45 minutes",
  },
  {
    slug: "weston-super-mare",
    name: "Weston-super-Mare",
    county: "North Somerset",
    postcodePrefix: "BS22/BS23",
    intro:
      "Weston-super-Mare's seaside location makes roofing challenges here unique — the salt-laden Atlantic air accelerates corrosion of metal fixings, fasteners and guttering, while its exposed coastal position means roofs face some of the harshest driving rain in the South West. ProLine's team is experienced in specifying and installing materials that stand up to Weston's demanding coastal environment.",
    landmarks: [
      "Weston Grand Pier",
      "Weston Beach",
      "SeaQuarium",
      "Tropicana",
    ],
    nearbyAreas: [
      "Clevedon",
      "Nailsea",
      "Worle",
      "Uphill",
      "Burnham-on-Sea",
    ],
    roofingNote:
      "Weston-super-Mare's position on the Bristol Channel means salt air degrades mortar joints, aluminium fixings and painted metalwork far faster than inland locations — we always specify marine-grade fixings and stainless steel components for properties within 2 miles of the seafront.",
    solarNote:
      "For Weston-super-Mare properties, the survey considers roof orientation, shading, condition and coastal exposure before specifying the mounting system and estimating output.",
    emergencyNote:
      "For urgent roof problems in Weston-super-Mare, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "Do coastal properties in Weston-super-Mare need special roofing materials?",
        a: "Yes. Within approximately 2 miles of the seafront, we recommend marine-grade stainless steel fixings, EPDM or GRP for flat roofs rather than felt, and we avoid aluminium ventilation products that corrode quickly in salt air. We'll specify appropriate materials in your survey report.",
      },
      {
        q: "How often should I have my roof inspected if I live near Weston seafront?",
        a: "We recommend an annual visual inspection for seafront and near-seafront properties, and a full survey every 3–5 years. Salt air and coastal storms mean small issues escalate faster than inland.",
      },
      {
        q: "Do you cover Worle and the estates on the eastern side of Weston?",
        a: "Absolutely — we cover all BS22 and BS23 postcodes, including Worle, Locking Castle, Hutton and the villages north towards Clevedon.",
      },
      {
        q: "What storm damage repairs do you carry out in Weston-super-Mare?",
        a: "We repair and replace blown-off or slipped tiles and slates, re-fix lifted ridge tiles, re-seal and flash damaged chimney stacks, replace snapped fascia boards, and carry out flat roof emergency patching and full re-covering.",
      },
      {
        q: "Can you repair or replace UPVC guttering in Weston?",
        a: "Yes — we carry out full gutter replacement and repair, including downpipes, hoppers, and rainwater outlets. For seafront properties we also offer cast-iron effect aluminium guttering that looks traditional but resists salt corrosion.",
      },
    ],
    testimonial: {
      name: "Sue M.",
      text: "Our Victorian bay-fronted house near the seafront had badly corroded leadwork and three cracked ridge tiles following last winter's storms. ProLine came out quickly, gave us a fair quote and the repair work has been solid ever since.",
      suburb: "Uphill, Weston-super-Mare",
      service: "Storm Damage Repair & Leadwork",
    },
    distanceFromTaunton: "27 miles",
    driveTime: "35 minutes",
  },
  {
    slug: "bristol",
    name: "Bristol",
    county: "Bristol",
    postcodePrefix: "BS1-BS16",
    intro:
      "Bristol is one of our furthest regular service areas but also one of our busiest — the city's enormous stock of Victorian and Edwardian slate-roofed terraces across Bedminster, Clifton, Redland, Horfield and Fishponds generates constant demand for quality slate repair and replacement work. We make regular trips into the city and can schedule efficiently to keep costs competitive.",
    landmarks: [
      "Clifton Suspension Bridge",
      "Bristol Harbourside",
      "Cabot Tower",
      "SS Great Britain",
    ],
    nearbyAreas: [
      "Clevedon",
      "Nailsea",
      "Portishead",
      "Filton",
      "Keynsham",
    ],
    roofingNote:
      "Bristol's dense inner-city terraces, many of them now HMOs or converted flats, often have complex shared rooflines with party walls, shared drainage and multiple chimney stacks requiring careful coordination with neighbouring properties before work begins.",
    solarNote:
      "Bristol roof layouts can be affected by neighbouring buildings, chimneys and shared structures. A site-specific survey is needed before deciding the array size or whether battery storage is worthwhile.",
    emergencyNote:
      "For urgent roof problems in Bristol, call with the postcode and details so we can assess the risk and confirm whether attendance is available.",
    faqs: [
      {
        q: "Do you travel to Bristol for roofing work?",
        a: "Yes — we regularly work across Bristol, particularly in areas with high concentrations of Victorian slate terraces such as Bedminster, Redland, Clifton, Horfield and Fishponds. We travel from our Taunton base and schedule jobs efficiently to keep prices competitive.",
      },
      {
        q: "Can you match Victorian slate roofs on Bristol terraces?",
        a: "Absolutely. We source natural Welsh and Spanish slate in the correct sizes and thicknesses to match existing roof coverings on Bristol's period housing stock, ensuring a seamless repair or partial re-covering.",
      },
      {
        q: "Do you work on Bristol flat roofs and HMO properties?",
        a: "Yes. We're experienced in flat roof replacement and repair on the bay extensions and outbuildings common on Bristol terraces, including properties in HMO use where works need to be coordinated around multiple occupiers.",
      },
      {
        q: "How far do you travel within Bristol?",
        a: "We cover all BS postcodes from BS1 through BS16. For larger or more complex projects we'll factor any travel premium into our quote transparently.",
      },
      {
        q: "Can you install solar panels on a Bristol terrace house?",
        a: "Yes, and Bristol terraces are often excellent solar properties if they have a south or west-facing rear slope. We assess each property individually, check permitted development rights and conservation area constraints, and design a system to maximise generation.",
      },
    ],
    testimonial: {
      name: "James R.",
      text: "We have a Victorian terrace in Bedminster with a slate roof that hadn't been touched in decades. ProLine came up from Taunton, surveyed it thoroughly, and gave us the most detailed and honest quote we received. The re-slating work was excellent and they tidied up perfectly.",
      suburb: "Bedminster, Bristol",
      service: "Slate Roof Re-covering",
    },
    distanceFromTaunton: "45 miles",
    driveTime: "55 minutes",
  },
  {
    slug: "exeter",
    name: "Exeter",
    county: "Devon",
    postcodePrefix: "EX1/EX2/EX4",
    intro:
      "Exeter sits just 26 miles south of Taunton across the Devon border, and our teams regularly work throughout the city's varied neighbourhoods — from the Victorian slate terraces of St Thomas and St David's to the newer Rydon Lane and Middlemoor estates. As one of the fastest-growing cities in England, Exeter has a constant need for roofing services across a wide spectrum of property types.",
    landmarks: [
      "Exeter Cathedral",
      "Exeter Castle Rougemont",
      "The Quay",
      "Northernhay Gardens",
    ],
    nearbyAreas: [
      "Tiverton",
      "Crediton",
      "Newton Abbot",
      "Exmouth",
      "Cullompton",
    ],
    roofingNote:
      "Exeter's position in the Exe Valley means it receives the full force of Atlantic weather systems coming in from the south-west, and its older housing stock — particularly the Heavitree red sandstone vernacular — requires careful material matching that a specialist roofer understands.",
    solarNote:
      "Solar output in Exeter depends on the individual roof, local shading and the final equipment specification. We model those details instead of relying on a town-wide generation estimate.",
    emergencyNote:
      "For urgent roof problems in Exeter, call with the postcode and details so we can assess the risk and confirm whether attendance is available.",
    faqs: [
      {
        q: "How long does it take you to reach Exeter for a roofing job?",
        a: "We travel to Exeter from our Taunton base. Appointment timing depends on traffic, workload, weather and safe access, so call us to confirm availability.",
      },
      {
        q: "Can you match the red sandstone and older roofing materials used on Exeter properties?",
        a: "Yes. Exeter's older housing stock uses a mix of natural slate, clay plain tiles and pantiles. We source matching materials and can advise on the correct specification for properties in Exeter's various conservation areas.",
      },
      {
        q: "Do you cover Exeter suburbs like St Thomas, Heavitree and Pinhoe?",
        a: "We cover all EX1, EX2 and EX4 postcodes, including all Exeter suburbs. We also cover surrounding towns such as Tiverton, Crediton and Cullompton.",
      },
      {
        q: "What is solar generation like in Exeter compared to other areas?",
        a: "Exeter benefits from Devon's excellent solar resource — the average household solar installation here generates around 10–15% more than the UK average. We'll give you a site-specific generation estimate in your free survey.",
      },
      {
        q: "Are there particular roofing challenges for new-build estates around Exeter?",
        a: "Newer properties around Exeter are mostly concrete interlocking tile, and the most common issues are slipped or damaged tiles at ridge and hip details. We carry the most common profiles in stock for rapid repairs.",
      },
    ],
    testimonial: {
      name: "Sarah L.",
      text: "ProLine travelled down from Taunton and did a brilliant job replacing the valley leadwork and three ridge tiles on our Victorian end-of-terrace in St Thomas. Competitively priced and very professional. Would recommend to any Exeter homeowner.",
      suburb: "St Thomas, Exeter",
      service: "Leadwork & Ridge Repair",
    },
    distanceFromTaunton: "26 miles",
    driveTime: "35 minutes",
  },
  {
    slug: "yeovil",
    name: "Yeovil",
    county: "Somerset",
    postcodePrefix: "BA20/BA21",
    intro:
      "Yeovil is one of Somerset's largest towns and one of our most regularly visited service areas — just 20 miles east of Taunton on the A303 corridor. The town's varied housing stock spans Victorian terraces around Preston Road, Edwardian semis, post-war council estates and modern private developments on the town's outskirts.",
    landmarks: [
      "St John the Baptist Church",
      "Ninesprings Country Park",
      "Yeovil Town FC",
      "Barwick Park",
    ],
    nearbyAreas: [
      "Crewkerne",
      "Ilminster",
      "Chard",
      "Martock",
      "Sherborne",
    ],
    roofingNote:
      "Yeovil sits on the Somerset-Dorset border in a slightly elevated position that makes it susceptible to south-westerly gales and driving rain, and we frequently attend to storm-damaged ridge tiles and flashing failures on properties across the BA20 and BA21 postcodes.",
    solarNote:
      "For Yeovil properties, we assess the roof orientation, shading, structure and electricity use before preparing a layout and modelled output estimate.",
    emergencyNote:
      "For urgent roof problems in Yeovil, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "How quickly can you get to Yeovil for an emergency roofing call-out?",
        a: "We travel to Yeovil from our Taunton base. Appointment timing depends on traffic, workload, weather and safe access, so call us to confirm availability.",
      },
      {
        q: "What types of properties do you work on in Yeovil?",
        a: "We work across all property types in Yeovil — Victorian and Edwardian terraces and semis, inter-war housing, post-war council stock and modern new builds. Each has different common issues and we're familiar with them all.",
      },
      {
        q: "Do you cover villages around Yeovil such as Martock and Crewkerne?",
        a: "Yes, we regularly work in the rural parishes and market towns surrounding Yeovil including Martock, Crewkerne, Ilminster, Chard and the villages along the A303 and A37 corridors.",
      },
      {
        q: "Can you carry out chimney repairs in Yeovil?",
        a: "Yes — chimney repointing, flaunching repair, lead flashing, stack rebuilding and pot removal/replacement are all services we offer regularly in Yeovil.",
      },
      {
        q: "Is solar a good investment in the Yeovil area?",
        a: "South Somerset enjoys above-average sunshine hours for England and Yeovil homeowners typically see strong returns on solar investment. We provide a free site survey with projected generation and financial savings figures tailored to your property.",
      },
    ],
    testimonial: {
      name: "Mike J.",
      text: "ProLine sorted a persistent leak on our bay extension flat roof that three other companies had failed to fix properly. They identified the real cause — a failed upstand where the flat roof meets the main house wall — repaired it correctly and it's been bone dry for 18 months now.",
      suburb: "Preston Grove, Yeovil",
      service: "Flat Roof Repair",
    },
    distanceFromTaunton: "20 miles",
    driveTime: "28 minutes",
  },
  {
    slug: "wellington",
    name: "Wellington",
    county: "Somerset",
    postcodePrefix: "TA21",
    intro:
      "Wellington is one of our closest regular service areas — just 7 miles west of Taunton at the foot of the Blackdown Hills. The town's mix of Georgian town-centre properties, Victorian mill workers' terraces and modern Tesco-era developments creates a diverse range of roofing needs, and as neighbours we know the area intimately.",
    landmarks: [
      "Wellington Monument",
      "Wellington Town Hall",
      "Blackdown Hills",
      "Wellington Museum",
    ],
    nearbyAreas: [
      "Milverton",
      "Wiveliscombe",
      "Bishops Lydeard",
      "Sampford Arundel",
      "Rockwell Green",
    ],
    roofingNote:
      "Wellington's position at the foot of the Blackdown Hills means it captures a good deal of orographic rainfall — properties on the south-facing hillside slopes can experience significantly higher precipitation than the town centre, accelerating moss growth and mortar degradation.",
    solarNote:
      "Properties around Wellington vary considerably in aspect and shading. The survey checks the actual roof and usage profile before a solar or battery recommendation is made.",
    emergencyNote:
      "For urgent roof problems in Wellington, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "What's the quickest you can get to Wellington for a roofing emergency?",
        a: "Wellington is close to our Taunton base, but appointment timing depends on workload, weather and safe access. Call us and we will confirm availability.",
      },
      {
        q: "Do you work on the rural properties and farms around Wellington?",
        a: "Yes — we regularly work on rural and agricultural buildings in the Blackdown Hills, Milverton and Wiveliscombe areas, including agricultural slate roofs, corrugated fibre-cement roof replacements and large-scale flat roof coverings on barns and outbuildings.",
      },
      {
        q: "Why does moss grow so fast on roofs in the Wellington area?",
        a: "The Blackdown Hills catch significant rainfall, and Wellington itself sees higher average precipitation than much of Somerset. This, combined with north-facing pitches and tree cover, creates ideal conditions for moss and lichen growth. We offer biocide treatment alongside our repair work.",
      },
      {
        q: "Can I install solar panels on a rural property near Wellington?",
        a: "Rural properties in the TA21 area often make excellent solar candidates due to minimal shading and the availability of large, south-facing roof slopes. We regularly install systems on farmhouses and rural cottages in the area.",
      },
      {
        q: "Do you cover Milverton and Wiveliscombe as well as Wellington town?",
        a: "Yes — we cover the whole of TA21 and the surrounding parishes, including Milverton, Wiveliscombe, Bishops Lydeard and the rural settlements along the B3187 and B3227.",
      },
    ],
    testimonial: {
      name: "Tom A.",
      text: "As a Wellington local I wanted to use a local team and ProLine fitted the bill — based in Taunton, just down the road. They reroofed our farmhouse with new Marley Modern tiles and the quality of the work is excellent. Very pleased.",
      suburb: "Rockwell Green, Wellington",
      service: "Full Roof Replacement",
    },
    distanceFromTaunton: "7 miles",
    driveTime: "12 minutes",
  },
  {
    slug: "burnham-on-sea",
    name: "Burnham-on-Sea",
    county: "Somerset",
    postcodePrefix: "TA8",
    intro:
      "Burnham-on-Sea is one of Somerset's most popular seaside towns, and its exposed position on the Bristol Channel makes it one of the most demanding environments for roofing we encounter. Salt-laden westerly gales combined with high annual rainfall require roofing materials and methods chosen specifically for coastal durability.",
    landmarks: [
      "Burnham-on-Sea Low Lighthouse",
      "Burnham Beach",
      "Berrow Dunes",
      "Bridgwater Bay",
    ],
    nearbyAreas: [
      "Highbridge",
      "Mark",
      "East Brent",
      "Huntspill",
      "Wedmore",
    ],
    roofingNote:
      "Burnham-on-Sea's coastal position on the Bristol Channel exposes roofs to persistent salt spray, strong westerly winds and driving rain that can work under even properly fitted tiles — here we always advise on appropriate underlay specification and use fully bonded leadwork rather than clipped flashings.",
    solarNote:
      "For Burnham-on-Sea properties, the solar survey considers the individual roof, shading, structure and coastal exposure before equipment and mounting details are proposed.",
    emergencyNote:
      "For urgent roof problems in Burnham-on-Sea, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "Does living near the sea affect how quickly my roof deteriorates in Burnham-on-Sea?",
        a: "Yes, significantly. Salt air accelerates corrosion of mortar joints, metal fixings and lead flashings. Properties within 1.5 miles of the Burnham seafront should use stainless steel fixings throughout and have their roof surveyed more frequently than inland properties.",
      },
      {
        q: "How do you handle emergency roof repairs after Bristol Channel storms?",
        a: "Call with the postcode and details of the storm damage. If attendance is available and conditions are safe, the first priority may be a temporary make-safe measure while a permanent repair is assessed.",
      },
      {
        q: "Do bungalows in Burnham-on-Sea have specific roofing challenges?",
        a: "Burnham's high proportion of bungalows means large, low-pitched roof areas that can be susceptible to wind uplift. We always ensure underlays are correctly lapped and tiles or slates are properly fixed at eaves and verge details.",
      },
      {
        q: "Is solar a good option for a bungalow in Burnham-on-Sea?",
        a: "Bungalows are often ideal solar properties — large, unobstructed roof areas at low pitch are easy to install on and minimise shading losses. Burnham's flat landscape means excellent solar yield from spring through autumn.",
      },
      {
        q: "Do you cover Highbridge and the surrounding villages as well as Burnham?",
        a: "Yes — we cover all of TA8 including Highbridge, Burnham-on-Sea town, Berrow, East Brent, Mark and the rural areas of the Somerset Levels west of the M5.",
      },
    ],
    testimonial: {
      name: "Janet W.",
      text: "After a particularly bad storm last January three ridge tiles blew off and we had water coming into the bedroom. ProLine responded the same day, made it safe immediately and came back within a week to carry out a full ridge re-bedding. Professional and reassuring throughout.",
      suburb: "Berrow, Burnham-on-Sea",
      service: "Emergency Storm Repair",
    },
    distanceFromTaunton: "18 miles",
    driveTime: "28 minutes",
  },
  {
    slug: "glastonbury",
    name: "Glastonbury",
    county: "Somerset",
    postcodePrefix: "BA6",
    intro:
      "Glastonbury is one of Somerset's most distinctive towns — famous globally for its festival, its Tor, and its ancient Abbey. The town's historic character means many properties here are either listed or within conservation areas, demanding roofers with heritage materials knowledge and the patience to work within planning constraints. ProLine has completed numerous projects on Glastonbury's older housing stock.",
    landmarks: [
      "Glastonbury Tor",
      "Glastonbury Abbey",
      "Chalice Well",
      "Somerset Rural Life Museum",
    ],
    nearbyAreas: ["Street", "Wells", "Shepton Mallet", "Somerton", "Castle Cary"],
    roofingNote:
      "Glastonbury's built environment includes Ham Stone and Blue Lias limestone buildings alongside standard brick and render properties, so roofing work may require carefully matched materials and checks against Somerset Council's current conservation guidance.",
    solarNote:
      "Solar suitability around Glastonbury and the Somerset Levels remains property-specific. We assess the roof, local shading, structure and electricity use before modelling output or recommending storage.",
    emergencyNote:
      "For urgent roof problems in Glastonbury, call with the postcode and details so we can assess the risk and confirm current attendance availability.",
    faqs: [
      {
        q: "Do you have experience with listed buildings and conservation areas in Glastonbury?",
        a: "Glastonbury has extensive conservation-area coverage and numerous listed buildings. Check Somerset Council's current guidance and obtain listed-building consent or planning permission where required; we can provide material and scope information for the application.",
      },
      {
        q: "What roofing materials are used on Glastonbury's historic buildings?",
        a: "Glastonbury's older properties predominantly use natural slate, clay plain tiles or, in some cases, stone slates. We source matching materials for sympathetic repairs and are familiar with the specification expectations of the Mendip Council conservation team.",
      },
      {
        q: "Can I get solar panels in Glastonbury given the conservation area restrictions?",
        a: "Many Glastonbury homeowners successfully install solar on rear-facing roof slopes not visible from the public highway, which typically falls within permitted development. We assess each property case by case and advise on the planning position before you commit.",
      },
      {
        q: "Do you cover Street, Wells and the villages around Glastonbury?",
        a: "Yes — we regularly work in Street, Wells, Shepton Mallet, Somerton and the surrounding rural parishes. The BA6 and surrounding postcodes form a core part of our Somerset coverage.",
      },
      {
        q: "How do I know if my Glastonbury property needs a new roof or just repairs?",
        a: "We offer free roof surveys to assess condition and give honest advice on repair versus replacement. For older properties in particular, the decision depends on the condition of the underlay, battens and structure — things that aren't visible without a proper inspection.",
      },
    ],
    testimonial: {
      name: "Rachel F.",
      text: "Our 1920s cottage near the Tor had a damp problem traced back to cracked clay tiles and failed valley leadwork. ProLine carried out a thorough survey, gave us a clear explanation with photos, and the repair work has completely resolved the issue. Excellent local service.",
      suburb: "Glastonbury Town Centre",
      service: "Tile Repair & Valley Leadwork",
    },
    distanceFromTaunton: "16 miles",
    driveTime: "22 minutes",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getAdjacentLocations(
  slug: string,
  count: number = 3
): LocationData[] {
  const index = locations.findIndex((loc) => loc.slug === slug);
  if (index === -1) return locations.slice(0, count);

  const result: LocationData[] = [];
  const total = locations.length;

  for (let i = 1; result.length < count && i < total; i++) {
    const next = locations[(index + i) % total];
    result.push(next);
  }

  return result;
}
