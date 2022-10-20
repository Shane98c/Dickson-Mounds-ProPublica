const mapExtentFeature = {
  type: "FeatureCollection",
  name: "ColonialMapExtent",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-93.196814, 43.413016],
            [-85.813618, 43.408764],
            [-85.812939, 36.109861],
            [-93.197215, 36.109673],
            [-93.196814, 43.413016],
          ],
        ],
      },
    },
  ],
};
