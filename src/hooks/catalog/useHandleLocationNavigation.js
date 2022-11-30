import { useNavigate } from 'react-router-dom';

export const useHandleLocationNavigation = () => {
  const navigate = useNavigate();

  const handleLocationNavigation = (offerId, location) => {
    const nextParams = new URLSearchParams({
      offerId,
      lat: location.lat,
      lng: location.lng,
      z: 14,
    });
    navigate(`/explore/map?${nextParams}`);
  }
  
  return { handleLocationNavigation };
}
