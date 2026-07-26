import { BeforeAfterProject, ServicePackage, QuoteEstimate } from '../types';

import officeCarpetImg from '../assets/images/office_carpet_before_after_1784832851146.jpg';
import hallwayCarpetImg from '../assets/images/hallway_carpet_before_after_1784832885638.jpg';
import orangeArmchairImg from '../assets/images/orange_armchair_before_after_1784832868668.jpg';
import dirtyWaterBucketImg from '../assets/images/dirty_water_bucket_1784832899842.jpg';
import heroUpholsteryImg from '../assets/images/hero_upholstery_1784829117850.jpg';
import fabricSwatchesImg from '../assets/images/fabric_swatches_1784829154153.jpg';
import restoredMcmChairImg from '../assets/images/restored_mcm_chair_1784829174412.jpg';

export interface DirtyWaterItem {
  id: string;
  title: string;
  location: string;
  image: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  service: string;
}

export const HERO_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200";

export const COMPANY_ADDRESS = "Suite RA01, 195-197 Wood Street, London, E17 3NU";

export const BEFORE_AFTER_RESULTS: BeforeAfterProject[] = [
  {
    id: 'result-1',
    title: 'Home office carpet - Ground-in soil removed!',
    category: 'Carpet Extraction',
    era: 'London Wood Street E17',
    beforeImage: officeCarpetImg,
    afterImage: officeCarpetImg,
    beforeDescription: 'Heavily trafficked office carpet with ground-in shoe soil, coffee stains, and dark traffic lines under the desk.',
    afterDescription: 'Hot water extraction wand at 400 PSI flushed all deep soil out. Clean vacuum lines and refreshed soft pile restored.',
    fabricUsed: 'Synthetic Commercial Carpet',
    hoursInvested: 2,
    techniquesUsed: ['Pre-vacuuming', 'Heavy Traffic Lane Pre-spray', 'Hot Water Extraction Wand', 'Rapid Drying Fan'],
    clientReview: {
      author: 'Sarah M.',
      location: 'Walthamstow, London E17',
      rating: 5,
      text: 'I thought we would have to replace the office carpet. Restore DEEP worked magic and it looks brand new!'
    }
  },
  {
    id: 'result-2',
    title: 'Hallway & Entrance Carpet - Mud track stains gone!',
    category: 'Hallway Extraction',
    era: 'Hackney, London',
    beforeImage: hallwayCarpetImg,
    afterImage: hallwayCarpetImg,
    beforeDescription: 'High-traffic hallway carpet covered in heavy brown mud footprints, pet dander, and dark edge filtration.',
    afterDescription: 'Treated with pet-safe eco pre-spray and deep hot rinse. Original bright beige carpet restored completely.',
    fabricUsed: 'Saxony Wool Blend',
    hoursInvested: 2.5,
    techniquesUsed: ['Eco Enzyme Pre-treatment', 'Deep Rinse Extraction', 'Sub-floor Sanitization', 'Fibre Grooming Brush'],
    clientReview: {
      author: 'David L.',
      location: 'Islington, London',
      rating: 5,
      text: 'The technician was punctual, courteous, and transparent. The hallway looks immaculate and smells fresh naturally.'
    }
  },
  {
    id: 'result-3',
    title: 'Orange Velvet Armchair - Grime & Oil Extraction',
    category: 'Upholstery Clean',
    era: 'Greenwich, London',
    beforeImage: orangeArmchairImg,
    afterImage: orangeArmchairImg,
    beforeDescription: 'Velvet chair cushion heavily stained with dark body oils, dust accumulation, and dark grime on armrests.',
    afterDescription: 'Low-moisture delicate fabric extraction. Restored vibrant bright orange color and velvet softness.',
    fabricUsed: 'Velvet Upholstery',
    hoursInvested: 3,
    techniquesUsed: ['Low Moisture Hand Head', 'Delicate Degreaser Spray', 'Neutralizing Rinse', 'Velvet Pile Grooming'],
    clientReview: {
      author: 'Emma & James K.',
      location: 'Greenwich',
      rating: 5,
      text: 'The orange armchair came up incredible! So vibrant and fresh, saved us buying a replacement couch.'
    }
  },
  {
    id: 'result-4',
    title: 'Fabric Armchair - Deep Clean & Stain Shield',
    category: 'Upholstery Cleaning',
    era: 'Walthamstow E17',
    beforeImage: restoredMcmChairImg,
    afterImage: restoredMcmChairImg,
    beforeDescription: 'Mid-century fabric chair with faded upholstery, accumulated dust, and grease spots.',
    afterDescription: 'Deep steam rinse and protective fabric shield applied. Rich original fabric colors renewed.',
    fabricUsed: 'Woven Fabric & Wood Accent',
    hoursInvested: 3.5,
    techniquesUsed: ['Hand Detail Spray', 'Fabric Degreasing', 'Microfiber Buffing', 'Protective Stain Barrier'],
    clientReview: {
      author: 'Claire H.',
      location: 'Wood Street E17',
      rating: 5,
      text: 'Amazing result on our chair. Restore DEEP really takes pride in their work!'
    }
  }
];

