'use client'

import dynamic from 'next/dynamic'
import { Stage as KonvaStage, Layer as KonvaLayer, Image as KonvaImage, Text as KonvaText, Group as KonvaGroup } from 'react-konva'

type KonvaComponents = {
  Stage: typeof KonvaStage;
  Layer: typeof KonvaLayer;
  Image: typeof KonvaImage;
  Text: typeof KonvaText;
  Group: typeof KonvaGroup;
}

const KonvaWrapper = ({ children }: { 
  children: (components: KonvaComponents) => React.ReactNode 
}) => {
  const components = {
    Stage: KonvaStage,
    Layer: KonvaLayer,
    Image: KonvaImage,
    Text: KonvaText,
    Group: KonvaGroup
  }

  return children(components)
}

// Export a dynamic version of the wrapper
export default dynamic(() => Promise.resolve(KonvaWrapper), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />
}) 