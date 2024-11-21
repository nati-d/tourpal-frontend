import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PlanBox from "./PlanBox";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Activity, Calendar, CloudSun, MapPin, Moon, Package, Sparkles, Sun, Utensils } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

type ActivityDetails = {
  Time: "Morning" | "Afternoon" | "Evening";
  Place: string;
  Description: string;
};

type DayPlan = {
  [day: string]: ActivityDetails[]; // Example: "Day 1": [{ Time, Place, Description }, ...]
};

type Plans = {
  DaysPlan: DayPlan[]; // Array of objects, each representing a day's plan
  TopPlacesToVisit: string[];
  TopRestaurantsToTry: string[];
  TopActivitiesToDo: string[];
  PackingChecklist: string[];
};

type PlanDialogProps = {
  open: boolean;
  handleCloseModal: () => void;
  plans: Plans;
};

const PlanResultDialog = ({ open, handleCloseModal, plans }: PlanDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-full w-full h-[90vh] bg-white dark:bg-gray-800 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Your Plan</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300 flex gap-2 items-center">
            Powered By Tourpal AI <Sparkles size={14} />
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col gap-6 mt-4 overflow-y-auto h-[90vh]">
            {/* Days Plan */}
            {plans?.DaysPlan && (
              <Card className="flex flex-col gap-4">
                <CardHeader className="text-xl font-bold">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={18} />
                    Daily Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plans.DaysPlan.map((day: DayPlan, index: number) => {
                    const dayKey = Object.keys(day)[0]; // Extracting "Day 1", "Day 2", etc.
                    const activities = day[dayKey]; // Array of activities for the day

                    return (
                      <div
                        key={index}
                        className="border rounded-lg p-4 shadow-sm bg-gray-50 dark:bg-gray-700"
                      >
                        <h1 className="font-semibold text-[24px] mb-2">{dayKey}</h1>
                        <ul className="space-y-4">
                          {activities.map((activity: ActivityDetails, activityIndex: number) => (
                            <li key={activityIndex}>
                              <Card className="w-full shadow-md border rounded-lg bg-gray-50 dark:bg-gray-800">
                                <CardHeader className="flex flex-row items-center gap-2">
                                  {activity.Time === "Morning" && (
                                    <Sun className="text-yellow-500 w-5 h-5" />
                                  )}
                                  {activity.Time === "Afternoon" && (
                                    <CloudSun className="text-orange-500 w-5 h-5" />
                                  )}
                                  {activity.Time === "Evening" && (
                                    <Moon className="text-purple-500 w-5 h-5" />
                                  )}
                                  <CardTitle className="text-xl font-semibold text-gray-800">
                                    {activity.Time}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-2 text-[18px]">
                                  <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                                    {activity.Place}
                                  </span>
                                  <span className="text-base text-gray-600 dark:text-gray-400">
                                    {activity.Description}
                                  </span>
                                </CardContent>
                              </Card>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}

            {/* Top Places to Visit */}
            {plans?.TopPlacesToVisit && (
              <PlanBox
                plans={plans.TopPlacesToVisit}
                title={
                  <span className="flex items-center gap-2">
                    <MapPin className="w-7 h-7 text-blue-500" /> Top Places to Visit
                  </span>
                }
              />
            )}

            {/* Top Restaurants to Try */}
            {plans?.TopRestaurantsToTry && (
              <PlanBox
                plans={plans.TopRestaurantsToTry}
                title={
                  <span className="flex items-center gap-2">
                    <Utensils className="w-7 h-7 text-red-500" /> Top Restaurants to Try
                  </span>
                }
              />
            )}

            {/* Top Activities to Do */}
            {plans?.TopActivitiesToDo && (
              <PlanBox
                plans={plans.TopActivitiesToDo}
                title={
                  <span className="flex items-center gap-2">
                    <Activity className="w-7 h-7 text-green-500" /> Top Activities to Do
                  </span>
                }
              />
            )}

            {/* Packing Checklist */}
            {plans?.PackingChecklist && (
              <PlanBox
                plans={plans.PackingChecklist}
                title={
                  <span className="flex items-center gap-2">
                    <Package className="w-7 h-7 text-yellow-500" /> Packing Checklist
                  </span>
                }
              />
            )}
          </div>
          <div style={{ height: "100%", width: "100%" }} className="border bg-red-500 py-20">
            <DynamicMap center={[37.7749, -122.4194]} zoom={10} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanResultDialog;
