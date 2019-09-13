    var _table_here = document.getElementById('table_here');
    var _btncreatetable = document.getElementById('btncreatetable');
    var table = document.createElement('table');
    table.border = "1px soldid black";
    _btncreatetable.addEventListener('click',function()
    {  
        let rows =document.getElementById('txtrow').value;
        let columns =document.getElementById('txtcol').value;      
        for(let i = 0; i<rows;i++){
            let row = document.createElement('tr');
            for(let j = 0; j<columns;j++){
                let td = document.createElement('td'); 
                td.innerText =j;
                row.appendChild(td);
            }
            table.appendChild(row);
        }
        _table_here.appendChild(table);
    })
    