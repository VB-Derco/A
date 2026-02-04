let id = localStorage.playerId
let xor = id.charCodeAt(id.length - 337 % id.length - 1) ^ 82
let uint8 = new Uint8Array([4, ...new TextEncoder().encode("Hello!")])

for(let i = 0; i < unit8.length; i++) unit8[i] ^= xor
[ uint8[0], uint8[337%uint8.length] ] = [ uint8[337%uint8.length], uint8[0] ]

console.log(uint8, xor, id)




/*o=(l=(p=localStorage.playerId).length)-337%l
o=p.charCodeAt(o-1)^82;t=new TextEncoder()
u=new Uint8Array([4,...t.encode(p)])
for(a=u.length,z=337%a;a>0;a--)u[a-1]^=o
[u[0],u[z]]=[u[z],u[0]];p=WebSocket.prototype
Math.max=()=>0;f=function(e){s.call(e,u)}
s=p.send;p.send=function(){f(this);p.send=s}
console.log("a")*/
