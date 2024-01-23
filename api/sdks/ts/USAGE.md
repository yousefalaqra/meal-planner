<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";
import { ActivityLevel, Gender } from "openapi/models/components";

async function run() {
    const sdk = new SDK();

    const result = await sdk.postGenerateMealPlan({
        clientProfile: {
            allergiesRestrictions: ["string"],
        },
        macronutrientRatios: {},
        mealFrequency: {},
        foodPreferences: {
            preferredProteinSources: ["string"],
            foodsToAvoid: ["string"],
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->