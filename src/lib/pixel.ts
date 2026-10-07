type Fbq = (action: string, event: string, params?: Record<string, string>) => void;

// No-op until /pixel.js has a pixel ID and has loaded.
export function trackPixel(action: 'track' | 'trackCustom', event: string, params?: Record<string, string>) {
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (fbq) fbq(action, event, params);
}
