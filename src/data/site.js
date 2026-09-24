// site.js

// ---- Work image imports ----
import mywork1 from "../assets/mywork1.jpg";
import mywork2 from "../assets/mywork2.jpg";
import mywork3 from "../assets/mywork3.jpg";
import mywork4 from "../assets/mywork4.jpg";
import mywork5 from "../assets/mywork5.jpg";
import mywork6 from "../assets/mywork6.jpg";
import mywork7 from "../assets/mywork7.jpg";
import mywork8 from "../assets/mywork8.jpg";
import mywork9 from "../assets/mywork9.jpg";
import mywork10 from "../assets/mywork10.jpg";
import mywork11 from "../assets/mywork11.jpg";
import mywork12 from "../assets/mywork12.jpg";

export const site = {
  name: "Rossi",
  title: "Rossi",
  description: "",
  bookingUrl: "https://www.setmore.com/",
  phone: "+39 02 3456 7890",
  email: "work@rossi.com",
  telegram: "https://t.me/sofia_rossi",
};

export const nav = [
  { href: "/works", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const socials = [
  { href: "https://tiktok.com", label: "TikTok" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://x.com", label: "X (Twitter)" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export const ticker = [
  "Styled Hair",
  "Clean Structure",
  "Intentional Design",
  "Controlled Texture",
  "Balanced Form",
  "Modern Silhouette",
  "Soft Contrast",
  "Personal Craft",
  "Precision Work",
];


export const Cuts = [
  { name: "Precision Haircut", price: 70 },
  { name: "Trim & Shape", price: 50 },
  { name: "Layered Cut", price: 75 },
  { name: "Restyle / New Shape", price: 85 },
  { name: "Blow-Dry & Styling", price: 40 },
  { name: "Soft Texture Styling", price: 55 },
  { name: "Volume & Movement Styling", price: 60 },
  { name: "Everyday Styling", price: 35 },
  { name: "Finish & Shaping", price: 30 },
  { name: "Curl / Wave Styling", price: 35 },
];

export const colorItems = [
  { name: "Full Color", price: 110 },
  { name: "Dimensional Color", price: 130 },
  { name: "Root Touch-Up", price: 65 },
  { name: "Face-Framing Highlights", price: 70 },
  { name: "Toner & Gloss", price: 45 },
  { name: "Color Refresh", price: 60 },
  { name: "Balayage", price: 140 },
  { name: "Color Correction", price: 180 },
  { name: "Soft Highlights", price: 120 },
  { name: "Root Shadow / Root Melt", price: 75 },
];

export const bridalItems = [
  { name: "Bridal Hair Styling", price: 160 },
  { name: "Event / Occasion Styling", price: 80 },
  { name: "Bridal Trial", price: 90 },
  { name: "Elegant Updo", price: 95 },
  { name: "Wedding Day Hair", price: 180 },
  { name: "Soft Waves / Glam Styling", price: 70 },
];

// ============= WORK GALLERY DATA =============
export const works = [
  {
    slug: "natural-texture-for-elena",
    title: "Natural Texture for Elena",
    src: mywork1,
    image2: mywork2,
    images: [mywork1, mywork2, mywork3], // 3 images shown on scroll
    alt: "Low sleek styled hair portrait",
    date: "March 26",
    category: "Cuts & Styling",
    type: "Texture & Styling",
    techniques: ["Soft Shaping", "Layering", "Texture Control", "Natural Finish"],
    focus: "Natural Texture",
    result: "Soft Volume & Shape",
    overview: "This work focused on enhancing Elena’s natural texture while maintaining softness, balance, and movement. The result is clean, natural, and easy to live with, designed to grow out well over time.",
    approach: "The hair was shaped to preserve its natural texture and volume while creating a soft, balanced form. The focus was on maintaining movement and keeping the result effortless and easy to manage.",
  },
  {
    slug: "soft-crop-for-maya",
    title: "Soft Crop for Maya",
    src: mywork2,
    images: [mywork2, mywork3, mywork4],
    alt: "Soft movement styled hair",
    date: "February 24",
    category: "Color & Highlights",
    type: "Dimensional Color",
    techniques: ["Veil Highlighting", "Lowlight Balancing", "Root Shadow", "Neutral Gloss Toning"],
    focus: "Cool Soft Dimension",
    result: "Refined Soft Dimension",
    overview: "This color was designed to create refined, delicate dimension with cool, balanced tones. Soft contrast remains natural and seamless, with reflection and a smooth tonal flow from root to ends.",
    approach: "Fine highlights added brightness while lowlights preserved depth and balance. A soft root shadow blended seamlessly, and neutral gloss refined the tone for a smooth finish with effortless grow-out.",
  },
  {
    slug: "copper-veil-for-isabella",
    title: "Copper Veil for Isabella",
    src: mywork3,
    images: [mywork3, mywork4, mywork5],
    alt: "Sculpted texture hair portrait",
    date: "February 15",
    category: "Color & Highlights",
    type: "Color Refinement",
    techniques: ["Veil Highlighting", "Gloss Layering", "Depth Balancing", "Shine Enhancement"],
    focus: "Soft Copper Dimension",
    result: "Luminous Copper Flow",
    overview: "Warm copper tones were softly layered to build refined dimension with a seamless, natural finish. Light reflects gently across the surface, while fluid movement flows from root to ends.",
    approach: "Warm copper pigment was built in fine layers to enhance richness while keeping the result airy and natural. The surface remains smooth and luminous, with balanced depth and soft movement.",
  },
  {
    slug: "airy-curls-for-naomi",
    title: "Airy Curls for Naomi",
    src: mywork4,
    images: [mywork4, mywork5, mywork6],
    alt: "Clean precision hair cut",
    date: "January 28",
    category: "Bridal & Event Hair",
    type: "Curl Styling",
    techniques: ["Curl Definition", "Volume Shaping", "Moisture Balancing", "Soft Separation"],
    focus: "Airy Texture",
    result: "Light Defined Volume",
    overview: "Soft, airy curls were shaped to highlight Naomi’s natural texture while keeping the silhouette light and expressive. The finish feels effortless and vibrant, with movement and balanced volume.",
    approach: "Curls were softly lifted to create light, natural volume without weight. Hydration maintained softness and flexibility, while gentle separation defined texture and movement. The finish feels airy, touchable, and easy to wear.",
  },
  {
    slug: "clean-fade-for-adrian",
    title: "Clean Fade for Adrian",
    src: mywork5,
    images: [mywork5, mywork6, mywork7],
    alt: "Editorial volume hair styling",
    date: "January 12",
    category: "Cuts & Styling",
    type: "Precision Cut",
    techniques: ["Fade Blending", "Shape Control", "Edge Refinement", "Texture Balancing"],
    focus: "Natural Texture",
    result: "Sharp Soft Fade",
    overview: "A clean, modern fade was crafted to emphasize structure while keeping the overall look natural and effortless. The silhouette remains sharp yet soft, with balanced texture and seamless transitions.",
    approach: "The fade was blended with controlled precision to create seamless graduation and clean structure. Subtle texture balancing preserved natural movement, while edge refinement sharpened the outline, leaving a polished yet relaxed finish.",
  },
  {
    slug: "defined-length-for-amara",
    title: "Defined Length for Amara",
    src: mywork6,
    images: [mywork6, mywork7, mywork8],
    alt: "Modern bob haircut",
    date: "January 9",
    category: "Cuts & Styling",
    type: "Texture Styling",
    techniques: ["Curl Definition", "Length Shaping", "Moisture Control", "Soft Separation"],
    focus: "Natural Texture",
    result: "Soft Defined Length",
    overview: "Natural curls were shaped to enhance length and clarity while maintaining softness and movement. The silhouette remains balanced and expressive, with light volume and smooth flow.",
    approach: "Curl pattern was refined through gentle definition and controlled shaping to maintain length without heaviness. Moisture balance preserved softness and elasticity, while light separation enhanced clarity and movement, leaving a smooth, touchable finish.",
  },
  {
    slug: "modern-blonde-crop-for-mateo",
    title: "Modern Blonde Crop for Mateo",
    src: mywork7,
    images: [mywork7, mywork8, mywork9],
    alt: "Balayage color blend",
    date: "January 6",
    category: "Cuts & Styling",
    type: "Precision Cut",
    techniques: ["Lightening", "Tone Balancing", "Shape Control", "Texture Refinement"],
    focus: "Clean Blonde Texture",
    result: "Modern Soft Crop",
    overview: "A modern blonde crop was shaped to create a clean, contemporary silhouette while keeping texture natural and relaxed. Light tone enhances clarity and contrast, giving the look a fresh feel.",
    approach: "Hair was carefully lightened and tone-balanced to achieve an even, soft blonde without harshness. Controlled shaping refined structure, while subtle texture preserved movement, leaving a clean, modern finish with natural flow.",
  },
  {
    slug: "copper-dimension-for-amina",
    title: "Copper Dimension for Amina",
    src: mywork8,
    images: [mywork8, mywork9, mywork10],
    alt: "Dimensional hair color",
    date: "December 27",
    category: "Color & Highlights",
    type: "Dimensional Color",
    techniques: ["Tone Enrichment", "Color Layering", "Depth Balancing", "Shine Refinement"],
    focus: "Deep Copper Dimension",
    result: "Rich Copper Flow",
    overview: "Rich copper tones were developed to enhance depth and warmth while keeping the overall look smooth and balanced. Color flows evenly through length, with soft reflection and a luminous finish.",
    approach: "Layered color built depth and richness while maintaining tonal balance and softness. Shine refinement enhanced smoothness, leaving a polished copper finish with fluid movement.",
  },
  {
    slug: "bright-blonde-crop-for-leon",
    title: "Bright Blonde Crop for Leon",
    src: mywork9,
    images: [mywork9, mywork10, mywork11],
    alt: "Precision cut hair",
    date: "December 21",
    category: "Cuts & Styling",
    type: "Precision Cut",
    techniques: ["Lightening", "Tone Balancing", "Shape Control", "Texture Softening"],
    focus: "Soft Light Texture",
    result: "Clean Platinum Crop",
    overview: "A soft platinum crop was shaped to create a clean, relaxed silhouette while keeping texture natural and balanced. The light tone enhances clarity and brightness, giving the look a fresh, effortless feel.",
    approach: "Hair was carefully lightened and tone-balanced to achieve an even platinum tone without harshness. Controlled shaping refined structure, while subtle texture softening preserved movement, leaving a smooth, clean finish with natural flow.",
  },
  {
    slug: "sleek-event-pony-for-zara",
    title: "Sleek Event Pony for Zara",
    src: mywork10,
    images: [mywork10, mywork11, mywork12],
    alt: "Natural textured hair",
    date: "November 25",
    category: "Bridal & Event Hair",
    type: "Event Styling",
    techniques: ["Smoothing", "Structure Control", "Shine Refinement", "Hold Balancing"],
    focus: "Sleek Polished Form",
    result: "Smooth Sleek Finish",
    overview: "Hair was styled into a sleek, polished ponytail to create a refined, elegant silhouette. The finish remains smooth and controlled, with subtle shine and a clean, balanced shape for formal occasions.",
    approach: "Hair was smoothed and structured for control without stiffness. Shine refinement enhanced clarity, while balanced hold ensured lasting shape and comfort, leaving a sleek, polished finish.",
  },
  {
    slug: "low-sleek-for-luna",
    title: "Low Sleek for Luna",
    src: mywork11,
    images: [mywork11, mywork12, mywork1],
    alt: "Elegant updo hair",
    date: "October 25",
    category: "Bridal & Event Hair",
    type: "Event Styling",
    techniques: ["Smoothing", "Surface Polishing", "Flexible Hold", "Shape Setting"],
    focus: "Minimal Structure",
    result: "Controlled Finish",
    overview: "A minimal, close-to-head style was created to emphasize clean lines and quiet elegance. The surface appears smooth and composed, with restrained shine and controlled form, giving the look a modern, understated presence.",
    approach: "Hair was directed and set close to the head to maintain precision and stability. Surface polishing refined smoothness, while flexible hold preserved comfort and natural response, leaving a controlled finish that remains clean over time.",
  },
  {
    slug: "natural-contrast-for-nyla",
    title: "Natural Contrast for Nyla",
    src: mywork12,
    images: [mywork12, mywork1, mywork2],
    alt: "Soft waves glam styling",
    date: "October 16",
    category: "Color & Highlights",
    type: "Tonal Dimension",
    techniques: ["Tone Shaping", "Contrast Control", "Depth Placement", "Surface Brightening"],
    focus: "Soft Natural Contrast",
    result: "Balanced Dimensional Tone",
    overview: "Subtle tonal contrast enhanced depth while keeping the look soft and natural. Light moves gently across the surface, creating a balanced, dimensional effect with smooth continuity.",
    approach: "Tone was carefully shaped through controlled depth placement to maintain softness without flattening dimension. Surface brightening refined clarity, leaving a balanced finish with gentle contrast and natural visual flow.",
  },
];