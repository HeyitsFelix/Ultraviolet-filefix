/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.10/dist/uv.handler.js',
    client: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.10/dist/uv.client.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.10/dist/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/HeyitsFelix/Ultraviolet-filefix@32bdbb7d0d4190bf78943713a55a03d6e70b7995/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/HeyitsFelix/Ultraviolet-filefix@a1aad4065a320ca862f1d55d543ee05f9b82e19f/uv.sw.js',
};
