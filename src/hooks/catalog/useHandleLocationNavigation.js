import { useNavigate } from 'react-router-dom';

export const useHandleLocationNavigation = () => {
  const navigate = useNavigate();

  const handleLocationNavigation = (offerId, location) => {
    const nextParams = new URLSearchParams({
      offerId,
      lat: location.lat,
      lon: location.lon,
      z: 14,
    });
    navigate(`/explore/map?${nextParams}`);
  }
  
  return { handleLocationNavigation };
}
