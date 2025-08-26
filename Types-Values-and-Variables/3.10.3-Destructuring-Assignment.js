let [x, y] = [1, 2];
x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log(x, y);


{//convert [x,y] coordinates to [r,theta] polar coordinates
  function toPoler(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
  }

  //convert polar to cartesian coordinates
  function toCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
  }
  let [r, theta] = toPoler(1.0, 1.0);//r = Math.sqrt(2), theta = Math.PI/4
  let [x, y] = toCartesian(r, theta);
}

let o = { a: 1, b: 3 }
for (let [key, value] of Object.entries(o)) {
  console.log(`${key}:${value}`);
}

{
  let [x, y] = [1];
  console.log(x, y); //1, undefined
  [x,y] = [1,2,3];
  console.log(x, y); //1,2
  [, x, , y] = [1, 2, 3, 4];
  console.log(x, y); //2,4
}