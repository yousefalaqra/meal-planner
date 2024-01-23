# SDK


## Overview

### Available Operations

* [postGenerateMealPlan](#postgeneratemealplan) - Generate a Weekly Meal Plan

## postGenerateMealPlan

This endpoint allows nutritionists to generate a personalized weekly meal plan.


### Example Usage

```typescript
import { SDK } from "openapi";
import { ActivityLevel, Gender } from "openapi/models/components";

async function run() {
  const sdk = new SDK();

  const result = await sdk.postGenerateMealPlan({
    clientProfile: {
      allergiesRestrictions: [
        "string",
      ],
    },
    macronutrientRatios: {},
    mealFrequency: {},
    foodPreferences: {
      preferredProteinSources: [
        "string",
      ],
      foodsToAvoid: [
        "string",
      ],
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.MealPlanRequest](../../models/components/mealplanrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostGenerateMealPlanResponse](../../models/operations/postgeneratemealplanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
