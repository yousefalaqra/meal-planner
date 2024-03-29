/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import { DailyMealPlan, DailyMealPlan$ } from "./dailymealplan";
import { NutritionAnalysis, NutritionAnalysis$ } from "./nutritionanalysis";
import { z } from "zod";

export type GeneratedMealPlan = {
    /**
     * The start date of the generated week
     */
    weekStartDate?: RFCDate | undefined;
    days?: Array<DailyMealPlan> | undefined;
};

export type MealPlanResponse = {
    generatedMealPlan?: GeneratedMealPlan | undefined;
    nutritionAnalysis?: NutritionAnalysis | undefined;
};

/** @internal */
export namespace GeneratedMealPlan$ {
    export type Inbound = {
        weekStartDate?: string | undefined;
        days?: Array<DailyMealPlan$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GeneratedMealPlan, z.ZodTypeDef, Inbound> = z
        .object({
            weekStartDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            days: z.array(DailyMealPlan$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.weekStartDate === undefined ? null : { weekStartDate: v.weekStartDate }),
                ...(v.days === undefined ? null : { days: v.days }),
            };
        });

    export type Outbound = {
        weekStartDate?: string | undefined;
        days?: Array<DailyMealPlan$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GeneratedMealPlan> = z
        .object({
            weekStartDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            days: z.array(DailyMealPlan$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.weekStartDate === undefined ? null : { weekStartDate: v.weekStartDate }),
                ...(v.days === undefined ? null : { days: v.days }),
            };
        });
}

/** @internal */
export namespace MealPlanResponse$ {
    export type Inbound = {
        generatedMealPlan?: GeneratedMealPlan$.Inbound | undefined;
        nutritionAnalysis?: NutritionAnalysis$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<MealPlanResponse, z.ZodTypeDef, Inbound> = z
        .object({
            generatedMealPlan: z.lazy(() => GeneratedMealPlan$.inboundSchema).optional(),
            nutritionAnalysis: NutritionAnalysis$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.generatedMealPlan === undefined
                    ? null
                    : { generatedMealPlan: v.generatedMealPlan }),
                ...(v.nutritionAnalysis === undefined
                    ? null
                    : { nutritionAnalysis: v.nutritionAnalysis }),
            };
        });

    export type Outbound = {
        generatedMealPlan?: GeneratedMealPlan$.Outbound | undefined;
        nutritionAnalysis?: NutritionAnalysis$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MealPlanResponse> = z
        .object({
            generatedMealPlan: z.lazy(() => GeneratedMealPlan$.outboundSchema).optional(),
            nutritionAnalysis: NutritionAnalysis$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.generatedMealPlan === undefined
                    ? null
                    : { generatedMealPlan: v.generatedMealPlan }),
                ...(v.nutritionAnalysis === undefined
                    ? null
                    : { nutritionAnalysis: v.nutritionAnalysis }),
            };
        });
}
