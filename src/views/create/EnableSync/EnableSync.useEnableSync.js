import { useNetworkState} from "react-use"
 
export const useEnableSync = () => {
 const {online } = useNetworkState();

  return {
  online
  }
};
export default useEnableSync;