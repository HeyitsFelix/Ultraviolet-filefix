"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "https://cdn.jsdelivr.net/gh/HeyitsFelix/Ultraviolet-filefix@73c6dcabbfaadf31b687768c9e0f2b49a65a471a/sw.js";
/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  // Ultraviolet has a stock `sw.js` script.
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}
