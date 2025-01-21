declare module "luxy.js" {
  const luxy: {
    init: (options?: {
      wrapper?: string;
      targets?: string;
      wrapperSpeed?: number;
    }) => void;
  };
  export default luxy;
}
