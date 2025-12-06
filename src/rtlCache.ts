// src/rtlCache.ts
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

// Cache برای حالت LTR (پیش‌فرض)
export const ltrCache = createCache({
  key: "mui",
});

// Cache برای حالت RTL
export const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
