import { useEffect } from "react";
import { useMapContext } from "../context/map/mapContext";

export const useEnlargedBounds = () => {
  const { bounds, enlargedBounds, storedZoom, position, dispatchMap } =
    useMapContext();

  // bounds change
  useEffect(() => {
    // when init (enlargedBounds empty and bounds already init)
    if (
      Object.keys(enlargedBounds).length === 0 &&
      Object.keys(bounds).length > 0
    ) {
      const { prep } = enlargeBoundsPrep();
      handleDispatchEnlargedBounds(prep);
      return;
    }

    // after init
    if (enlargeCondition()) {
      console.log("bounds is on one side bigger than enlarged bounds");
      const { prep } = enlargeBoundsPrep();
      handleDispatchEnlargedBounds(prep);
    }
  }, [bounds]);

  // zoom change
  useEffect(() => {
    // init
    if (storedZoom === null && position.z) {
      handleDispatchStoredZoom(position.z);
    }

    // after init, zoomed in enough to refetch
      if (storedZoom !== 0 && zoomCondition()) {
        console.log("zoomed in enough")
      const { prep } = enlargeBoundsPrep();
      handleDispatchEnlargedBounds(prep);
      handleDispatchStoredZoom(position.z);
    }
  }, [storedZoom, position.z]);

    const zoomCondition = () => {
        console.log("current zoom: ", position.z)
        console.log("storedZoom: ", storedZoom)
        console.log("enhancedZoom: ", storedZoom * 1.4);
        console.log("condition: ", position.z >= storedZoom * 1.4);
    if (position.z >= storedZoom * 1.1) {
      return true;
    }
    return false;
  };

  const enlargeCondition = () => {
    if (bounds.north >= enlargedBounds.north) {
      return true;
    }
    if (bounds.east >= enlargedBounds.east) {
      return true;
    }
    if (bounds.south <= enlargedBounds.south) {
      return true;
    }
    if (bounds.west <= enlargedBounds.west) {
      return true;
    }
    return false;
  };

  const enlargeBoundsPrep = () => {
    const { north, east, south, west } = bounds;
    const fullWidth = Math.abs(west - east);
    const fullHeight = Math.abs(north - south);
    const prep = {
      north: north + fullHeight,
      south: south - fullHeight,
      east: east + fullWidth,
      west: west - fullWidth,
    };
    return { prep };
  };

  const handleDispatchEnlargedBounds = (newEnlargedBounds) => {
    dispatchMap({
      type: "SET_ENLARGED_BOUNDS",
      payload: newEnlargedBounds,
    });
  };

  const handleDispatchStoredZoom = (newStoredZoom) => {
    dispatchMap({
      type: "SET_STORED_ZOOM",
      payload: newStoredZoom,
    });
  };
};
