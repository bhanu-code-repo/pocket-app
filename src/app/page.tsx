import BarChart from "@/components/bar-chart";
import Card, { CardProps } from "@/components/card";
import CardContent from "@/components/card-content";
import PageTitle from "@/components/page-title";
import { Activity, CreditCard, PoundSterlingIcon, User2 } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    icon: PoundSterlingIcon,
    amount: "£12,345",
    description: "+12% from last month",
  },
  {
    label: "Total Sales",
    icon: CreditCard,
    amount: "£56,789",
    description: "+120.1% from last month",
  },
  {
    label: "Total Customers",
    icon: User2,
    amount: "4780",
    description: "+15% from last month",
  },
  {
    label: "Active Customers",
    icon: Activity,
    amount: "+560",
    description: "+204% since last hour",
  },
];

const uesrSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all xl:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart data={[]} />
        </CardContent>
      </section>
    </div>
  );
}
