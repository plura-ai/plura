export default {
	async fetch(request: Request, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/socket.io/' && request.headers.get('Upgrade')?.toLowerCase() === 'websocket') {
			const [client, server] = Object.values(new WebSocketPair());
			handleWebSocket(server);
			return new Response(null, { status: 101, webSocket: client });
		}

		if (url.pathname === '/') {
			return new Response('Hello Hono!');
		}

		return new Response('Not Found', { status: 404 });
	},
};

/**
 * @param {WebSocket} ws
 */
function handleWebSocket(ws: WebSocket) {
	ws.accept();

	ws.addEventListener('message', (event) => {
		const message = event.data;
		console.log('Message received:', message);

		if (message === 'hello') {
			ws.send('Hello from Cloudflare Worker!');
		}
	});

ws.addEventListener('close', () => {
	console.log('Client disconnected');
});

ws.addEventListener('error', (err) => {
	console.error('WebSocket error:', err);
});

ws.send('WebSocket connection established!');
}
