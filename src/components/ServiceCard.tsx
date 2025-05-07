
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  location: string;
  providerName: string;
  providerImage?: string;
  color?: string;
}

const ServiceCard = ({
  title,
  description,
  category,
  price,
  rating,
  location,
  providerName,
  providerImage,
  color = "bg-fivella-light-purple"
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden card-hover border border-gray-100">
      <div className={`h-2 ${color}`} />
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="secondary" className="mb-2">{category}</Badge>
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-fivella-purple">{price}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={providerImage} />
            <AvatarFallback>{providerName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">{providerName}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-fivella-light-pink mr-1" />
            <span className="text-sm font-medium text-black">{rating}</span>
          </div>
          <Button size="sm" variant="ghost" className="p-0 h-8 w-8">
            <MessageSquare className="h-4 w-4 text-fivella-purple" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
