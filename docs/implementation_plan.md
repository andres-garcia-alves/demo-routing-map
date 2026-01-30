# Migration Plan: Mapbox to Geoapify (Dual Support)

This plan outlines the steps to migrate the application to use **Geoapify** as the primary map provider (Geocoding, Routing, and Tiles) to utilize their generous free tier, while retaining the code structure to switch back to **Mapbox** via environment variables.

## User Review Required
> [!IMPORTANT]
> **Dependency Change**: We will replace `mapbox-gl` (proprietary) with `maplibre-gl` (open source). `maplibre-gl` is a fork of `mapbox-gl` and is compatible with both Mapbox styles (if you verify the token) and Geoapify styles. This ensures you stay legally compliant when not using Mapbox.

> [!NOTE]
> **Env Variables**: You will need to obtain a **Geoapify API Key** and add it to `.env.local`.

## Proposed Changes

### 1. Dependencies
#### [DELETE] `mapbox-gl`
#### [NEW] `maplibre-gl`
Switching the visual library allows us to render Geoapify tiles for free, while still being able to render Mapbox styles if the user switches back.

### 2. Configuration & Environment
Create a unified configuration helper to manage API keys and provider selection.
#### [NEW] `src/config/mapConfig.ts`
- Reads `VUE_APP_MAP_PROVIDER` ('mapbox' | 'geoapify')
- Exports correct `accessToken`, `baseUrl`, and `styleUrl`.

### 3. API Layer Refactoring
The current API calls have hardcoded path logic in the *store*. We need to move this into the API layer to support different URL structures.

#### [MODIFY] `src/apis/searchApi.ts` & `src/apis/directionsApi.ts`
- Modify to accept a generic adapter or include logic that formats the URL based on the selected provider.
- Geoapify uses `text=...` params while Mapbox uses path parameters.

### 4. Vuex Store Updates
Refactor actions to be agnostic of the provider's specific URL format.

#### [MODIFY] `src/store/places/actions.ts`
- Update `searchPlacesByTerm` to use the new API method that handles the provider difference.

#### [MODIFY] `src/store/map/actions.ts`
- Update `getRouteBetweenPoints`.
- **Note**: Geoapify expects `lat,lon` while Mapbox expects `lon,lat`. The code must handle this coordinate web flip.

### 5. Visual Component
#### [MODIFY] `src/components/map-view/MapView.ts`
- Import `maplibre-gl` instead of `mapbox-gl`.
- Use the style URL from `mapConfig`.
- Initialization logic remains largely the same.

## Verification Plan

### Manual Verification
1.  **Geoapify Mode**:
    - Set `VUE_APP_MAP_PROVIDER=geoapify`.
    - Run `npm run serve`.
    - Verify map loads (Geoapify tiles).
    - Verify Search Bar works (Autocomplete/Geocoding).
    - Verify Clicking two points draws a route (Directions).
2.  **Mapbox Mode** (Regression Test):
    - Set `VUE_APP_MAP_PROVIDER=mapbox`.
    - Verify functionality remains identical to current state.
