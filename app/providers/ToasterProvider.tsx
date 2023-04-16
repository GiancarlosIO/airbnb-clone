'use client';
import { Toaster } from "react-hot-toast";

type TToasterProviderProps = {}

const ToasterProvider: React.FC<TToasterProviderProps> = props => {
  return (
    <Toaster />
  )
}

export default ToasterProvider