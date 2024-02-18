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

import { Stage, Reward, StageGoals } from "database";
import { StageWithGoals } from "../..";

interface InfoTabsProps {
  stages: StageWithGoals[];
  rewards: Reward[];
}

const InfoTabs: FC<InfoTabsProps> = ({ stages, rewards }) => {
  return (
    <Tabs className="flex flex-col gap-5 w-full" defaultValue="stages">
      <TabsList>
        <TabsTrigger value="stages">Stages</TabsTrigger>
        <TabsTrigger disabled={rewards?.length === 0} value="rewards">
          Rewards
        </TabsTrigger>
      </TabsList>

      <TabsContent value="stages">
        <Accordion type="multiple">
          {stages.map((value) => {
            return (
              <AccordionItem value={value.id} key={value.id}>
                <AccordionTrigger>
                  <span>Stage {value.title}</span>
                  {formatCurrency(value.amount)}
                </AccordionTrigger>
                <AccordionContent className="p-4 ">
                  <p>{value.description}</p>

                  <ul className="list-disc mt-2">
                    {value.stage_goals.map((goal: StageGoals) => {
                      return (
                        <li key={goal.id} className="flex items-center gap-2">
                          - {goal.title}
                        </li>
                      );
                    })}
                  </ul>
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
              <AccordionItem value={value.id} key={value.id}>
                <AccordionTrigger>
                  <span>Reward {value.title}</span> for &nbsp;
                  {formatCurrency(value.amount)}
                </AccordionTrigger>
                <AccordionContent className="p-4 ">
                  <p>{value.description}</p>
                  <img
                    className="w-[200px] mt-5 mx-auto"
                    src={value.image}
                    alt="product"
                  />
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
