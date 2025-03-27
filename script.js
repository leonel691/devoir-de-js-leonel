// exercice 1.1
let body=document.getElementById("body")
let ul=document.getElementById("list")
let list_element1=document.getElementById("element1")
let list_element2=document.getElementById("element2")
let list_element3=document.getElementById("element3")
let tableau_element=[list_element1,list_element2,list_element3]
for(let i=0; i<tableau_element.length;i++){
    tableau_element[i].innerText=i+1
}
console.log(tableau_element[i].innerHTML)

// exercice 1.2
// let body=document.getElementById("body")
// for(let i=0; i<10;i++){
//     let p=document.createElement("p")
//     body.appendChild(p)
//     p.innerText=("paragraphe"+(i+1))
// }
// console.log(body.innerHTML)

// exercice 1.3
// let body=document.getElementById("body")
// let tableau=document.createElement("table")
// body.appendChild(tableau)
// let tablerow=document.createElement("tr")
// tableau.appendChild(tablerow)
// for(let j=0;j<3;j++){
//     let table
// for (let i=0;i<6;i++){
//     let tablecol=document.createElement("td")
//     tablerow.appendChild(tablecol)
// }
// }
// // let tablecol=document.createElement("td")
// // tablerow.appendChild(tablecol)

// console.log(body.innerHTML)

// exercice 1.5
// let body=document.getElementById("body")
// let ul=document.createElement("ul")
// body.appendChild(ul)
// let tableaulist=["pomme","banane","orange"]
// for (let i=0; i<tableaulist.length; i++){
//     let li=document.createElement("li")
//     ul.appendChild(li)
//     li.innerText=tableaulist[i]
// }
// console.log(body.innerHTML)


// // // // // // // // // // // // // // // // // // // // 

// // exercice 2.1
// let body=document.getElementById("body")
// let div=document.getElementsByClassName("paragraph")

// for (let i=0;i<div.length;i++){
//     let p=document.createElement("p")
//     div[i].appendChild(p)
// p.innerText="Enfant ajouté"
// }
// console.log(body.innerHTML)

// // exercice 2.2
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// while(ul.children.length>0){
//     ul.removeChild(ul.children[0])
// }

// // exercice 2.3
// let body=document.getElementById("body")
// let span=document.getElementById("span")
// let tableParent=[span.parentElement]
// for (let i=0;i<2;i++){
//     tableParent.push(tableParent[i].parentElement)
// }
// console.log(tableParent)

// // correction 2.3
// let body=document.getElementById("body")
// let span=document.getElementById("span")
// while(span.parentElement && span.parentElement.tagName!=="HTML"){
//     span=span.parentElement
//     console.log(span.tagName)
// }

// // exercice 2.4
// let body=document.getElementById("body")
// let div=document.getElementById("div")
// let section=document.createElement("section")
// body.replaceChild(section,div)
// // div.replaceWith(section)
// console.log(body.innerHTML)

// // exercice 2.5
// let body=document.getElementById("body")
// let div=document.createElement("div")
// body.appendChild(div)
// let ul=document.createElement("ul")
// div.appendChild(ul)
// for (let i=0;i<3;i++){
//     let li=document.createElement("li")
//     ul.appendChild(li)
// }

// // exercice 3.1
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// let liste=document.getElementById("liste")
// ul.firstElementChild.style.color="white"
// ul.firstElementChild.style.backgroundColor="black"
// ul.lastElementChild.style.color="white"
// ul.lastElementChild.style.backgroundColor="black"

// // exercice 3.2
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// let li=document.getElementById("li1")
// console.log(ul.firstElementChild.innerHTML+" "+ul.lastElementChild.innerHTML)

// // exercice 3.3
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// let li1=document.getElementById("list1")
// let next = li1.nextElementSibling
// li1.before(next) 
// let li2=document.getElementById("list2")
// let replace=li1.innerHTML
// li1.innerHTML=li2.innerHTML
// li2.innerHTML=replace

// // exercice 3.4
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// let pSelect=document.getElementById("deux")
// pSelect.nextElementSibling.remove()

// // exercice 3.5
// let body=document.getElementById("body")
// let p=document.getElementById("p")
// let pclone=p.cloneNode(false)
// body.appendChild(pclone)
// body.insertBefore(pclone,p.nextSibling)
// console.log(body.innerHTML)

// // exercice 4.1

// let body = document.getElementById("body")
// let tableau=[['Nom', 'Age'], ['Alice', 25], ['Bob', 30]]
// let table=document.createElement("table")
// body.appendChild(table) 
// table.style.borderColor="red"
// table.style.borderWidth="2px"
// table.style.borderStyle="solid"
// for (i=0;i<tableau.length;i++){
//     let tr=document.createElement("tr")
//     table.appendChild(tr)
//     tr.innerText=tableau[i][0]
//     for (let j=0;j<tableau.length;j){
//         let td=document.createElement("td")
//         tr.appendChild(td)
//         td.innerText=tableau[j][1]

//     }
// }
// console.log(body.innerHTML)

// // exercice 4.2
// let body=document.getElementById("body")
// let table=document.getElementById("table")
// for (let i=0;i<4;i++){
//     let td=document.createElement("td")
//     table.appendChild("td")
//     td.innerText="simple text"
// }
// console.log(table.innerHTML)

// // exercice 4.3
// let body=document.getElementById("body")
// let ul=document.getElementById("ul")
// let ulchild=ul.children
// let childTable=Array.from(ulchild)
// console.log(childTable)
// for (let i=0 ; i<childTable.length ; i++){
//     if (childTable[i].innerText==="B"){
//         childTable[i].style.fontWeight="bold"
//         console.log("element",+(i+1))
//     }
// }

// // exercice 4.4
// let body=document.getElementById("body")
// let table1=["Rouge", "Vert"]
// let table2=["Bleu", "Jaune"] 
// for (let i=0;i<table1.length;i++){
//     table2.push(table1[i])
// }
// let ul=document.createElement("ul")
// body.appendChild(ul)
// console.log(table2)
// for (let j=0;j<table2.length;j++){
//     let li=createElement("li")
//     ul.appendChild(li)
//     li.innerText==table2[j]
// }
// console.log(body.innerHTML)

// // exercice 4.5
// let body=document.getElementById("body")
// let tableObjet=[ {nom: "Alice",age: 25}, {nom: "Bob", age: 30}] 
// let ul=document.createElement("ul")
// body.appendChild(ul)
// for (let i=0;i<tableObjet.length;i++){
//     let li=document.createElement("li")
//     ul.appendChild(li)
//     li.innerText=tableObjet[i].nom+"("+tableObjet[i].age+"ans"+")"
// }
// console.log(ul.innerHTML)