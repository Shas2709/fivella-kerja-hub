
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  return (
    <Card className="bg-[#FFE5B4] card-hover border-none">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
