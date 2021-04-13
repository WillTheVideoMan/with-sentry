import { init } from "../utils/sentry";

import * as Sentry from "@sentry/node";

init();

export default function App({ Component, pageProps, err }) {
  Sentry.captureMessage("Test Message for All Pages");
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return <Component {...pageProps} err={err} />;
}
