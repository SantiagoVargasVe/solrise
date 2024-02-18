"use client";
import React, { FC } from "react";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { formatCurrency } from "@/lib/utils";

interface InfoTabsProps {
  stages: number[];
  rewards: number[];
}

const InfoTabs: FC<InfoTabsProps> = ({ stages, rewards }) => {
  return (
    <Tabs className="flex flex-col gap-5 w-full" defaultValue="stages">
      <TabsList>
        <TabsTrigger value="stages">Stages</TabsTrigger>
        <TabsTrigger value="rewards">Rewards</TabsTrigger>
      </TabsList>

      <TabsContent value="stages">
        <Accordion type="multiple">
          {stages.map((value) => {
            return (
              <AccordionItem value={value.toString()} key={value}>
                <AccordionTrigger>
                  <span>Stage {value}</span>
                  {formatCurrency(1000 * value)}
                </AccordionTrigger>
                <AccordionContent className="p-4 ">
                  <p>
                    This is the description for stage {value}. It is a very
                    important stage.
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </TabsContent>
      <TabsContent value="rewards">
        <Accordion type="multiple">
          {rewards.map((value) => {
            return (
              <AccordionItem value={value.toString()} key={value}>
                <AccordionTrigger>
                  <span>Reward {value}</span> for &nbsp;
                  {formatCurrency(1000 * value)}
                </AccordionTrigger>
                <AccordionContent className="p-4 ">
                  <p>
                    This is the description for reward {value}. It is a very
                    important reward.
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </TabsContent>
    </Tabs>
  );
};

export default InfoTabs;
