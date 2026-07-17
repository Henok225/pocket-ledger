import {
  Feature,
  FaqItem,
  HeroContent
} from "@/types/content";


export const hero: HeroContent = {
  title: "Take control of your money with Pocket Ledger",
  subtitle:
    "Track your spending, analyze your expenses, and understand your financial habits.",
  buttonText: "Get Started"
};


export const features: Feature[] = [

  {
    icon: "📊",
    title: "Smart Dashboard",
    description:
      "Visualize your spending with clear charts and insights."
  },

  {
    icon: "📂",
    title: "Statement Parser",
    description:
      "Upload bank statements and automatically organize transactions."
  },

  {
    icon: "🔒",
    title: "Secure Storage",
    description:
      "Your financial data is stored safely with modern technology."
  }

];


export const faqItems: FaqItem[] = [

  {
    question:
      "What is Pocket Ledger?",

    answer:
      "Pocket Ledger is a personal finance dashboard that helps you track and understand your spending."
  },


  {
    question:
      "Can I upload bank statements?",

    answer:
      "Yes. You can upload CSV or PDF statements and Pocket Ledger will organize them automatically."
  },


  {
    question:
      "Is my data secure?",

    answer:
      "Pocket Ledger uses secure backend services and database practices to protect your information."
  }

];