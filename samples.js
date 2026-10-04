/* SAMPLES - yahi file edit karo. Naya sample = ek nayi line (comma lagana mat bhoolna).
   Files ko assets/audio, assets/video, assets/portfolio mein upload karo, phir yahan path likho.
   Khaali src:"" ka matlab "coming soon" card dikhega. */

const AUDIO=[
 {t:"Audio Sample 1", c:"Advertisement", src:"assets/audio/audio-sample-1.mp3", dur:"10:12"},
 {t:"Audio Sample 2", c:"Advertisement", src:"assets/audio/audio-sample-2.mp3", dur:"5:48"}
];

/* MAP: website par live Google map (zoom + move hota hai).
   query = address jo map par dhoondhna hai, type = "h" (satellite+naam) ya "m" (normal map), zoom = 1 se 20.
   Pin galat jagah dikhe to exact map ka link embed:"..." mein paste karo
   (Google Maps > apna business > Share > Embed a map > HTML mein src="..." ke andar ka link). */
const MAP={
 query:"Audio Video Marketing Solutions, Alok CD Wali Gali, Railway Station Road, near Fagalwa Petrol Pump, Sikar, Rajasthan 332001",
 type:"h", zoom:16, embed:""
};
/* Directions button: khaali rakho to upar wale address ko Google Maps mein directions ke saath kholta hai. */
const DIRECTIONS="";

/* SOCIAL: apne pages ke link. Facebook ka link yahan paste karo (khaali ho to search khulega). */
const SOCIAL={
 instagram:"https://www.instagram.com/audiovideomarketing/",
 youtube:"https://www.youtube.com/@audio-videomarketingsoluti9332",
 facebook:"https://www.facebook.com/share/1PyXEDWPHU/"
};

/* VIDEO: 3 tareeke:
   1) YouTube: yt:"YouTube ka poora link" (normal ya Shorts dono chalte hain) - thumbnail apne aap aayega,
      video site ke andar hi chalega, YouTube kholne ki zaroorat nahi.
   2) File: src:"assets/video/x.mp4" (25 MB se chhota), thumb:"assets/video/x.jpg" (cover).
   Example: {t:"Naya Ad", c:"Advertisement", yt:"https://youtube.com/watch?v=XXXXXXXXXXX", dur:"0:30"}, */
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
