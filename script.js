import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Car, Sparkles, ArrowRight, Zap, Users, Trophy } from "lucide-react";

interface LandingProps {
  onStartQuiz: () => void;
}

export function Landing({ onStartQuiz }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent max-w-4xl mx-auto">
              Discover Your Automotive Personality
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Are you a speed-loving sports car or a reliable family SUV? Take our fun personality quiz to discover which type of car matches your unique lifestyle and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
