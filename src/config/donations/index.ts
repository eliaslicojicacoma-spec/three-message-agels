export type DonationMethod = {
  label: string;
  value: string;
  description?: string;
  active: boolean;
};

export type DonationsConfig = {
  title: string;
  message: string;
  pix: DonationMethod;
  paypal: DonationMethod;
};

export const donationsConfig: DonationsConfig = {
  title: "Apoie esta missão digital",
  message:
    "Cada contribuição ajuda a manter este projeto vivo, ampliar os recursos bíblicos e levar a mensagem a mais pessoas.",
  pix: {
    label: "Pix",
    value: "elias-licoji-cacoma-273@jim.com",
    description: "Contribuição rápida e direta.",
    active: true,
  },
  paypal: {
    label: "PayPal",
    value: "eliaslicojicacoma@gmail.com",
    description: "Apoio internacional e digital.",
    active: true,
  },
};
