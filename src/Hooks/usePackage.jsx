import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://tourist-server-theta.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);
  return [packages, loading];
};

export default usePackage;
