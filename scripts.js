/*
fetch('https://api.github.com/users/abhick09').then(res => {
    return res.json();
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(`OH NO ERROR ${err}`);
})

*/

function breate(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 100) {
      reject("Too small");
    }
    setTimeout(() => resolve(`Done for ${amount}`), amount);
  });
}

function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.log(err);
    });
  };
}

async function go(name, last) {
  console.log(`What is UP? ${name}${last}`);
  console.log("Start");
  await breate(400);
  await breate(500);
  await breate(100);
  console.log("END");
}

const wrappedFunction = catchErrors(go);

wrappedFunction("Abhick", "Dahal");

async function Gitgo() {
  const pi = fetch("https://api.github.com/users/abhick09").then((res) => {
    return res.json();
  });
  const pq = fetch("https://api.github.com/users/wesbos").then((res) => {
    return res.json();
  });
  const res = await Promise.all([pi, pq]);
  console.log(res);
  const [abhick, wes] = res;
  console.log(abhick, wes);
}

Gitgo();




async function getData(names){
    console.log(names);
    const data = names.map(name => fetch(`https://api.github.com/users/${name}`).then(res => res.json()));
    const promise = await Promise.all(data)
    console.log(promise);
}

getData(["abhick09","wesbos"]);


/*
navigator.geolocation.getCurrentPosition(function(pos){
    console.log('working');
    console.log(pos);
},function(err){
    console.log('NOT WORKING');
    console.log((err))
}) */


function getCurrentPosition(...args) {
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(...args,resolve,reject);
    })
}

async function abk() {
    const pos = await getCurrentPosition();
    console.log(pos);
}

abk();