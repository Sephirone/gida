declare module 'nprogress' {
  interface NProgressStatic {
    start(): void;
    done(): void;
    configure(options: Partial<NProgressOptions>): void;
  }

  interface NProgressOptions {
    minimum: number;
    template: string;
    easing: string;
    speed: number;
    trickle: boolean;
    trickleSpeed: number;
    showSpinner: boolean;
    parent: string;
  }

  const nprogress: NProgressStatic;
  export default nprogress;
}