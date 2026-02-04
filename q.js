let id = localStorage.playerId
let xor = id.charCodeAt(id.length - 337 % id.length - 1) ^ 82
let uint8 = new Uint8Array([4, ...new TextEncoder().encode("Hello!")])

for(let i = 0; i < uint8.length; i++) uint8[i] ^= xor

const swipeIndex = 337 % uint8.length
const firstElement = uint8[0]

uint8[0] = uint8[swipeIndex]
uint8[swipeIndex] = firstElement

console.log(uint8, xor, id)

let proto = WebSocket.prototype

Math.max = () => 0 // for not see chat msg

let send = proto.send
proto.send = function(){
  send.call(this, uint8)
  proto.send = send
}



/*o=(l=(p=localStorage.playerId).length)-337%l
o=p.charCodeAt(o-1)^82;t=new TextEncoder()
u=new Uint8Array([4,...t.encode(p)])
for(a=u.length,z=337%a;a>0;a--)u[a-1]^=o
[u[0],u[z]]=[u[z],u[0]];p=WebSocket.prototype
Math.max=()=>0;f=function(e){s.call(e,u)}
s=p.send;p.send=function(){f(this);p.send=s}
console.log("a")*/
