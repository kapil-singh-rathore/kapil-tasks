const form= document.querySelector('#form');
const givenName= document.querySelector('.name');
const phy= document.querySelector('.phy');
const chem= document.querySelector('.chem');
const math= document.querySelector('.math');
const btn =document.querySelector('.btn');
const nameErr=document.querySelector('.nameErr');
const marksErr=document.querySelector('.marksErr');
const details=document.querySelector('.addHtml');
const delAll=document.querySelector('#delAll');
const index = 0;
let count =0;


btn.addEventListener('click',showResult);
function showResult(e){
    e.preventDefault();
marksErr.textContent="";
marksErr.textContent="";
nameErr.textContent="";

    let persentage;
    let status;
    let name=givenName.value;
    let phyNo=phy.value;
    let mathNo=math.value;
    let chemNo=chem.value;
    
    if(name===""){
        nameErr.textContent=" Name can not be empty";
    }
    else if(phyNo==="" || chemNo==="" || mathNo===""){
        marksErr.textContent=" Fill marks properly";
    }
    else if(phyNo<0 || phyNo>100 || chemNo<0 || chemNo>100 || mathNo<0 || mathNo>100  ){
        marksErr.textContent=" enter marks bw 1 to 100";
    }
    else{
        count++;
        persentage= (( parseFloat(phyNo) + parseFloat (chemNo) +  parseFloat (mathNo))/3).toFixed(2);
        if(persentage<=35){
            status='Fail';
        }
        else if(persentage>35  &&   persentage<=50){
            status='C';
        }
        else if( persentage>50 && persentage<=75){
            status='B';
        }
        else if(persentage>75 && persentage<=90){
            status='A';
        }
        else if(persentage>90){
            status='A+';
        }
        console.log(persentage);
        details.innerHTML+=
        `
        <tr id="del">
        <td>${count}</td>
        <td>${name}</td>
        <td>${phyNo}</td>
        <td>${mathNo}</td>
        <td>${chemNo}</td>
        <td>${persentage}</td>
        <td>${status}</td>
        <td><button id="delB">delete </button></td>
        </tr>
        `
        const del = document.querySelectorAll('#del'); 
        const delB = document.querySelectorAll('#delB'); 
        
        delB.forEach ( (el) =>{
            el.addEventListener('click', (e) => {
                del.forEach ( (el) =>{
                    el.addEventListener('click', (e) => {
                         el.remove();  
                    })
                })
            })
        })
    }
form.reset();


}
delAll.addEventListener('click' ,(e)=>{
    location.reload();
})


