declare module "scrollreveal" {
  interface ScrollRevealObject {
    reveal: (selector: string, options?: ScrollRevealOptions) => void;
    sync: () => void;
    destroy: () => void;
  }

  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    rotate?: { x: number; y: number; z: number };
    opacity?: number;
    scale?: number;
    easing?: string;
    interval?: number;
    reset?: boolean;
    container?: string | HTMLElement;
    useDelay?: string;
    viewFactor?: number;
    viewOffset?: { top: number; right: number; bottom: number; left: number };
    beforeReveal?: (element: HTMLElement) => void;
    afterReveal?: (element: HTMLElement) => void;
    beforeReset?: (element: HTMLElement) => void;
    afterReset?: (element: HTMLElement) => void;
  }

  const ScrollReveal: (options?: ScrollRevealOptions) => ScrollRevealObject;
  export default ScrollReveal;
}
