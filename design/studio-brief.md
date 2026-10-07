# Design brief: MGT Group website

Design a public marketing website for Maandeeq Global Transportation Ltd. (MGT Group). A developer will build your design later in Next.js. Do not treat any existing webpage as the design. Design the visual system from scratch, using the brand rules below.

## What the site must do

A logistics officer at an NGO, a UN agency, or a donor-funded project in Somaliland should understand, within one minute, that MGT can supply vehicles, trucks, freight, customs clearance, procurement, and warehousing, and should be able to send an enquiry.

The site is a brochure and an enquiry tool. It is not a customer portal, a booking engine, or a tracking app.

## Company

- Brand: MGT Group
- Legal name: Maandeeq Global Transportation Ltd.
- Short name: Maandeeq Global Transportation
- Established: 2023
- Office: 150 Street, Kodbuur District, Hargeisa, Somaliland
- Website: www.mgtgroup.com
- Tagline: MGT is your strongest service provider
- Email: maandeeqGlobalTransportation@gmail.com
- General manager, as printed in the 2026 company profile: Mohamed Omar Farah. Confirm with the client before the name is locked in the design.

One-sentence description: Maandeeq Global Transportation is a Hargeisa logistics company. It moves people and cargo across Somaliland and Somalia, and supports NGOs, UN agencies, and public projects with transport, freight, customs, procurement, and warehousing.

What they sell: third-party logistics. MGT sits between the organization that needs something moved or supplied and the vehicles, warehouses, and clearances that get it done.

## Audience

- International and local NGOs
- United Nations agencies
- Government and donor-funded projects
- Any organization that needs vehicles, trucks, or cargo moved inside Somaliland and Somalia

They are busy, formal, and risk-averse. They need to trust the company with vehicles, cargo, and paperwork. The design should feel established and precise. It should not feel like a startup, a tourism poster, or a template.

## Tone

Plain, confident, specific. Short sentences. No slogans such as “unlock your supply chain”, “seamless solutions”, or “your trusted partner in excellence”. The tagline above is the only slogan.

Write in English. Do not add Somali unless the client asks later.

## Color

Use these colors. Do not introduce purple, indigo, teal, orange, or a second green.

| Role | Hex | Use |
|---|---|---|
| Page | `#FFFFFF` | Main background |
| Surface | `#F3F7FB` | Alternate bands only, used rarely |
| Ink | `#122033` | Headings and body text |
| Muted | `#526178` | Captions and secondary lines |
| Line | `#D7E2EE` | Dividers |
| Blue | `#1776E9` | Links, the main button, the blue in the logo |
| Deep blue | `#0B4CAD` | Large blue areas where white text sits, such as a hero or footer |
| Green | `#1E9C34` | The swoosh, section markers, small labels. Not body text |
| Yellow | `#FEDE02` | The word MAANDEEQ, and small labels that sit on blue |

Rules:

- Yellow text on white is forbidden. Yellow is only for the Maandeeq name and for small labels on blue.
- Do not use the bright blue `#1776E9` for paragraphs. Body text is `#122033`.
- Do not fill the whole site with blue. White is the page. Blue is for action and for a few strong areas.
- Green is a marker, like the swoosh. Do not make green the main button.
- The letterhead uses a black field. Black may appear in the logo artwork. Do not make the website a black site.

## Logo

The mark is a white circle. Inside it: a green swoosh, the letters M and G in blue, the letter T in green, and the word GROUP in blue underneath.

The wordmark is MAANDEEQ in yellow, with GLOBAL TRANSPORTATION LTD. underneath.

Files the client can supply (already extracted):

- Full circular mark, for use on blue: `brand/logo/mgt-mark.png`
- Mark with the white disc removed, for use on white: `brand/logo/mgt-mark-on-light.png`
- Horizontal lockup for a white header: `brand/lockup/logo-horizontal-on-light.png`
- Horizontal lockup for a blue background: `brand/lockup/logo-horizontal.png`
- Stacked logo on blue: `brand/lockup/logo-stacked-on-blue.png`
- Favicon: `brand/icons/favicon.ico`

Do not redraw the letters. Do not recolor the swoosh. Do not put the yellow wordmark on a white background without the blue subtitle, or the name disappears. Give the logo clear space. Do not place it on a busy photograph without a solid plate behind it.

## Photography and graphics

The company profile cover uses a port scene: containers, a ship, an aircraft at dusk. That mood is allowed: working logistics, not luxury travel.

Design real photo slots with a fixed aspect ratio and a one-line art direction under each slot, for example “Land Cruiser on a Somaliland road, daylight, no stock-watermark look”. The client may not have photos yet. Do not fake a fleet with clip-art, isometric trucks, or generic 3D illustrations.

