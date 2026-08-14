import AIRecommendation from "../ai/AIRecommendation.jsx";

export default function BudgetRecommendation({ overBudgetCategories }) {
  if (!overBudgetCategories.length) {
    return <AIRecommendation text="You're within budget across every category this month — nice work. I'll keep watching for the rest of the month." />;
  }
  return (
    <>
      {overBudgetCategories.map((c) => (
        <AIRecommendation
          key={c.id}
          text={`You're over budget on ${c.name} by ₹${c.spent - c.limit}. Consider trimming next week or shifting ₹${c.spent - c.limit} from a category you're under on.`}
        />
      ))}
    </>
  );
}
