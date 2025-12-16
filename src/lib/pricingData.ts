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
        duration: "2 Hours",
        features: [
          "2 Outfits & 2-3 Locations",
          "30 Edited Images",
          "15 sec cinematic clip",
        ],
        accent: "#C0C0C0",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
        popular: true,
      },
      {
        name: "Gold",
        price: 400,
        duration: "3 Hours",
        features: [
          "3-4 Outfits & 3 Locations",
          "35+ Edited Images",
          "30-45 sec cinematic clip",
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
        name: "Bronze",
        price: 185,
        duration: "30 Mins",
        features: [
          "1 Outfit & 1 Location",
          "20 Edited Images",
        ],
        accent: "#CD7F32",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Silver",
        price: 220,
        duration: "1 Hour",
        features: [
          "1-2 Outfits & Locations",
          "30 Edited Images",
        ],
        accent: "#C0C0C0",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Gold",
        price: 310,
        duration: "2 Hours",
        features: [
          "3 Outfits & Locations",
          "35+ Edited Images",
          "15 sec cinematic clip",
        ],
        accent: "#FFD700",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
        popular: true,
      },
      {
        name: "Platinum",
        price: 400,
        duration: "3 Hours",
        features: [
          "4 Outfits & Locations",
          "15-30 sec cinematic clip",
        ],
        accent: "#E5E4E2",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
    ],
  },
  events: {
    id: "events",
    label: "Events/Concerts",
    packages: [
      {
        name: "Hourly",
        price: 100,
        duration: "Per Hour",
        features: [
          "$100/hour rate",
          "All edited images included",
          "Candid & posed shots",
        ],
        accent: "#10B981",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
      {
        name: "Half Day",
        price: 350,
        duration: "4 Hours",
        features: [
          "Up to 4 hours coverage",
          "All edited images included",
          "Candid & posed shots",
        ],
        accent: "#F59E0B",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
        popular: true,
      },
      {
        name: "Full Day",
        price: 600,
        duration: "8+ Hours",
        features: [
          "Full event coverage",
          "All edited images included",
          "Candid & posed shots",
          "Priority delivery",
        ],
        accent: "#EF4444",
        calendlyUrl: "https://calendly.com/leekshotit/bookingsession",
      },
    ],
  },
};
