
const webSocket = require( 'ws' );
const port = 8080
const server = new webSocket.Server( { port }, () =>
{
  console.log( `Server is Running on port:${ port }` );

} );

server.on( 'connection', ( socket: any ) =>
{
  console.log( 'Client connected' );

  // دریافت پیام از کلاینت
  socket.on( 'message', ( message: any ) =>
  {
    console.log( `Received message => ${ message }` );

    // ارسال پیام به تمام کلاینت‌های متصل به سرور
    server.clients.forEach( ( client: any ) =>
    {
      if ( client.readyState === webSocket.OPEN )
      {
        client.send( `Notification: Hello From Server` );
      }
    } );
  } );

  // رخداد برای قطع شدن ارتباط کلاینت با سرور
  socket.on( 'close', () =>
  {
    console.log( 'Client disconnected' );
  } );
} );