Do not draw other organizations’ logos. Show client names in type. If the client later supplies official logo files, the client row can swap to logos.

Do not show scanned contracts, signatures, bank documents, prices, or vehicle plate numbers. Those exist in the company profile and must stay off the site.

## Layout character

Look at serious freight and institutional sites, then make this one specific to MGT.

Keep:

- A strong header with the real logo, not a typed wordmark
- A clear first action: request a vehicle or a shipment
- Service names a buyer can scan
- Named clients as proof
- The office, phones, and email always easy to find

Avoid:

- A hero that is only a headline and two buttons on empty white space
- A grid of equal rounded cards with drop shadows
- Icons on every service as the main design idea
- Giant numbers that do not come from the company (no invented “500 trucks” or “98% on time”)
- Decorative serif words inside headlines
- A dark-mode site
- Stock-photo collages with the logo pasted in a corner

One brand move worth using, from their own profile book: a green bar that cuts into a blue title bar. You may refine that shape. Do not turn every heading into that bar if it becomes repetitive.

## Pages to design

Design desktop at 1440px wide and mobile at 390px wide. Design every page below, not only the homepage. Show the header and footer on each.

### 1. Home

Purpose: prove they are a working logistics company and move the visitor to an enquiry.

Sections, in this order:

1. Header
2. Hero. Company name, the one-sentence description, tagline, and two actions: Request service, and View services. Include one strong visual: either the circular mark used large, or a photo slot with the art direction above. Established 2023 and Hargeisa should be visible, not hidden in the footer.
3. Services. Show the first six as a scannable list, not six identical cards. Each row: a short number, the service name, one line of what it is, and a link to that service on the services page.
4. Clients. The nine names below, with the relationship in smaller type.
5. A short quotation from the general manager, attributed to Mohamed Omar Farah, General Manager. Link to the full message on About.
6. Contact strip: address, four phone numbers, and a button to the enquiry form.
7. Footer

### 2. About

1. The company story, three short paragraphs (copy is in the content file).
2. Vision and mission, side by side on desktop, stacked on mobile.
3. Eight values. Each value is a title plus one sentence. Do not put them in eight floating cards.
4. How the company is organized. Draw this as a real chart, not a list of boxes:
   - General Director
   - Deputy Director
   - Then five units: Human Resource Manager, Operational Manager, Freight forwarding and warehouse, Car rental, Travel and tourist services
5. Full message from the general manager, five paragraphs, signed Mohamed Omar Farah, General Manager.

### 3. Services

One page. Each service is a section with an anchor, so the home page can link to `#vehicle-leasing` and the others.

For each service show the title, a one-line summary, a short paragraph, and the list of vehicles or items when one exists.

Services, in this order:

1. Vehicle leasing and light transport. Fleet: 4x4 Surf, Toyota Prado, Toyota Hilux, Toyota Land Cruiser, passenger van, mini bus, 30-seater bus. Used by INGOs and UN teams across Somaliland, including VSF Suisse, Zamzam Foundation, and the Ministry of Agricultural Development on the Barwaaqo project.
2. Trucks and heavy transport. Fleet: 24-truck rental, 12-tonne rental, lorry rental.
3. Road freight forwarding. Overland freight to Somaliland and Somalia, with security and a set delivery time. Loading and stowage depend on the type of goods.
4. Sea and air freight. Sea freight when the shipment should travel by ocean. Air freight, through associates, when the cargo is urgent.
5. Procurement. Food items, non-food items, hygiene materials. The job is to buy what the client actually needs, at a lower total cost.
6. Customs clearance. Cargo entering Somaliland by air, sea, or road.
7. Tax exemption processing. For international NGOs and UN organizations that are entitled to exemption in Somaliland.
8. Disinfection. Premises and goods, against infectious bacteria, viruses, and malaria risk.
9. Fumigation and pest control. Also packing and crating, including cargo that must be treated before storage.
10. Property and site support. Moving materials between compounds, and light site maintenance.
11. Warehouse management. Short- and long-term storage, loading and unloading, labeling and packing, fumigation, pest control, packing and crating. Warehouses have theft and fire alarms and round-the-clock guards.
12. Travel services. A travel unit beside car rental and freight, for organizations that need people moved as well as cargo.

End the page with one action: request one of these services.

### 4. Clients

Show the organizations by name. Do not invent logos.

| Name | What MGT did |
|---|---|
| Vétérinaires Sans Frontières Suisse (VSF Suisse) | Vehicle rental |
| Plan International | Motor-vehicle hire, Somaliland and Somalia |
| Zamzam Foundation | Vehicle rental |
| United Nations Assistance Mission in Somalia (UNSOM) | Client |
| World Food Programme (WFP) | Procurement and delivery of supplies |
| Welthungerhilfe (WHH) | Distribution of hygiene kits and tools in the Sanaag region |
| One Earth Future | Client |
| Cheetah Conservation Fund (CCF) | Vehicle rental for field work in Maroodi Jeex |
| Ministry of Agricultural Development, Somaliland | Transport for the World Bank Barwaaqo project |

