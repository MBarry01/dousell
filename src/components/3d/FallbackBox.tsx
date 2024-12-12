import React from 'react';
import { Box } from '@react-three/drei';

export default function FallbackBox() {
  return (
    <Box args={[1, 1, 1]}>
      <meshStandardMaterial color="#4299e1" />
    </Box>
  );
}