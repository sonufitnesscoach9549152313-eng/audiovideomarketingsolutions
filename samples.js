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

/* VIDEO CATEGORIES: har category mein pehla video site par dikhta hai, baaki "See more" dabane par.
   Naya video: us category ki list mein ek nayi line:  {yt:"YouTube ka poora link", t:"Naam", d:"Neeche dikhne wali line"},
   Category ka order upar se neeche wahi rahega jo yahan likha hai. Naya category = naya {name:..., videos:[...]} block. */
const VIDEO_CATEGORIES=[
 {name:"Election Campaign", videos:[
  {yt:"GyhcPUiF0UU", t:"Sarpanch Election Campaign", d:"AI presenter explains the development work done in the gram panchayat and asks voters to elect the same sarpanch again."},
  {yt:"_PY5IoyPm44", t:"Election Campaign Video", d:"AI video for an election campaign."},
  {yt:"tNTbCYmO24Y", t:"Election Campaign Video 2", d:"Election campaign video."},
  {yt:"tSodv21W8L8", t:"Election Campaign Video 3", d:"Election campaign video."}
 ]},
 {name:"Audio Video Marketing Solutions Ads", videos:[
  {yt:"9Qg8NfckZ2w", t:"Our Offers & Services", d:"Our own ad: the offers we have and the services we provide, and who they are for."},
  {yt:"_cHChVDCiGQ", t:"Our Promo 1", d:"Promotion video of Audio Video Marketing Solutions."},
  {yt:"VlRGJsr7-l8", t:"Our Promo 2", d:"Promotion video of Audio Video Marketing Solutions."},
  {yt:"cqaWSNMTwL4", t:"Our Ad 1", d:"Our own ad for Audio Video Marketing Solutions."},
  {yt:"rcxaTtFacJU", t:"Our Ad 2", d:"Our own ad for Audio Video Marketing Solutions."},
  {yt:"AVXq94VcWHM", t:"Our Ad 3", d:"Our own ad for Audio Video Marketing Solutions."}
 ]},
 {name:"Mela & Festival", videos:[
  {yt:"NOrUvHXfHi0", t:"Mela Promotion (AI Presenter)", d:"AI presenter tells about the mela, where it is held and the rides and attractions."},
  {yt:"HGFpudGWa_Y", t:"Festival Mela Promotion", d:"Promotion video for a festival mela."},
  {yt:"S3UmfzHF6UY", t:"Mela Promotion", d:"Promotion video for a mela."},
  {yt:"In4GREKY1z4", t:"Mela Promotion 2", d:"Promotion video for a mela."}
 ]},
 {name:"Shops & Stores", videos:[
  {yt:"suh_f03E84w", t:"Mobile Store Offers", d:"Promotion video for a mobile store announcing its offers."},
  {yt:"Ny1zRPMr1xU", t:"Clothing Store Offers", d:"Promotion video for a clothing store announcing its offers."},
  {yt:"hpWYYGTg-jM", t:"Mobile Shop Promotion", d:"AI presenter tells about a mobile shop."},
  {yt:"hM7dQzg3bwY", t:"Sweet Shop Promotion", d:"AI presenter promotes a sweet (mithai) shop."},
  {yt:"KtYaetk3n5o", t:"Sweet Shop Ad", d:"Ad for a sweet shop."},
  {yt:"t-pQmh3Zu4o", t:"Motorcycle & Scooty Showroom", d:"Ad for a motorcycle and scooty center where bikes and scooties are sold."},
  {yt:"CP5YqWsfY_I", t:"Jewellery Shop AI Ad", d:"AI video ad for a jewellery shop."}
 ]},
 {name:"School, Academy & Coaching", videos:[
  {yt:"XxUpSz9TXnk", t:"Academy for Children", d:"AI presenter explains the facilities and how children are looked after at the academy."},
  {yt:"YYCtEcs3RhQ", t:"School Promotion", d:"AI presenter promotes a school and its facilities."},
  {yt:"M9oAK7x-IZk", t:"Academy / School Promotion", d:"Promotion video for an academy or school."},
  {yt:"e1Rt2WXiE7s", t:"School Ad", d:"Ad for a school."},
  {yt:"INzsISH_4KY", t:"Coaching Center Promotion", d:"Promotion video for a coaching center."},
  {yt:"uTFwGBcy2_o", t:"Coaching Center Video", d:"Video for a coaching center."}
 ]},
 {name:"Religious Events", videos:[
  {yt:"esuVtoODX8g", t:"Bhagwat Katha Promotion", d:"AI presenter tells what will happen at the Bhagwat Katha and who will attend."},
  {yt:"LdMfSqG-myQ", t:"Khatu Shyam Baba Bhajan Sandhya", d:"Ad for a Khatu Shyam Baba bhajan sandhya."}
 ]},
 {name:"Hotel & Restaurant", videos:[
  {yt:"Fi7gKZXoeeA", t:"Hotel Promotion", d:"Promotion video for a hotel."},
  {yt:"PG4ooXBfQOI", t:"Restaurant Promotion", d:"Promotion video for a restaurant."}
 ]},
 {name:"Property & Real Estate", videos:[
  {yt:"wc3g22YAQXg", t:"New Flats - Pre-booking Offer", d:"AI presenter tells about new flats being built and the discount on pre-booking."},
  {yt:"FuHXLy4wAFQ", t:"Property Promotion", d:"Promotion video for a property."}
 ]},
 {name:"Hospital & Health", videos:[
  {yt:"oHEy9JI1jO8", t:"Free Eye Checkup Camp", d:"Video for an eye hospital's free eye checkup camp."},
  {yt:"cj9X_HkLu6s", t:"Hospital Ad", d:"Ad for a hospital."}
 ]},
 {name:"City Promotion", videos:[
  {yt:"Fl485qilI4I", t:"City Promotion", d:"Video promoting a city and what makes it a good place to live."}
 ]}
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
