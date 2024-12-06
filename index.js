"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");
const connection = new BareMux.BareMuxConnection("/baremux/worker.js")

document.addEventListener("DOMContentLoaded", async (event) => {
	const urlParams = new URLSearchParams(window.location.search);
	const urlHex = urlParams.get('url');

	if (urlHex) {
		const url = urlHex.match(/.{1,2}/g).map(function(v){
			return String.fromCharCode(parseInt(v, 16));
		}).join('');

		console.log(url)

		let frame = document.getElementById("uv-frame");
		frame.style.display = "block";
		let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
		if (await connection.getTransport() !== "/epoxy/index.mjs") {
			await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
		}
		frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
	}
});

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	try {
		await registerSW();
	} catch (err) {
		error.textContent = "Failed to register service worker.";
		errorCode.textContent = err.toString();
		throw err;
	}

	const url = search(address.value, searchEngine.value);
	console.log(url)

	let frame = document.getElementById("uv-frame");
	frame.style.display = "block";
	let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
	if (await connection.getTransport() !== "/epoxy/index.mjs") {
		await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
	}
	frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
});