export const DIRTY_WATER_COLLECTION: DirtyWaterItem[] = [
  {
    id: 'water-1',
    title: 'Deep Carpet Extraction Wastewater',
    location: 'London E17 Home',
    image: dirtyWaterBucketImg,
    caption: 'Thick murky dark brown silt extracted from a carpet that looked "clean" on the surface.'
  },
  {
    id: 'water-2',
    title: 'Pet Soil & Deep Dander Dump Tank',
    location: 'Walthamstow Residence',
    image: dirtyWaterBucketImg,
    caption: 'Accumulated pet dander, dirt, and old spill residues flushed out in 1 pass.'
  },
  {
    id: 'water-3',
    title: 'Sofa Fabric Extraction Liquid',
    location: 'Hackney Living Room',
    image: dirtyWaterBucketImg,
    caption: 'Black sludge pulled from couch cushions after years of daily family use.'
  },
  {
    id: 'water-4',
    title: 'Hallway & Stairs Soil Dump',
    location: 'Islington Property',
    image: dirtyWaterBucketImg,
    caption: 'Outdoor mud and dust trapped deep down at the root of the carpet fibres.'
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark & Helen W.',
    location: 'London E17',
    rating: 5,
    date: '2 days ago',
    title: 'Absolutely top class carpet cleaning!',
    comment: 'Restore DEEP cleaned our lounge, hall, and stairs carpets. The difference is night and day. They took their time, explained the process, and charged exactly what was quoted. Zero hidden fees!',
    service: 'Carpet & Stairs Extraction'
  },
  {
    id: 'rev-2',
    author: 'Rachel P.',
    location: 'Walthamstow',
    rating: 5,
    date: '1 week ago',
    title: 'Sofa and carpets look brand new',
    comment: 'I was skeptical about whether pet stains and old wine spots could come out, but Restore DEEP did a miraculous job. Dealing directly with their team was so pleasant and stress-free.',
    service: 'Upholstery & Pet Stain Removal'
  },
  {
    id: 'rev-3',
    author: 'Gareth T.',
    location: 'Wood Street E17',
    rating: 5,
    date: '2 weeks ago',
    title: 'Honest, reliable, local independent service',
    comment: 'Great to support a local London business that actually cares about quality. No rushed job or subcontracted workers. Highly recommended to anyone in London!',
    service: 'Whole House Carpet Clean'
  },
  {
    id: 'rev-4',
    author: 'Eleanor B.',
    location: 'Islington',
    rating: 5,
    date: '3 weeks ago',
    title: 'Fast drying and pet safe solution',
    comment: 'We have two young toddlers and a dog, so child-safe products were essential. The carpets dried in under 3 hours and smell fresh naturally.',
    service: 'Lounge & Bedroom Cleaning'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Carpets that actually come up clean',
    description: 'No quick surface cleans. We use proper high-pressure hot water extraction to remove dirt from deep down in the fibres.'
  },
  {
    title: 'Direct Specialist Service',
    description: 'No sub-contractors or third-party workers. Dedicated, certified extraction specialists from your first message to the finished job.'
  },
  {
    title: 'No rushed jobs',
    description: 'We take the exact time needed to do it properly, not in and out as fast as possible.'
  },
  {
    title: 'No hidden costs',
    description: 'What we quote is what you pay. Simple, honest, and transparent pricing with no surprises.'
  },
  {
    title: 'Safe for your home',
    description: 'Child and pet-safe eco solutions, so you never have to worry about harsh chemical residues.'
  }
];

