export interface FurnitureType {
  id: string;
  name: string;
  category: 'living' | 'dining' | 'antique' | 'commercial' | 'outdoor';
  baseLaborHours: number;
  baseCost: number;
  typicalFabricYards: number;
  iconName: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceModifier: number;
  features: string[];
  recommendedFor: string;
}

export interface FabricMaterial {
  id: string;
  name: string;
  type: 'wool' | 'velvet' | 'linen' | 'boucle' | 'performance' | 'vintage';
  colorName: string;
  hexColor: string;
  textureImage?: string;
  tier: 'Standard' | 'Premium' | 'Luxury Artisanal';
  pricePerYard: number;
  martindaleRubs: number; // Durability metric
  stainResistant: boolean;
  petFriendly: boolean;
  description: string;
  origin: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  era: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  fabricUsed: string;
  hoursInvested: number;
  techniquesUsed: string[];
  clientReview?: {
    author: string;
    location: string;
    rating: number;
    text: string;
  };
}

export interface QuoteEstimate {
  furnitureTypeId: string;
  furnitureTypeName: string;
  servicePackageId: string;
  servicePackageName: string;
  fabricId: string;
  fabricName: string;
  estimatedYards: number;
  quantity: number;
  addons: string[];
  estimatedTotalMin: number;
  estimatedTotalMax: number;
  laborCost: number;
  materialCost: number;
  estimatedTimelineDays: number;
}

export interface AiConsultationRequest {
  furnitureCategory: string;
  approxAge: string;
  issueDescription: string;
  desiredOutcome: string;
  hasPetsOrKids: boolean;
}

export interface AiConsultationResponse {
  structuralAnalysis: string;
  recommendedServices: string[];
  materialRecommendations: string[];
  estimatedDifficulty: 'Moderate' | 'High Precision' | 'Master Restoration';
  estimatedCraftHours: string;
  longevityExpectancy: string;
  expertTips: string[];
}

export interface BookingDetails {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon';
  pickupService: boolean;
  itemDescription: string;
  notes?: string;
  selectedQuote?: QuoteEstimate;
}
