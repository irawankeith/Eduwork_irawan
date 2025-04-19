
document.getElementById('conBtn').addEventListener('click',function()

{

    const inputJar=document.getElementById('myTextBox').value;
    const inputUnitawal=document.getElementById('pilihan1').value;
    const inputUnitdua=document.getElementById('pilihan2').value;
    const outputData=document.getElementById('outputAkhir');

    if(inputJar==='')
    {
        alert("Masukkan angka geng jangan yang lain!!!");
        return;

    }

    const jar=parseFloat(inputJar);
    let conjar={};

    if((inputUnitawal === 'mile') && (inputUnitdua === 'kilo'))
        {
            conjar = jar*1.609344;
            outputData.innerHTML='Hasil = ' +conjar;
        }
    else if((inputUnitawal === 'kilo') && (inputUnitdua === 'mile'))
            {
                conjar = jar/1.609344;
                outputData.innerHTML='Hasil = ' +conjar;
            }
    else if(inputUnitawal === inputUnitdua)
            {
                    conjar = jar*1;
                    outputData.innerHTML='Hasil = ' +conjar;
            }

    }

)
