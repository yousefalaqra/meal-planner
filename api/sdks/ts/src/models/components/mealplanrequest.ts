/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClientProfile, ClientProfile$ } from "./clientprofile";
import { z } from "zod";

export type MacronutrientRatios = {
    carbohydrates?: number | undefined;
    protein?: number | undefined;
    fat?: number | undefined;
};

export type MealFrequency = {
    mealsPerDay?: number | undefined;
    snacksPerDay?: number | undefined;
};

export type FoodPreferences = {
    preferredProteinSources?: Array<string> | undefined;
    foodsToAvoid?: Array<string> | undefined;
};

export type MealPlanRequest = {
    clientProfile?: ClientProfile | undefined;
    caloricGoal?: number | undefined;
    macronutrientRatios?: MacronutrientRatios | undefined;
    mealFrequency?: MealFrequency | undefined;
    foodPreferences?: FoodPreferences | undefined;
};

/** @internal */
export namespace MacronutrientRatios$ {
    export type Inbound = {
        carbohydrates?: number | undefined;
        protein?: number | undefined;
        fat?: number | undefined;
    };

    export const inboundSchema: z.ZodType<MacronutrientRatios, z.ZodTypeDef, Inbound> = z
        .object({
            carbohydrates: z.number().optional(),
            protein: z.number().optional(),
            fat: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carbohydrates === undefined ? null : { carbohydrates: v.carbohydrates }),
                ...(v.protein === undefined ? null : { protein: v.protein }),
                ...(v.fat === undefined ? null : { fat: v.fat }),
            };
        });

    export type Outbound = {
        carbohydrates?: number | undefined;
        protein?: number | undefined;
        fat?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MacronutrientRatios> = z
        .object({
            carbohydrates: z.number().optional(),
            protein: z.number().optional(),
            fat: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carbohydrates === undefined ? null : { carbohydrates: v.carbohydrates }),
                ...(v.protein === undefined ? null : { protein: v.protein }),
                ...(v.fat === undefined ? null : { fat: v.fat }),
            };
        });
}

/** @internal */
export namespace MealFrequency$ {
    export type Inbound = {
        mealsPerDay?: number | undefined;
        snacksPerDay?: number | undefined;
    };

    export const inboundSchema: z.ZodType<MealFrequency, z.ZodTypeDef, Inbound> = z
        .object({
            mealsPerDay: z.number().int().optional(),
            snacksPerDay: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.mealsPerDay === undefined ? null : { mealsPerDay: v.mealsPerDay }),
                ...(v.snacksPerDay === undefined ? null : { snacksPerDay: v.snacksPerDay }),
            };
        });

    export type Outbound = {
        mealsPerDay?: number | undefined;
        snacksPerDay?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MealFrequency> = z
        .object({
            mealsPerDay: z.number().int().optional(),
            snacksPerDay: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.mealsPerDay === undefined ? null : { mealsPerDay: v.mealsPerDay }),
                ...(v.snacksPerDay === undefined ? null : { snacksPerDay: v.snacksPerDay }),
            };
        });
}

/** @internal */
export namespace FoodPreferences$ {
    export type Inbound = {
        preferredProteinSources?: Array<string> | undefined;
        foodsToAvoid?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<FoodPreferences, z.ZodTypeDef, Inbound> = z
        .object({
            preferredProteinSources: z.array(z.string()).optional(),
            foodsToAvoid: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.preferredProteinSources === undefined
                    ? null
                    : { preferredProteinSources: v.preferredProteinSources }),
                ...(v.foodsToAvoid === undefined ? null : { foodsToAvoid: v.foodsToAvoid }),
            };
        });

    export type Outbound = {
        preferredProteinSources?: Array<string> | undefined;
        foodsToAvoid?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FoodPreferences> = z
        .object({
            preferredProteinSources: z.array(z.string()).optional(),
            foodsToAvoid: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.preferredProteinSources === undefined
                    ? null
                    : { preferredProteinSources: v.preferredProteinSources }),
                ...(v.foodsToAvoid === undefined ? null : { foodsToAvoid: v.foodsToAvoid }),
            };
        });
}

/** @internal */
export namespace MealPlanRequest$ {
    export type Inbound = {
        clientProfile?: ClientProfile$.Inbound | undefined;
        caloricGoal?: number | undefined;
        macronutrientRatios?: MacronutrientRatios$.Inbound | undefined;
        mealFrequency?: MealFrequency$.Inbound | undefined;
        foodPreferences?: FoodPreferences$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<MealPlanRequest, z.ZodTypeDef, Inbound> = z
        .object({
            clientProfile: ClientProfile$.inboundSchema.optional(),
            caloricGoal: z.number().int().optional(),
            macronutrientRatios: z.lazy(() => MacronutrientRatios$.inboundSchema).optional(),
            mealFrequency: z.lazy(() => MealFrequency$.inboundSchema).optional(),
            foodPreferences: z.lazy(() => FoodPreferences$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientProfile === undefined ? null : { clientProfile: v.clientProfile }),
                ...(v.caloricGoal === undefined ? null : { caloricGoal: v.caloricGoal }),
                ...(v.macronutrientRatios === undefined
                    ? null
                    : { macronutrientRatios: v.macronutrientRatios }),
                ...(v.mealFrequency === undefined ? null : { mealFrequency: v.mealFrequency }),
                ...(v.foodPreferences === undefined
                    ? null
                    : { foodPreferences: v.foodPreferences }),
            };
        });

    export type Outbound = {
        clientProfile?: ClientProfile$.Outbound | undefined;
        caloricGoal?: number | undefined;
        macronutrientRatios?: MacronutrientRatios$.Outbound | undefined;
        mealFrequency?: MealFrequency$.Outbound | undefined;
        foodPreferences?: FoodPreferences$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MealPlanRequest> = z
        .object({
            clientProfile: ClientProfile$.outboundSchema.optional(),
            caloricGoal: z.number().int().optional(),
            macronutrientRatios: z.lazy(() => MacronutrientRatios$.outboundSchema).optional(),
            mealFrequency: z.lazy(() => MealFrequency$.outboundSchema).optional(),
            foodPreferences: z.lazy(() => FoodPreferences$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientProfile === undefined ? null : { clientProfile: v.clientProfile }),
                ...(v.caloricGoal === undefined ? null : { caloricGoal: v.caloricGoal }),
                ...(v.macronutrientRatios === undefined
                    ? null
                    : { macronutrientRatios: v.macronutrientRatios }),
                ...(v.mealFrequency === undefined ? null : { mealFrequency: v.mealFrequency }),
                ...(v.foodPreferences === undefined
                    ? null
                    : { foodPreferences: v.foodPreferences }),
            };
        });
}
