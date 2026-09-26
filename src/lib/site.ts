export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  coverages: string[];
  faqs: FAQ[];
}

export const SITE = {
  name: "Coatings Insurance",
  domain: "coatingsinsurance.com",
  url: "https://coatingsinsurance.com",
  tagline: "Insurance for Coating Contractors — GL, Pollution Liability & WC",
  description: "Specialty insurance for coating contractors — general liability, contractors pollution liability (CPL) for VOC and solvent exposure, workers comp, and tools & equipment. Licensed in all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:8449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Insuring Coating Contractors" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 3000, suffix: "+", label: "Coating Crews Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const CREDENTIALS: string[] = [
  "Coating Contractor Specialty Markets",
  "Surplus Lines Licensed All 50 States",
  "Contractors Pollution Liability (CPL) Specialists",
  "Same-Day Certificate Issuance",
  "Commercial GC Contract Compliance Experts",
  "NCCI Classification Specialists",
];

export const TESTIMONIALS: readonly { name: string; company: string; text: string; quote: string; role: string; location: string }[] = [];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "coating-contractor-insurance",
    icon: "Shield",
    title: "Coating Contractor GL Insurance",
    short: "General liability for painting and coating contractors — overspray, completed operations, and GC contract requirements.",
    description:
      "General liability insurance for coating contractors covering third-party bodily injury, property damage from overspray, completed operations coverage for coating failures, and the additional insured and waiver of subrogation endorsements your GC contracts require.",
    longDescription: `## General Liability for Coating Contractors

General liability insurance is the foundation of every coating contractor's coverage program. Whether you apply commercial paint systems, epoxy floor coatings, elastomeric roof coatings, or waterproofing membranes — GL protects your business from third-party claims: bodily injury, property damage, and completed operations liability arising from your work.

## What GL Covers for Coating Contractors

**Third-Party Bodily Injury:** If a visitor, building occupant, or passerby suffers an injury because of your operations — a slip and fall near your equipment, being struck by scaffolding, or a trip hazard created by your work area — your GL policy responds. This applies during active operations and at job sites under your control.

**Property Damage:** Coating work creates significant property damage exposures. Overspray onto adjacent vehicles, neighboring buildings, HVAC intakes, or carefully maintained surfaces is the most frequently reported GL claim coating contractors face. GL covers the cost to clean, restore, or replace third-party property your operations damage.

**Completed Operations:** Coverage extends beyond job completion. Completed operations protects you from claims that arise after a job is finished — coating failures discovered months or years post-application, delamination, blistering from trapped moisture, or corrosion found beneath a coating system you applied. For long-term coating systems with multi-year warranty expectations, completed operations is a critical protection.

**Personal and Advertising Injury:** Libel, slander, copyright infringement, or similar claims arising from your business activities are covered under the personal and advertising injury portion of GL.

## Overspray: The Coating Contractor's Most Common GL Claim

Overspray is the single most frequently reported GL claim for painting and coating contractors. A wind shift during exterior spray application, an improperly calibrated spray pattern, or failure to adequately mask adjacent surfaces — and you're responsible for repainting a customer's vehicle, cleaning a neighboring business's windows, or stripping and recoating an adjacent wall.

Most commercial GL policies cover overspray under property damage, subject to your deductible and policy limits. However, if the overspray involves materials with significant VOC content that causes chemical damage beyond simple coating, your insurer may attempt to invoke the pollution exclusion. This is why pairing GL with Contractors Pollution Liability (CPL) is essential for coating contractors who use solvent-based materials.

## Completed Operations Coverage — Long-Tail Exposure

Coating system failures represent a substantial completed operations exposure that many contractors underestimate. Floor coating delamination, elastomeric roof coating blistering, or protective coating failures on structural steel can all lead to claims months or years after application. The building owner blames the applicator; the applicator blames the substrate preparation or the product; and the GL policy is the backstop.

For coating contractors, completed operations coverage should remain active at least two to three years beyond each project's completion date, consistent with industry warranty norms. Request that your completed operations aggregate limit matches or exceeds your per-occurrence limit — post-completion claims often involve interior water damage, structural remediation, or business interruption costs that exceed on-site incident costs.

## What GL Does NOT Cover: The Critical Pollution Exclusion

Standard GL contains a pollution exclusion that bars coverage for "bodily injury or property damage arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants." For coating contractors, this exclusion has significant teeth.

VOCs from oil-based paints and solvent-based coatings, isocyanates from 2-part polyurethane systems, organic solvents used as thinners and cleaners, and lead dust from disturbing pre-1978 surfaces have all been found by courts to qualify as "pollutants" under standard GL language. When a building occupant files a bodily injury claim after being exposed to fumes during your commercial repaint, your GL carrier will likely invoke this exclusion.

Contractors Pollution Liability (CPL) is the separate specialty policy that fills this gap. See our CPL page for complete details.

## GL Limits: What GC Contracts Require

Commercial general contractor contracts and property manager agreements universally require proof of general liability insurance. Standard requirements:

**Minimum ($1M/$2M):** $1 million per occurrence / $2 million aggregate — the floor for most residential and light commercial coating projects.

**Commercial standard ($2M/$4M):** $2 million per occurrence / $4 million aggregate — required on most commercial painting and coating subcontracts.

**Large project / government work:** $5 million aggregate or higher, typically achieved via an umbrella or excess policy layered over primary GL.

**Additional Insured:** Most GC contracts require you to add the general contractor — and often the property owner — as additional insureds on your GL policy. Certificates of insurance naming the AI must be provided before you mobilize.

**Waiver of Subrogation:** Many GC contracts include a blanket waiver of subrogation requirement, preventing your insurer from recovering costs from the GC after paying a claim. Request this endorsement proactively.

## Cost of GL for Coating Contractors

Annual GL premiums for coating contractors typically range from $1,200 to $4,500+ depending on annual revenue, type of coating operations, claims history, and state. Small residential painting contractors (revenue under $500K): $1,200 to $2,000 per year. Commercial painting and coating contractors ($500K to $2M revenue): $2,500 to $4,500 per year. Call 844-967-5247 for a same-day quote.`,
    coverages: [
      "Third-Party Bodily Injury",
      "Property Damage (Including Overspray)",
      "Completed Operations",
      "Personal and Advertising Injury",
      "Products Liability",
      "Visitor and Passerby Injury",
      "Additional Insured Endorsements",
      "Waiver of Subrogation",
      "Defense Costs",
      "Scaffold and Equipment Strikes",
    ],
    faqs: [
      { q: "What GL limits do coating contractors need for commercial work?", a: "Most commercial GC contracts require a minimum of $1M per occurrence / $2M aggregate. Many commercial painting and coating subcontracts require $2M/$4M. Government contracts or large commercial projects may require $5M+ aggregate. Always check the specific contract requirements before signing." },
      { q: "Does GL cover overspray damage from painting or coating operations?", a: "Yes — overspray onto adjacent vehicles, neighboring buildings, or third-party property is covered under the property damage section of your GL policy. However, if the overspray involves solvent-based materials that cause chemical damage, the insurer may invoke the pollution exclusion. Pair GL with CPL to close this gap." },
      { q: "What is completed operations coverage for coating contractors?", a: "Completed operations extends GL coverage past job completion to cover claims arising from your finished work — coating delamination, blistering, corrosion under a coating, or moisture intrusion from a failed system. Claims can arise months or years post-application. Completed operations limits should match your per-occurrence limit." },
      { q: "Why doesn't standard GL cover pollution exposure for coating contractors?", a: "Standard GL contains a pollution exclusion that bars coverage for bodily injury or property damage from the release of pollutants. VOCs, isocyanates, organic solvents, and lead dust — all common in coating operations — have been found by courts to qualify as pollutants. Contractors Pollution Liability (CPL) fills this gap." },
      { q: "What is the pollution exclusion in a GL policy?", a: "The standard ISO GL pollution exclusion bars coverage for BI/PD 'arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants.' Pollutants include any liquid, gaseous, or thermal irritant or contaminant — which courts have applied to VOCs, solvents, isocyanates, and lead dust from coating operations." },
      { q: "Does GL cover a building occupant's reaction to coating fumes?", a: "Generally no. Bodily injury claims from occupants exposed to coating fumes — VOCs, solvents, isocyanates — will typically be denied by the GL carrier under the pollution exclusion. Contractors Pollution Liability (CPL) is the correct coverage for fume-related bodily injury claims." },
      { q: "What additional insured requirements do GC contracts typically include?", a: "Most GC contracts require the coating subcontractor to name the GC and often the property owner as additional insureds on the GL policy. The additional insured is entitled to defense and indemnity under your policy for claims arising from your work. Certificates of insurance naming the AI are required before mobilization." },
      { q: "What is a waiver of subrogation and why do GC contracts require it?", a: "A waiver of subrogation prevents your insurer from recovering money from the GC after paying a claim on your behalf. Without it, your insurer could sue the GC to recover its costs — which the GC contract prohibits. Many GC and property manager contracts require a blanket WOS endorsement on your GL policy." },
      { q: "Does GL cover lead paint disturbance during surface preparation?", a: "No. Lead dust from disturbing pre-1978 painted surfaces qualifies as a pollutant under the GL pollution exclusion. Third-party claims from lead exposure during coating prep work will be denied by the GL carrier. CPL covers lead paint disturbance claims." },
      { q: "How much does GL cost for a painting or coating contractor?", a: "Annual GL premiums for coating contractors range from $1,200 to $4,500+ depending on revenue, type of coating work, claims history, and state. Small residential painters typically pay $1,200 to $2,000/year. Commercial coating contractors with $500K to $2M revenue typically pay $2,500 to $4,500/year." },
      { q: "What does GL NOT cover that coating contractors should know about?", a: "GL's biggest gap for coating contractors is the pollution exclusion — it bars coverage for fume injuries, solvent spills, isocyanate exposure, and lead disturbance. GL also does not cover your own tools and equipment, employee injuries (workers comp), or professional errors and omissions." },
      { q: "Does GL cover property damage to surfaces from over-application of a coating?", a: "Depends on the cause. If a third party's property is damaged by your coating application — adjacent surface, neighboring property, vehicle — GL covers it. Damage to the surface you were hired to coat (your work product) is generally excluded as a business risk." },
      { q: "Is my coating equipment covered under GL?", a: "No. GL does not cover your own tools and equipment. A separate Inland Marine policy (Tools & Equipment insurance) covers airless sprayers, plural-component spray machines, compressors, scaffolding, and other equipment for theft, damage, and breakdown." },
      { q: "Does GL apply to both residential and commercial coating work?", a: "Yes — the same GL policy covers both residential and commercial operations. Commercial work typically triggers higher limit requirements from GC contracts and may require CPL as well." },
      { q: "What documents do I need to get a coating contractor GL quote?", a: "Typically: 3 years of loss runs (or loss-free letter if no prior claims), description of operations, annual revenue, payroll by classification, number of employees, and any current certificates. Call 844-967-5247 — we can often bind same-day." },
      { q: "Does GL cover a slip and fall that happens on wet coating I applied?", a: "Yes — if a third party slips and falls on a wet coating surface during or shortly after your application, GL covers the bodily injury claim. Wet floor signage, barriers, and warnings reduce both claims frequency and premium." },
      { q: "What is products and completed operations (PCO) coverage?", a: "PCO is a subset of GL that covers claims arising from your products (coating materials you supply) and your completed work (coating systems you installed). Completed operations is particularly important because coating system failures often surface months or years after application." },
      { q: "Does GL cover damage caused by pressure washing before coating application?", a: "Yes — GL covers third-party property damage from pressure washing operations, including water intrusion damage to interior spaces and damage to adjacent surfaces." },
      { q: "How do I get an additional insured certificate for a GC or property manager?", a: "Call 844-967-5247 or email josh@contractorschoiceagency.com with the GC's name, address, and any specific certificate language required. We issue certificates same-day in most cases." },
      { q: "Does GL cover subcontractors I hire for a coating project?", a: "Your GL may provide limited coverage for subcontractors, but only if they have their own active GL policy. Best practice: require all coating subcontractors to carry their own GL and CPL and name you as an additional insured on their policy." },
      { q: "What is the difference between per-occurrence and aggregate GL limits?", a: "Per-occurrence is the maximum your policy pays for a single claim event. Aggregate is the total maximum for all claims combined during the policy year. A $1M/$2M GL policy pays up to $1M per individual claim and up to $2M total across all claims in the policy period." },
      { q: "Does GL cover coating failures discovered after a project is complete?", a: "Yes — completed operations coverage extends your GL past job completion to cover claims arising from your finished work. Delamination, blistering, corrosion beneath a coating, or water intrusion from a failed coating system are all completed operations exposures." },
    ],
  },
  {
    slug: "contractors-pollution-liability",
    icon: "AlertTriangle",
    title: "Contractors Pollution Liability",
    short: "CPL fills the gap standard GL leaves open — VOC fume injuries, solvent spills, isocyanate exposure, and lead paint disturbance are all excluded from GL.",
    description:
      "Contractors Pollution Liability (CPL) insurance for coating contractors — covers bodily injury and property damage from VOC fumes, organic solvent spills, isocyanate exposure from 2-part polyurethane coatings, and lead paint disturbance claims that standard GL denies under its pollution exclusion.",
    longDescription: `## Why Coating Contractors Have a Pollution Exposure Standard GL Won't Cover

If you work with oil-based paints, solvent-based coatings, 2-part polyurethane systems, epoxy resins, or any products requiring chemical thinners — you have a pollution exposure. And the standard general liability policy you carry almost certainly will not cover it.

Contractors Pollution Liability (CPL) is the specialty insurance product designed for this specific gap. For coating contractors who use solvents, isocyanate-generating systems, or work in pre-1978 buildings, CPL is not optional coverage — it may be the most important policy you purchase.

## The GL Pollution Exclusion — What It Actually Says

Standard commercial GL policies contain a pollution exclusion that bars coverage for "bodily injury or property damage arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants."

Pollutants are defined as "any solid, liquid, gaseous or thermal irritant or contaminant, including smoke, vapor, soot, fumes, acids, alkalis, chemicals and waste." Courts have consistently applied this definition to the materials coating contractors use every day.

## What Counts as a Pollutant for Coating Contractors

**Volatile Organic Compounds (VOCs):** Present in oil-based paints, solvent-based coatings, thinners, and many waterborne formulations at elevated concentrations. Building occupants overcome by VOC fumes during commercial repaints have successfully sued coating contractors — and GL has denied coverage.

**Isocyanates (MDI, TDI, HDI):** Two-part polyurethane coatings — widely used in commercial floor coatings, roof coatings, and protective industrial coatings — generate isocyanate vapors during mixing and application. Isocyanates are potent respiratory sensitizers. Isocyanate exposure claims are almost universally denied under standard GL pollution exclusions.

**Organic Solvents:** Xylene, toluene, acetone, MEK, and naphtha — common coating thinners and equipment cleaners — are pollutants. A solvent spill that migrates into a floor drain, contaminates soil, or generates vapor intrusion into adjacent occupancies is a pollution event that GL will not cover.

**Lead:** Pre-1978 buildings commonly contain lead-based paint. Disturbing lead paint during surface preparation creates lead dust. Even contractors following OSHA's Lead in Construction standard (29 CFR 1926.62) can face third-party claims if lead migrates to adjacent occupants. GL will deny these claims under the pollution exclusion.

## Four Claim Scenarios Where GL Denies — CPL Pays

**Scenario 1 — Commercial Repaint, VOC Injury:** A painting contractor repaints an occupied office building during business hours. Three employees of a tenant company report headaches and nausea. They sue the painting contractor. The GL carrier invokes the pollution exclusion. The CPL carrier accepts the claim and pays defense costs plus bodily injury settlement.

**Scenario 2 — Epoxy Floor, Adjacent Tenant:** An epoxy floor contractor applies a two-part epoxy system in a commercial kitchen. Solvent odors migrate through shared HVAC to an adjacent dental office. The dental practice closes for two days and demands reimbursement for business income loss. GL denies (solvent vapors are pollutants). CPL covers the claim.

**Scenario 3 — 2-Part Polyurethane, Isocyanate Exposure:** A coatings contractor applies a 2-part polyurethane floor coating. Inadequate ventilation allows isocyanate vapors to migrate to an adjacent break room. A worker develops occupational asthma and files a bodily injury claim. GL denies. CPL responds.

**Scenario 4 — Lead Paint Disturbance:** A painting contractor repaints the exterior of a pre-1978 building. Lead dust contaminates the adjacent child care center. Elevated blood lead levels are found in several children. GL denies. CPL and umbrella respond.

## What CPL Covers for Coating Contractors

CPL provides coverage for: bodily injury to building occupants or third parties from pollution events; property damage from chemical spills or solvent migration; cleanup and remediation costs; regulatory defense costs from EPA, OSHA, or state agency citations; and emergency response costs.

## CPL Limits, Structure, and Cost

CPL is available in $1M/$2M, $2M/$4M, and higher limits. It can be written on a claims-made or occurrence basis — claims-made has lower initial premium but requires tail coverage (Extended Reporting Period) when cancelled. The retroactive date on claims-made CPL is critical: push for the earliest possible date.

Annual CPL premiums for coating contractors typically range from $800 to $3,500 per year — residential painters without isocyanate exposure: $800 to $1,500/year; commercial coating contractors with solvent and 2-part system exposure: $1,500 to $3,500/year. CPL is often packaged with GL for combined premium savings. Call 844-967-5247 for a same-day quote.`,
    coverages: [
      "VOC Fume Bodily Injury to Building Occupants",
      "Isocyanate (2-Part PU) Exposure Claims",
      "Organic Solvent Spill Cleanup Costs",
      "Lead Paint Disturbance Third-Party Claims",
      "Adjacent Tenant Property Damage",
      "Regulatory Defense Costs (EPA/OSHA)",
      "Emergency Pollution Response Costs",
      "Business Income Loss Claims from Pollution Events",
      "Gradual and Sudden Pollution Coverage",
      "Additional Insured for GC Contracts",
    ],
    faqs: [
      { q: "What is Contractors Pollution Liability (CPL) and how is it different from GL?", a: "CPL is a specialty insurance policy that covers bodily injury, property damage, cleanup costs, and regulatory defense arising from pollution events in your coating operations. GL excludes these same events under its pollution exclusion. CPL fills the gap GL leaves open for coating contractors who use VOC-containing, solvent-based, or isocyanate-generating materials." },
      { q: "What coating materials trigger CPL exposure?", a: "Any oil-based paint, solvent-based coating, 2-part polyurethane system, epoxy with solvent component, or primer/thinner/cleaner containing VOCs creates CPL exposure. Lead paint disturbance during surface prep also triggers pollution exposure. If your coating system generates vapors that could affect building occupants or adjacent spaces, you need CPL." },
      { q: "Are isocyanates from 2-part polyurethane coatings covered under standard GL?", a: "No. Courts have consistently found isocyanates to be pollutants under standard GL pollution exclusion language. 2-part polyurethane floor coatings, roof coatings, and industrial coatings all generate isocyanate vapors during application. Any resulting bodily injury claims will be denied by the GL carrier. CPL is the correct coverage." },
      { q: "Does CPL cover VOC fume injuries to building occupants during a commercial repaint?", a: "Yes — this is one of the most common CPL claims for painting contractors. If building occupants develop symptoms during your commercial repaint and file a bodily injury claim, CPL covers the defense costs and any resulting settlement. This claim would be denied by the GL carrier under the pollution exclusion." },
      { q: "What is the GL pollution exclusion and why does it apply to coating contractors?", a: "The standard ISO GL pollution exclusion bars coverage for BI/PD 'arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants.' Courts have applied this to VOCs, solvents, isocyanates, and lead — all materials coating contractors regularly use." },
      { q: "Does CPL cover lead paint disturbance during surface preparation?", a: "Yes. Lead dust generated during prep work on pre-1978 painted surfaces is a pollutant under standard GL. CPL covers third-party bodily injury and cleanup claims from lead exposure during coating prep work." },
      { q: "Do GC contracts require CPL for painting and coating subcontractors?", a: "Increasingly yes. Commercial GC contracts commonly require coating subcontractors to carry CPL with limits of $1M/$2M to $2M/$4M and to name the GC and property owner as additional insureds. Not having CPL can disqualify you from bidding certain commercial projects." },
      { q: "What are typical CPL cost ranges for coating contractors?", a: "Annual CPL premiums for coating contractors typically range from $800 to $3,500 per year. Residential painters without solvent/isocyanate exposure pay $800 to $1,500/year. Commercial coating contractors with significant VOC and 2-part system exposure pay $1,500 to $3,500/year. CPL is often packaged with GL for combined savings." },
      { q: "What is the difference between claims-made and occurrence CPL?", a: "Occurrence CPL covers incidents that occur during the policy period regardless of when the claim is made — no tail coverage needed. Claims-made CPL covers claims made during the policy period for incidents after the retroactive date — requires Extended Reporting Period (tail) coverage when you cancel or switch carriers." },
      { q: "What is a CPL retroactive date and why does it matter?", a: "On a claims-made CPL policy, the retroactive date is the earliest date from which covered incidents are eligible. Claims for incidents before the retroactive date are excluded. When purchasing your first CPL policy, push for the earliest possible retroactive date to cover incidents from your prior operations." },
      { q: "What CPL limits are required for commercial coating subcontracts?", a: "Most commercial GC contracts require $1M/$2M minimum CPL. Larger commercial projects and government contracts often require $2M/$4M. CPL limits can be increased via umbrella or excess CPL. Always check the specific subcontract requirements before you sign." },
      { q: "Does a residential painting contractor need CPL?", a: "Yes, if you use oil-based paints, solvent-based products, thinners, or perform work in pre-1978 homes. Homeowner claims for fume injuries or lead exposure during residential repaints are real exposures. CPL protects you from third-party claims GL will deny." },
      { q: "Does CPL cover solvent spills during a coating project?", a: "Yes — a solvent spill that migrates into a floor drain, contaminates soil, or creates vapor intrusion into adjacent spaces is a pollution event. CPL covers the cleanup costs and any resulting third-party property damage or bodily injury claims." },
      { q: "How do I get CPL for my painting or coating business?", a: "Call 844-967-5247 or submit our online quote request. We specialize in CPL for coating contractors and can typically bind coverage same-day." },
      { q: "Does CPL cover cleanup costs for a solvent or chemical spill from my operations?", a: "Yes — remediation and cleanup costs for pollution events you cause are a core CPL coverage, including third-party cleanup on adjacent properties and soil remediation from solvent spills." },
      { q: "What does CPL NOT cover?", a: "CPL typically excludes: pollution events that were known or expected at policy inception, intentional discharge, nuclear hazard, asbestos claims in most standard forms, and your own employees' injuries (those require workers comp)." },
      { q: "Does CPL cover regulatory defense costs from OSHA or EPA?", a: "CPL covers regulatory defense costs — the cost of defending against regulatory citations or enforcement actions from OSHA, EPA, or state environmental agencies arising from a pollution event. Most CPL policies do not cover fines or penalties themselves, though some specialty forms include limited fine/penalty coverage." },
      { q: "Can CPL be bundled with my GL policy?", a: "Yes — many specialty carriers offer GL and CPL as a packaged program for coating contractors, typically with premium savings versus buying the two policies separately." },
      { q: "What is the difference between CPL and environmental liability insurance?", a: "CPL (Contractors Pollution Liability) covers pollution events arising from your contracting operations at a job site — it's contractor-specific and project-based. Pollution Legal Liability (PLL) covers contamination at a property you own or operate over time. Coating contractors need CPL." },
      { q: "Does CPL cover overspray that contains solvent-based materials?", a: "Yes — if your solvent-based coating overspray causes a pollution event (chemical damage to adjacent property, fume exposure to adjacent occupants, solvent contamination), CPL covers the resulting claims." },
    ],
  },
  {
    slug: "epoxy-floor-coating-insurance",
    icon: "Grid",
    title: "Epoxy Floor Coating Insurance",
    short: "Specialized GL, CPL, and tools & equipment coverage for epoxy floor coating contractors — including chemical fume exposure and plural-component machine coverage.",
    description:
      "Insurance for epoxy floor coating contractors covering general liability with completed operations for floor failures, contractors pollution liability for solvent and resin fume exposure to building occupants, and Inland Marine coverage for high-value plural-component spray machines and surface prep equipment.",
    longDescription: `## Insurance for Epoxy Floor Coating Contractors

Epoxy floor coating contractors operate in a specialized insurance niche that most standard carriers don't fully understand. The combination of chemical exposure during application, high-value spray equipment, and completed operations liability for floor coating failures requires a coverage program built for the trade.

## Classification: The Hidden Rate Driver

How your business is classified for workers comp and GL purposes has a direct impact on your premium — and incorrect classification is one of the most common mistakes epoxy floor contractors make when buying insurance.

Epoxy floor coating falls under different NCCI workers comp codes depending on the type of work: Code 5474 (painting/coating — commercial interior) applies to most commercial epoxy floor contractors; Code 9521 (flooring) applies to some decorative and residential applications; Code 5521 (carpentry/interior) is used by some carriers for residential epoxy. The distinction matters because workers comp rates vary significantly by classification. Specialty coating contractor programs classify correctly from the start.

## CPL for Epoxy Floor Applicators: The Solvent and Resin Exposure

Two-part epoxy systems and solvent-based coatings generate chemical vapors during mixing and application. In occupied commercial buildings, those vapors can migrate to building occupants and adjacent tenants through HVAC systems.

**Solvent vapors:** Many epoxy systems require solvent-based primers or thinners. Solvent odors can migrate through HVAC to adjacent occupancies. If a neighboring tenant files a bodily injury or business interruption claim based on solvent vapor exposure, your standard GL will deny under the pollution exclusion. CPL covers it.

**Isocyanates in polyurethane topcoats:** Commercial epoxy floor systems often receive polyurethane or polyaspartic topcoats. Two-part polyurethane systems generate isocyanates during application. Isocyanate exposure claims are consistently excluded from GL and covered by CPL.

## Completed Operations: Floor Coating Failures

Floor coating failures create significant completed operations exposure: delamination from moisture vapor transmission or inadequate surface preparation; blistering from moisture pressure in commercial kitchens and cold storage; adhesion failure from residual curing compounds or contamination; and decorative system color inconsistencies requiring complete removal and reapplication. Replacement of a large commercial floor coating system runs $3 to $8 per square foot installed — a 20,000 SF warehouse floor is a $60,000 to $160,000 completed operations claim.

## Tools & Equipment: Plural-Component Spray Machines

Epoxy floor coating contractors use some of the most expensive portable equipment in the coatings trade. Plural-component spray machines (Graco Reactor, XP series) run $20,000 to $60,000 per unit. Airless sprayers run $3,000 to $15,000. Surface grinders and shot blast equipment run $5,000 to $30,000. Dust extraction systems add $3,000 to $10,000. Your standard GL does not cover your equipment — a dedicated Inland Marine / Tools & Equipment policy is required.

## A Complete Epoxy Floor Contractor Insurance Program

GL with completed operations ($1M/$2M or $2M/$4M) + CPL ($1M/$2M minimum for solvent and 2-part system exposure) + workers comp (correct classification) + Inland Marine/T&E (covering plural-component machines, airless sprayers, grinders, dust extraction). Call 844-967-5247 for a same-day quote.`,
    coverages: [
      "General Liability with Completed Operations for Floor Failures",
      "CPL for VOC, Solvent, and Isocyanate Fumes",
      "Workers Comp (Correct Classification for Epoxy Work)",
      "Plural-Component Machine Coverage (Inland Marine)",
      "Airless Sprayer and Spray Equipment",
      "Surface Grinders and Shot Blast Equipment",
      "Delamination and Adhesion Failure Claims",
      "Adjacent Tenant Fume Exposure Claims",
      "Decorative Floor System Failures",
      "Certificate of Insurance (Same-Day)",
    ],
    faqs: [
      { q: "What insurance does an epoxy floor coating contractor need?", a: "A complete program includes GL with completed operations, CPL for solvent and resin fume exposure, workers comp under the correct classification, and Inland Marine/T&E for plural-component spray machines and surface prep equipment. Commercial operations typically need $2M/$4M GL plus CPL." },
      { q: "What workers comp code applies to epoxy floor coating contractors?", a: "NCCI codes vary by carrier and state but commonly include code 5474 (painting/coating — commercial interior) or code 9521 (flooring). The correct classification affects your rate significantly — a specialty coating contractor program will place you in the right code." },
      { q: "Does GL cover fume exposure from epoxy or solvent-based primers?", a: "No — bodily injury or property damage from chemical fumes (VOCs, solvents, epoxy resin vapors, isocyanates from polyurethane topcoats) are excluded from GL under the pollution exclusion. Contractors Pollution Liability (CPL) is the correct coverage for fume-related claims from epoxy floor work." },
      { q: "What is completed operations coverage for floor coating contractors?", a: "Completed operations extends your GL past project completion to cover claims from coating failures — delamination, blistering, adhesion failure, color inconsistency in decorative systems. These failures can emerge months or years after application and can be costly if an entire commercial floor system must be stripped and reapplied." },
      { q: "Does insurance cover a Graco plural-component spray machine?", a: "Yes — but not under GL. A Graco proportioner valued at $20,000 to $60,000 requires an Inland Marine / Tools & Equipment policy for theft, accidental damage, and breakdown. GL does not cover your own equipment." },
      { q: "What does delamination liability look like for an epoxy floor contractor?", a: "If your floor coating delaminates after application, the building owner may claim the cost of removal, surface re-prep, and reapplication. Completed operations coverage on your GL is the backstop. Document surface preparation (moisture testing, shot blast profile, CSP ratings) on every job." },
      { q: "Does CPL cover solvent odors that migrate to adjacent tenants from epoxy work?", a: "Yes — this is a common CPL scenario for commercial epoxy floor applicators. Solvent vapors from epoxy primers and thinners can migrate via HVAC to adjacent spaces. If a neighboring tenant suffers business income loss or a building occupant files a bodily injury claim based on solvent exposure, CPL covers these claims. GL would deny them." },
      { q: "Are isocyanates from polyurethane topcoats over epoxy covered under GL?", a: "No. Two-part polyurethane and polyaspartic topcoats — common on commercial epoxy floor systems — generate isocyanates during application. Isocyanate exposure claims are universally treated as pollution events and excluded from GL. CPL covers them." },
      { q: "What is the typical insurance cost for an epoxy floor coating business?", a: "A complete program (GL $1M/$2M + CPL + WC + T&E) for a small to midsize epoxy floor contractor typically runs $4,000 to $9,000 per year depending on revenue, equipment values, and claims history. Call 844-967-5247 for a same-day quote." },
      { q: "Does GL cover damage to concrete prep equipment during a job?", a: "No — GL does not cover your own tools and equipment. A separate Inland Marine / Tools & Equipment policy covers concrete grinders, shot blast equipment, dust extraction units, and other surface prep tools for theft and accidental damage." },
      { q: "What GL limits do commercial GC contracts require for epoxy floor subcontractors?", a: "Most commercial GC contracts require $1M/$2M minimum and increasingly require CPL as well. Large commercial projects often require $2M/$4M GL plus $1M/$2M CPL. Check your subcontract before mobilizing." },
      { q: "Does workers comp cover chemical exposure injuries to epoxy floor crew members?", a: "Yes — workers comp covers occupational injury and illness to your employees, including chemical exposure from epoxy resins, hardeners, solvents, and isocyanates. Workers comp does NOT cover third-party claims from building occupants — those require CPL." },
      { q: "Can I get a same-day certificate of insurance for an epoxy floor project?", a: "Yes — we issue certificates same-day once your policy is bound. If you need a certificate naming a GC or property owner as additional insured, call 844-967-5247 and we'll have it issued immediately." },
      { q: "Does coverage differ for residential vs. commercial epoxy floor work?", a: "The coverage types are the same, but limits and requirements differ. Residential epoxy floor work typically requires $1M/$2M GL. Commercial work requires $2M/$4M GL plus CPL in most GC subcontracts. Workers comp classification may also differ." },
      { q: "What happens if an epoxy floor coating I applied fails and the client sues me?", a: "The client's claim for removal and replacement of the failed floor coating falls under completed operations on your GL policy. Your insurer will investigate and defend or settle the claim. Thorough documentation of surface prep and application conditions is critical to your defense." },
    ],
  },
  {
    slug: "roof-coating-contractor-insurance",
    icon: "Home",
    title: "Roof Coating Contractor Insurance",
    short: "GL, CPL, and workers comp for roof coating contractors applying elastomeric, silicone, and acrylic systems on flat and low-slope roofs.",
    description:
      "Insurance for roof coating contractors covering general liability with completed operations for coating system failures, contractors pollution liability for solvent-based roof coating emissions, workers comp with fall protection exposure, and tools & equipment for spray rigs and scaffolding.",
    longDescription: `## Insurance for Roof Coating Contractors

Roof coating contractors — applying elastomeric, silicone, acrylic, and polyurethane foam systems on flat and low-slope commercial and industrial roofs — face a distinct insurance exposure profile. Height work, long-term completed operations liability for roofing system failures, and in some systems, meaningful VOC exposure all require a coverage program built for roofing contractors.

## GL and Completed Operations for Roof Coating

The most significant GL exposure for roof coating contractors is completed operations — the liability that extends beyond job completion when a roof coating system fails. Elastomeric, silicone, and acrylic roof coating systems are designed to extend roof life by 10 to 20 years. When they fail — blistering, cracking, adhesion failure, or moisture intrusion — the property owner faces interior water damage, damaged inventory, business interruption, and the cost of a complete roof remediation.

Completed operations limits for roof coating contractors should reflect the scale of the roof systems you coat and the interior property values at risk from water intrusion. Request at least equal per-occurrence and completed operations aggregate limits.

## CPL for Roof Coatings

Not all roof coating systems create meaningful CPL exposure, but several commonly used systems do: solvent-based primers for elastomeric and silicone systems; aliphatic polyurethane topcoats over polyurethane foam (SPF) systems; and solvent-based sealers or caulks used in coating restoration. If building occupants or adjacent property owners are affected by vapors or chemical contamination from your solvent-containing materials, your GL will deny the claim. CPL covers it. Most commercial GC contracts for roof coating subcontractors are now beginning to require CPL.

## Workers Comp for Roof Coating — Fall Exposure

Roof coating work creates meaningful fall exposure for coating crews. OSHA requires fall protection on roofs with six feet or more of fall exposure. Workers comp exposure for roof coating contractors also includes heat-related illness (summer roofwork in direct sun), equipment injury from spray rigs and power washers, and chemical exposure from solvent-based coating systems.

Workers comp rates for roof coating crews reflect the fall exposure of roofwork. Documented fall protection plans, heat illness prevention programs, and low EMR history reduce rates significantly.

## Tools & Equipment for Roof Coating

Spray rigs (trailer or truck-mounted) run $15,000 to $40,000. Airless sprayers run $3,000 to $15,000. Safety harnesses and fall arrest systems, scaffolding, pressure washers, and generators are all equipment that requires a dedicated Inland Marine / T&E policy for theft, accidental damage, and loss.

## Certificate Requirements

Most commercial roofing subcontracts require: GL with completed operations ($1M/$2M to $2M/$4M), CPL ($1M/$2M when solvent-based systems are used), workers comp, additional insured endorsement, waiver of subrogation, and 30-day notice of cancellation. We issue same-day certificates. Call 844-967-5247.`,
    coverages: [
      "General Liability with Completed Operations",
      "Roof Coating System Failure Claims",
      "Moisture Intrusion Consequential Damage",
      "CPL for Solvent-Based Primer Emissions",
      "Isocyanate Exposure (Polyurethane Topcoats)",
      "Workers Comp with Fall Exposure Rating",
      "Heat-Related Illness Coverage",
      "Spray Rig and Equipment (Inland Marine)",
      "Safety Harness and Fall Arrest Equipment",
      "Certificate of Insurance (Same-Day)",
    ],
    faqs: [
      { q: "What insurance does a roof coating contractor need?", a: "A complete program includes GL with completed operations, workers comp with fall exposure rated correctly, CPL if you use solvent-based primers or polyurethane systems, and Inland Marine/T&E for spray rigs, safety equipment, and scaffolding. Most commercial contracts require $2M/$4M GL plus WC and CPL." },
      { q: "What are the completed operations exposures for roof coating contractors?", a: "Roof coating system failures — blistering, cracking, adhesion failure, moisture intrusion — can produce completed operations claims months or years after application. Interior water damage from a failed roof coating can run six figures or more. Completed operations limits should reflect the value of roof systems you coat and the interior property values they protect." },
      { q: "Does workers comp cover fall injuries for roof coating crews?", a: "Yes — workers comp covers fall injuries and all other occupational injuries to your employees during roof coating operations. OSHA requires fall protection on roofs with 6+ feet of fall exposure. Documented safety programs and OSHA-compliant fall protection plans reduce both claims frequency and workers comp premiums." },
      { q: "Do roof coating contractors need CPL?", a: "Yes, if you use solvent-based primers, solvent-containing elastomeric systems, or polyurethane topcoats with isocyanate components. CPL covers fume exposure claims that GL will deny under the pollution exclusion." },
      { q: "What GL limits do GC contracts require for roof coating subcontractors?", a: "Most commercial GC contracts require $1M/$2M to $2M/$4M GL with completed operations. Many now also require CPL for contractors using solvent-based systems. Workers comp is universally required." },
      { q: "Does GL cover overspray from roof coating spray application?", a: "Property damage from overspray onto adjacent areas is a GL property damage claim. If the overspray involves solvent-based materials with chemical damage, the insurer may invoke the pollution exclusion — CPL would then apply. Proper wind monitoring and masking reduce overspray claims." },
      { q: "Is a trailer-mounted spray rig for roof coating covered under GL?", a: "No — GL does not cover your own equipment. A dedicated Inland Marine / Tools & Equipment policy covers spray rigs, airless sprayers, pressure washers, and other equipment for theft and accidental damage." },
      { q: "What workers comp code applies to roof coating contractors?", a: "Roof coating contractors typically fall under roofing workers comp codes (5551 or similar) or painting/coating codes (5474) depending on the state and carrier. Roofing codes carry higher rates reflecting fall exposure." },
      { q: "Does completed operations coverage cover elastomeric roof coating failures?", a: "Yes — completed operations on your GL policy covers third-party property damage claims arising from your finished roof coating work, including elastomeric system failures, adhesion failures, and consequential interior damage from moisture intrusion after a system failure." },
      { q: "Can I get same-day certificates for a roof coating subcontract?", a: "Yes — we issue certificates same-day once your policy is bound. If you need proof of GL, WC, and CPL with the GC named as additional insured, call 844-967-5247." },
    ],
  },
  {
    slug: "coating-tools-equipment-insurance",
    icon: "Wrench",
    title: "Tools & Equipment Insurance",
    short: "Inland Marine coverage for airless sprayers, plural-component machines, concrete grinders, scaffolding, and other high-value coating contractor equipment.",
    description:
      "Tools and equipment insurance (Inland Marine) for coating contractors covering airless sprayers, Graco plural-component proportioners, surface grinders, scaffolding, compressors, and other equipment against theft, accidental damage, and loss — whether at a job site, in transit, or in storage.",
    longDescription: `## Why Coating Contractor Equipment Requires Dedicated Coverage

Coating contractors invest heavily in equipment — and that equipment travels to job sites, sits in vehicles and trailers overnight, and operates in environments with theft risk, accidental damage exposure, and the potential for equipment failures during critical applications. General liability does not cover your own tools and equipment. A dedicated Inland Marine / Tools & Equipment policy is the correct coverage.

## Equipment Covered: What's in a Coating Contractor's Tool Inventory

**Plural-Component Spray Machines:** The centerpiece of a professional epoxy floor, polyurea, or 2-part polyurethane coating operation. Graco Reactor (E-XP2, E-30) and XP series proportioners range from $20,000 to $60,000 per unit. A theft or accidental damage event without insurance coverage can shut down a coating operation entirely.

**Airless Sprayers:** Graco, Titan, and Binks airless paint sprayers for waterborne coatings, primers, and single-component systems range from $3,000 to $15,000 each.

**Concrete Grinding and Surface Preparation Equipment:** Diamond cup wheels, planetary grinders, walk-behind shot blasters, and vacuum-equipped edge grinders range from $5,000 to $30,000 per unit. HEPA-rated dust extraction units add another $3,000 to $10,000.

**Scaffold Systems:** Ring-lock scaffold systems, outrigger scaffolds, and baker scaffolding for elevated coating work represent $5,000 to $30,000 in inventory. Scaffolding is a frequent theft target at overnight job sites.

**Spray Rigs (Trailer or Truck-Mounted):** For roof coating and large commercial coating operations, heated spray rigs with material agitators represent $15,000 to $40,000 in equipment value.

## Coverage Types: Scheduled vs. Blanket

**Scheduled Equipment:** Each piece of equipment is individually listed with its own value and coverage. Best for high-value equipment like plural-component machines, large grinders, or spray rigs where you need to ensure full replacement value per item.

**Blanket Limits:** A single coverage limit applies to all covered tools and equipment in aggregate. More flexible — adding new equipment doesn't require policy changes, and the blanket limit is available for any combination of covered items. Many coating contractors use a combination: scheduled coverage for high-value machines and blanket coverage for the broader tool inventory.

## What's Covered — and What's Not

Covered losses: theft from job sites, vehicles, trailers, and storage; accidental damage during operations, loading/unloading, and transit; vandalism; fire and certain weather events.

Not covered: mechanical breakdown, wear and tear, gradual deterioration; equipment rented from others (separate coverage required); electronic data loss.

**Always insure to replacement cost** — a 5-year-old Graco Reactor with a depreciated ACV of $15,000 costs $35,000 to $45,000 to replace new. Insuring at ACV leaves you significantly short in a total loss situation.

## Cost Ranges for Tools & Equipment Coverage

Annual T&E premiums for coating contractors: $500 to $1,500/year for a light commercial painter with $25,000 to $75,000 in equipment; $1,000 to $3,000/year for a mid-size contractor with $75,000 to $200,000 in equipment; $2,500 to $6,000+/year for operations with $200,000 to $500,000 in total equipment value. Call 844-967-5247 for a same-day quote.`,
    coverages: [
      "Airless Sprayers (Theft and Accidental Damage)",
      "Plural-Component Spray Machines (Graco Reactor/XP)",
      "Concrete Grinders and Shot Blast Equipment",
      "Surface Prep and Dust Extraction Equipment",
      "Scaffold Systems",
      "Compressors",
      "Spray Rigs (Trailer or Truck-Mounted)",
      "Equipment in Transit",
      "Job Site Theft",
      "Replacement Cost Coverage Option",
    ],
    faqs: [
      { q: "Does GL cover my coating equipment if it's stolen from a job site?", a: "No — GL does not cover your own tools and equipment. A separate Inland Marine / Tools & Equipment policy covers theft of your coating equipment from job sites, vehicles, trailers, and storage facilities." },
      { q: "Is a Graco plural-component spray machine covered under standard business insurance?", a: "A Graco Reactor or XP proportioner is covered under an Inland Marine / Tools & Equipment policy — not GL. At $20,000 to $60,000 replacement cost, these machines should be individually scheduled at replacement cost value on your T&E policy." },
      { q: "What is the difference between scheduled and blanket equipment coverage?", a: "Scheduled coverage lists each piece of equipment with its own value and limit. Blanket coverage applies a single aggregate limit to all covered tools. Many coating contractors use scheduled coverage for high-value machines and blanket coverage for the broader tool inventory." },
      { q: "Does T&E insurance cover equipment while it's in transit between job sites?", a: "Most Inland Marine T&E policies cover equipment in transit, but verify with your carrier. Some policies require a specific transit endorsement for equipment on detached trailers." },
      { q: "Should I insure coating equipment at ACV or replacement cost?", a: "Always insure at replacement cost. A Graco Reactor with a depreciated ACV of $15,000 costs $35,000 to $45,000 to replace new. Insuring at ACV leaves you significantly short in a total loss. The premium difference for replacement cost coverage is modest." },
      { q: "Does T&E insurance cover concrete grinders and shot blast equipment?", a: "Yes — diamond cup grinders, planetary grinders, walk-behind shot blasters, and vacuum-equipped edge grinders are covered under Inland Marine / T&E policies for theft and accidental damage. High-value prep equipment should be scheduled individually at replacement cost." },
      { q: "What's NOT covered by a tools & equipment policy?", a: "T&E policies generally do not cover: mechanical breakdown or wear and tear, equipment rented from others, equipment owned by others in your care, or electronic data loss." },
      { q: "Does T&E cover scaffold systems stolen from an overnight job site?", a: "Yes — scaffolding is a common theft target at overnight coating job sites. Scaffold systems are covered under T&E policies for job site theft. Make sure your scaffolding inventory value is accurately reflected in your coverage limit." },
      { q: "Does equipment insurance cover accidental damage to a spray machine during use?", a: "Yes — accidental damage during operations is a covered cause of loss under most Inland Marine / T&E policies, including damage during loading and unloading, and accidental impacts. Mechanical breakdown from normal wear is not covered." },
      { q: "How much does tools and equipment insurance cost for a coating contractor?", a: "Annual T&E premiums range from $500 to $1,500/year for light commercial painters with $25K–$75K in equipment, $1,000 to $3,000/year for mid-size contractors with $75K–$200K in equipment, and $2,500 to $6,000+/year for full-service operations with $200K–$500K in total equipment value." },
      { q: "What information do I need to get a tools & equipment insurance quote?", a: "Have a list of your major equipment items with estimated replacement values. For high-value items (Graco machines, grinders, spray rigs), serial numbers are helpful. For blanket coverage, an estimated total equipment value is sufficient. Call 844-967-5247." },
      { q: "Is a spray rig trailer covered under auto insurance or T&E?", a: "The trailer structure requires coverage under auto/trailer insurance. The equipment on the trailer is covered by your T&E / Inland Marine policy. For a spray rig mounted on a trailer, you need both: trailer liability/physical damage under commercial auto and T&E coverage for the spray equipment itself." },
      { q: "Does T&E cover equipment rented from a tool rental company?", a: "No — standard T&E policies cover equipment you own. Rented equipment requires a separate 'Rented Equipment' endorsement or a rental damage waiver from the rental company." },
      { q: "What happens if my spray equipment is damaged during a coating application?", a: "File a claim under your Inland Marine / T&E policy. The carrier will assess whether the damage is accidental (covered) or mechanical breakdown/wear (not covered under standard T&E). If your spray equipment is high-value, add equipment breakdown coverage alongside T&E." },
      { q: "Can I add new equipment to my T&E policy mid-year?", a: "Yes — equipment can be added to a scheduled T&E policy at any time. Call 844-967-5247 to add equipment to your policy when you purchase or acquire it. Under blanket T&E, new equipment is automatically covered up to the blanket limit." },
    ],
  },
];

