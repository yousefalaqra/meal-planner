/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NutritionInformation, NutritionInformation$ } from "./nutritioninformation";
import { z } from "zod";

export type FoodItem = {
    name?: string | undefined;
    /**
     * The serving size or quantity of the food item
     */
    quantity?: string | undefined;
    nutritionInformation?: NutritionInformation | undefined;
};

/** @internal */
export namespace FoodItem$ {
    export type Inbound = {
        name?: string | undefined;
        quantity?: string | undefined;
        nutritionInformation?: NutritionInformation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<FoodItem, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            quantity: z.string().optional(),
            nutritionInformation: NutritionInformation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.nutritionInformation === undefined
                    ? null
                    : { nutritionInformation: v.nutritionInformation }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        quantity?: string | undefined;
        nutritionInformation?: NutritionInformation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FoodItem> = z
        .object({
            name: z.string().optional(),
            quantity: z.string().optional(),
            nutritionInformation: NutritionInformation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.nutritionInformation === undefined
                    ? null
                    : { nutritionInformation: v.nutritionInformation }),
            };
        });
}
