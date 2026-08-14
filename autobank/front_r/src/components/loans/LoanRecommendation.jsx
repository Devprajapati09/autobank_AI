import AIRecommendation from "../ai/AIRecommendation.jsx";

export default function LoanRecommendation({ loan }) {
  return (
    <AIRecommendation
      text={`I'd go with ${loan.bank} at ${loan.rate}% — lowest total cost for your profile, with a processing fee of only ${loan.processingFee}.`}
    />
  );
}