export const FAQS: FAQ[] = [
  {
    q: "What is the difference between GL and Contractors Pollution Liability (CPL) for coating contractors?",
    a: "General liability covers third-party bodily injury, property damage, and completed operations — but it contains a pollution exclusion that bars coverage for fume injuries, solvent spills, isocyanate exposure, and lead paint disturbance. CPL fills that gap and is essential for any coating contractor using solvent-based coatings, 2-part polyurethane systems, or working in pre-1978 buildings.",
  },
  {
    q: "Do I need CPL even if I only do residential painting?",
    a: "If you use any oil-based paints, solvent-based coatings, or thinners — yes. Residential painting contractors face the same VOC and fume exposure claims as commercial contractors. A homeowner whose family develops symptoms during an interior repaint can file a claim that standard GL won't cover. CPL protects you.",
  },
  {
    q: "What GL limits do commercial GC contracts typically require for coating subcontractors?",
    a: "Most commercial GC contracts require $1M per occurrence / $2M aggregate as a minimum. Many require $2M/$4M for commercial coating projects. Larger contracts or government work may require $5M+ aggregate, which can be achieved with an umbrella policy. Always get the contract requirements before you bid.",
  },
  {
    q: "Are isocyanates from 2-part polyurethane coatings covered under standard GL?",
    a: "No. Isocyanates are classified as pollutants under standard GL policy language. If a worker or building occupant files a bodily injury claim after isocyanate exposure from a 2-part polyurethane coating application, the GL carrier will invoke the pollution exclusion and deny the claim. Contractors Pollution Liability (CPL) is the correct coverage.",
  },
  {
    q: "What is completed operations coverage and why do coating contractors need it?",
    a: "Completed operations extends your GL coverage beyond the job completion date to cover claims that arise from your finished work — coating delamination, blistering, corrosion found under a coating you applied, or water intrusion from a failed roof coating system. Claims can emerge months or years post-application.",
  },
  {
    q: "Does workers comp cover chemical exposure injuries for coating applicators?",
    a: "Yes — workers comp covers occupational injury and illness to your own employees, including chemical exposure. However, it does NOT cover third-party claims from building occupants or adjacent tenants. Those third-party bodily injury claims from pollution events require CPL to be covered.",
  },
  {
    q: "How fast can I get a certificate of insurance for a coating project?",
    a: "We issue certificates same-day in most cases. Once your policy is bound, certificates with additional insured endorsements can be issued within hours. For emergency situations or bid deadlines, call 844-967-5247.",
  },
  {
    q: "Does lead paint disturbance during surface prep require special insurance coverage?",
    a: "Yes. Lead dust from disturbing pre-1978 paint is classified as a pollutant under standard GL. Third-party claims from lead exposure — especially involving children — are serious and expensive. Contractors Pollution Liability covers lead paint disturbance claims and associated cleanup costs.",
  },
];
