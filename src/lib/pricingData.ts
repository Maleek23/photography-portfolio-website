export interface PricingPackage {
  name: string;
  price: number;
  duration: string;
  features: string[];
  accent: string;
  calendlyUrl: string;
  popular?: boolean;
}

export interface PricingService {
  id: string;
  label: string;
  packages: PricingPackage[];
}

export const pricingData: Record<string, PricingService> = {
  grad: {
    id: "grad",
    label: "Graduation Session",
    packages: [
      {
        name: "Bronze",
        price: 220,
        duration: "1 Hour",
        features: [
          "1 Outfit & 2 Locations",
          "20 Edited Images",
        ],
        accent: "#CD7F32",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Silver",
        price: 310,
        duration: "1.5 Hours",
        features: [
          "2 Outfits & 3 Locations",
          "40 Edited Images",
        ],
        accent: "#C0C0C0",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Gold",
        price: 410,
        duration: "2 Hours",
        features: [
          "3 Outfits & 4+ Locations",
          "60 Edited Images",
          "Priority Editing (3-Day Turnaround)",
        ],
        accent: "#FFD700",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
    ],
  },
  solo: {
    id: "solo",
    label: "Solo Session",
    packages: [
      {
        name: "Starter",
        price: 180,
        duration: "45 Min",
        features: [
          "1 Outfit & 1 Location",
          "15 Edited Images",
        ],
        accent: "#3B82F6",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Plus",
        price: 280,
        duration: "1.5 Hours",
        features: [
          "2 Outfits & 2 Locations",
          "30 Edited Images",
        ],
        accent: "#8B5CF6",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Pro",
        price: 380,
        duration: "2+ Hours",
        features: [
          "3+ Outfits & 3+ Locations",
          "50 Edited Images",
          "Priority Editing (3-Day Turnaround)",
        ],
        accent: "#EC4899",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
    ],
  },
  events: {
    id: "events",
    label: "Events/Concerts Session",
    packages: [
      {
        name: "Basic",
        price: 150,
        duration: "1 Hour",
        features: [
          "Up to 1 Hour Coverage",
          "30 Edited Images",
          "48-Hour Turnaround",
        ],
        accent: "#10B981",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Standard",
        price: 250,
        duration: "2 Hours",
        features: [
          "Up to 2 Hours Coverage",
          "60 Edited Images",
          "48-Hour Turnaround",
        ],
        accent: "#F59E0B",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Premium",
        price: 400,
        duration: "4+ Hours",
        features: [
          "Up to 4+ Hours Coverage",
          "100+ Edited Images",
          "24-Hour Turnaround",
          "Second Photographer Option",
        ],
        accent: "#EF4444",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
    ],
  },
};