Under the list, one quotation, on a deep blue band, yellow label, white quote:

“Throughout our collaboration, your company has demonstrated a high level of professionalism, reliability, and efficiency in meeting our logistical needs.”

Attribution: Eng. Abdirisak Ahmed Gas, Director General, Ministry of Agricultural Development. Context line: Recommendation for transport on the World Bank Barwaaqo project.

### 5. Contact

Two columns on desktop. Stacked on mobile, details first, form second.

Details:

- Address: 150 Street, Kodbuur District, Hargeisa, Somaliland
- Email: maandeeqGlobalTransportation@gmail.com
- Phones, each tappable on mobile:
  - 063 484 8748
  - 065 484 8748
  - 063 441 8722
  - 065 441 8722
  - 063 752 6666
  - 063 410 8850
  - 065 410 8850

Form fields:

- Name, required
- Organization, required
- Phone, optional
- Service, required, a dropdown of the twelve services
- Message, required
- Button: Send enquiry

Design three states: empty, error (“Add your name, organization, the service you need, and a short message.”), and success (“Your email app should open with this enquiry. If it does not, write to the email address.”).

Intro line: Tell us the cargo, the route, or the vehicles you need. We reply from the Hargeisa office.

## Header and footer

Header, every page:

- Logo on the left, linking home
- Links: About, Services, Clients, Contact
- One button: Request service, linking to Contact
- Current page is marked
- On a phone, the links collapse into a menu labeled Menu, which becomes Close when open. The logo becomes the circular mark so the header does not crush the wordmark.

Footer, deep blue:

- Horizontal logo made for a blue background
- Tagline
- The same five links
- Address and email
- Copyright line: © 2026 Maandeeq Global Transportation Ltd.

A thin brand stripe may sit at the very top of the page: a short green segment, then blue for the rest of the width. Keep it thin, about 8px.

## Type

Use one grotesque family for everything. The logo letters are heavy and slightly wide, so the site type should feel related: a sturdy sans, not a thin geometric fashion font, and not a serif.

Suggested scale, which you may adjust:

- Body 16–18px, line height about 1.5, measure no wider than 70 characters
- Page title large enough to be the first thing read, not a poster
- Section labels in a slightly condensed bold, uppercase, used only for small labels such as Vision, Office, Phone
- Do not set one word of a headline in a different font or in yellow

## Components to specify

Show these once in a small component sheet, then use them on the pages:

- Primary button (blue, white label)
- Secondary button (blue outline, blue label)
- Text link
- Header, desktop and mobile, including the open menu
- Footer
- Section title
- Service row
- Client row
- Phone and email links
- Form fields, dropdown, error, success
- Focus state for keyboard users: a clear blue outline, not a glow

Buttons are square or nearly square. Radius, if any, stays under 4px. No drop shadows on cards. If a region needs separation, use a line, a band of surface color, or a solid blue area.

## Motion

Almost none. A short color change on a button and a simple open and close for the mobile menu. No scrolling parallax, no fading paragraphs, no animated trucks.

## Accessibility

- Text on white meets WCAG AA. White text sits only on deep blue `#0B4CAD`, not on `#1776E9`.
- Yellow is never the only way to see the Maandeeq name on a white page.
- Every photo slot has room for alt text.
- The form errors are text, not color alone.
- Tap targets on mobile are at least 44px.

## Do not design

- Login, accounts, shipment tracking, live maps, or price calculators
- A blog, careers page, or news page
- Invented statistics, awards, or partner logos
- Bank details, contract values, daily rates, or plate numbers
- A second office. Hargeisa is the only office to show. Burao appears only as a place goods have been delivered, and it does not need its own address block.

## What to deliver

1. A Figma file with desktop and mobile frames for Home, About, Services, Clients, and Contact.
2. The contact form in empty, error, and success states.
3. The mobile menu open.
4. A one-page component sheet: color, type, buttons, form, logo clear-space.
5. A short note, half a page, explaining the visual idea in plain language.
6. Exported PNG previews of each desktop and mobile frame, so a developer can build from the pictures if Figma access is limited.

Name the frames clearly: `Home / Desktop`, `Home / Mobile`, and the same for the other pages.

## Copy source

Final sentences for the story, vision, mission, values, general manager’s message, and service paragraphs are in `content/site-context.json` in the project. Use that wording. Do not rewrite it into marketing language. You may break a paragraph across a layout. You may not add claims that are not in that file.
