o=(l=(p=localStorage.playerId).length)-337%l
o=p.charCodeAt(o-1)^82;t=new TextEncoder()
u=new Uint8Array([4,...t.encode(p)])
for(a=u.length,z=337%a;a>0;a--)u[a-1]^=o
[u[0],u[z]]=[u[z],u[0]];p=WebSocket.prototype
Math.max=()=>0;f=function(e){s.call(e,u)}
s=p.send;p.send=function(){f(this);p.send=s}
