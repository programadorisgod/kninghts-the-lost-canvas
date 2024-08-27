import { useEffect, useState } from 'react';
import { getKninghts } from '../../lib/kninghts';
import { IKninghts } from '../../interface/kininghts.interface';

export const useGetKnights = () => {
  const [knights, setKnights] = useState<IKninghts[]>([]);

  useEffect(() => {
    const fetchKnights = () => {
      const data = getKninghts();
      setKnights(data);
    };

    fetchKnights();
  }, []);

  return knights;
};