export const CLEANING_SERVICES = [
  {
    id: 'carpet-rug',
    title: 'Carpet & Rug Cleaning',
    iconName: 'Sparkles',
    description: 'Deep extraction cleaning for all synthetic, wool, and woven carpets & area rugs.',
    highlights: ['400 PSI Hot Water Rinse', 'Quick 2-4 Hour Drying', 'Eco-friendly Pre-treatments']
  },
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning',
    iconName: 'Sofa',
    description: 'Gentle yet powerful cleaning for fabric sofas, armchairs, dining chairs, and headboards.',
    highlights: ['Low-Moisture Extraction', 'Fabric Conditioning', 'Body Oil Degreasing']
  },
  {
    id: 'hard-floor',
    title: 'Hard-Floor Cleaning',
    iconName: 'Layers',
    description: 'Deep scrub and extraction for luxury vinyl tile (LVT), stone, tile & grout.',
    highlights: ['Grout Line Scrubbing', 'High-speed Rotary Clean', 'Protective Surface Polish']
  },
  {
    id: 'pet-stain',
    title: 'Pet Stain & Odours',
    iconName: 'ShieldAlert',
    description: 'Targeted enzyme treatments to break down urine crystals and eliminate deep odours.',
    highlights: ['Sub-floor Detection', 'Enzyme Bacteria Breakdown', '100% Odour Neutralization']
  },
  {
    id: 'spot-stain',
    title: 'Spot & Stain Removal',
    iconName: 'Target',
    description: 'Specialist spot treatments for red wine, coffee, tea, ink, makeup, and rust spills.',
    highlights: ['Targeted Stain Solvents', 'No Fibre Bleaching', 'High Removal Success Rate']
  },
  {
    id: 'stain-protection',
    title: 'Stain Protection',
    iconName: 'ShieldCheck',
    description: 'Invisible fluorochemical barrier that repels liquid spills and makes future vacuuming easier.',
    highlights: ['Repels Coffee & Oil', 'Preserves Fibre Texture', 'Long-lasting Shield']
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'gal-1',
    title: 'Home Office Carpet Before / After',
    category: 'Carpet Cleaning',
    image: officeCarpetImg,
    tag: 'Office Carpet'
  },
  {
    id: 'gal-2',
    title: 'Dirty Water Extraction Wastewater',
    category: 'Extraction Liquid',
    image: dirtyWaterBucketImg,
    tag: 'Real Results'
  },
  {
    id: 'gal-3',
    title: 'Hallway & Entrance Carpet Transformation',
    category: 'Hallway',
    image: hallwayCarpetImg,
    tag: 'Before / After'
  },
  {
    id: 'gal-4',
    title: 'Orange Velvet Armchair Deep Clean',
    category: 'Upholstery',
    image: orangeArmchairImg,
    tag: 'Armchair'
  },
  {
    id: 'gal-5',
    title: 'Deep Carpet Hot Water Extraction',
    category: 'Living Room',
    image: heroUpholsteryImg,
    tag: 'Hot Water Rinse'
  },
  {
    id: 'gal-6',
    title: 'Designer Chair Fabric Restoration',
    category: 'Upholstery',
    image: restoredMcmChairImg,
    tag: 'Restoration'
  },
  {
    id: 'gal-7',
    title: 'Upholstery Fabric Care',
    category: 'Specialist',
    image: fabricSwatchesImg,
    tag: 'Care'
  },
  {
    id: 'gal-8',
    title: 'Protective Fabric Shield Application',
    category: 'Protection',
    image: fabricSwatchesImg,
    tag: 'Protection'
  }
];

export const LONDON_LOCATIONS = [
  'Wood Street, London E17',
  'Walthamstow E17',
  'Leyton & Leytonstone E10/E11',
  'Hackney & Homerton E5/E9',
  'Islington & Highbury N1',
  'Stratford & Forest Gate E15/E7',
  'Tottenham & Green Lanes N15',
  'Chingford & Highams Park E4',
  'City of London & Docklands',
  'Greenwich & Blackheath SE10'
];

export const BANBURY_LOCATIONS = LONDON_LOCATIONS;
