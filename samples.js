/* SAMPLES - yahi file edit karo. Naya sample = ek nayi line (comma lagana mat bhoolna).
   Files ko assets/audio, assets/video, assets/portfolio mein upload karo, phir yahan path likho.
   Khaali src:"" ka matlab "coming soon" card dikhega. */

const AUDIO=[
 {t:"Audio Sample 1", c:"Advertisement", src:"assets/audio/audio-sample-1.mp3", dur:"10:12"},
 {t:"Audio Sample 2", c:"Advertisement", src:"assets/audio/audio-sample-2.mp3", dur:"5:48"}
];

/* VIDEO: ya to src:"assets/video/x.mp4" (25 MB se chhota) ya YouTube id yt:"abc123XYZ".
   thumb:"assets/video/x.jpg" optional. */
const VIDEO=[
 {t:"Saree & Fashion Ad",       c:"Advertisement", src:"assets/video/saree-fashion-ad.mp4",       thumb:"assets/video/saree-fashion-ad.jpg",       dur:"0:41"},
 {t:"Saree Shop Promo",         c:"Business",      src:"assets/video/saree-shop-promo.mp4",       thumb:"assets/video/saree-shop-promo.jpg",       dur:"0:40"},
 {t:"Audio Visual Education",   c:"Advertisement", src:"assets/video/audio-visual-education.mp4", thumb:"assets/video/audio-visual-education.jpg", dur:"2:09"},
 {t:"Shop Business Promo",      c:"Business",      src:"assets/video/shop-business-promo.mp4",    thumb:"assets/video/shop-business-promo.jpg",    dur:"0:37"}
];

/* PORTFOLIO: cat = category, img = photo ka path, alt = chhota description.
   Example: {cat:"Studio Work", img:"assets/portfolio/studio1.jpg", alt:"Recording studio"} */
const PORTFOLIO=[
 {cat:"Audio Production", img:"", alt:"Audio Production work sample"},
 {cat:"Video Production", img:"", alt:"Video Production work sample"},
 {cat:"Advertising",      img:"", alt:"Advertising work sample"},
 {cat:"Campaigns",        img:"", alt:"Campaigns work sample"},
 {cat:"Events",           img:"", alt:"Events work sample"},
 {cat:"Studio Work",      img:"", alt:"Studio Work sample"},
 {cat:"Digital Marketing",img:"", alt:"Digital Marketing work sample"}
];
