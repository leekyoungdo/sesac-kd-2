function call (name){
   return new Promise((resolve)=>{
    setTimeout(function(){
        console.log(name);
        resolve(name);
    }, 1000);
   }) 
}

function back (){
    return new Promise ((resolve)=>{
    setTimeout(function(){
        console.log("back");
        resolve("back");
    }, 1000)
    })
}

function hell (){
    return new Promise ((resolve)=>{
    setTimeout(function(){
        resolve("새싹 용산 캠퍼스");
    }, 1000)
    }) 
}

async function exec (){
   const x = await call("kim");
   console.log(x, "반가워")
   const y = await back();
   console.log(y, "을 실행했구나") 
   const z = await hell()
   console.log("여기는",z)
}
exec();

// call("kim").then((result)=>{
//     console.log(result,"반가워")
//     return back()
// })

// .then((result)=>{
//     console.log(result,"을 실행했구나")
//     return hell()
// })
// .then((result)=>{
//     console.log("여기는", result)
// })


// async function red(){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             let result = document.body.style.backgroundColor ="red"
//             resolve(result)
//         },1000)
//     })
    
// }

// async function orange(){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             let result = document.body.style.backgroundColor ="orange"
//             resolve(result)
//         },1000)
//     })
    
// }

// async function yellow(){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             let result = document.body.style.backgroundColor ="yellow"
//             resolve(result)
//         },1000)
//     })
    
// }
// async function green(){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             let result = document.body.style.backgroundColor ="green"
//             resolve(result)
//         },1000)
//     })
    
// }

// async function blue(){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             let result = document.body.style.backgroundColor ="blue"
//             resolve(result)
//         },1000)
//     })
    
// }

// async function changecolor(){
//     await red()
//     await orange()
//     await yellow()
//     await green()
//     await blue()
    
// }


function color(name){
    return new Promise((resolve)=>{
        setTimeout(function(){
            document.body.style.backgroundColor = name
            resolve()
        },1000)
    })
}
async function changecolor(){
    await color("red")
    await color("orange")
    await color("yellow")
    await color("green")
    await color("blue")
    
}