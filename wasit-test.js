// All inputs
let put = [document.querySelector(".addinput > input.in1"),
    document.querySelector(".addinput > #in2"),
    document.querySelector(".addinput > input.in3"),
    document.querySelector(".addinput > input.in4"),
    document.querySelector(".addinput > input.in5"),
    document.querySelector(".addinput > input.in6"),
    document.querySelector(".addinput > input.in7"),
    document.querySelector(".addinput > input.in8"),
    document.querySelector('.error')];
    //  links
    let links = [
        'https://wasitpay.co/RARqvgn',
        'https://wasitpay.co/screenbar-halo-monitor-light/p1465241498',
        'https://wasitpay.co/wWVvAyn',
        'https://wasitpay.co/pQVNAEZ',
        'https://wasitpay.co/PdbeDyO',
        'https://wasitpay.co/onAGZqQ',
        'https://wasitpay.co/bROgwwK',
        'https://wasitpay.co/WlEjzgN',
        'https://wasitpay.co/VqxNqWj',
        'https://wasitpay.co/gZWxZDv',
        'https://wasitpay.co/QdgXdgv',
        'https://wasitpay.co/AzWyzNG',
        'https://wasitpay.co/onAGnzr',
        'https://wasitpay.co/jZEeZAz',
        'https://wasitpay.co/vXVGXyA',
        'https://wasitpay.co/DGEKGGB',
        'https://wasitpay.co/QdgXqnV',
        'https://wasitpay.co/BrDNBQO',
        'https://wasitpay.co/vXVDegP'];   
    // conditionlink
    function conditionlink() {
        let B = localStorage.getItem("ba9");
        if (localStorage.getItem("ba9") == null) {
            console.log('no ba9');
        } else {
            switch (B) {
                case '100':
                    localStorage.setItem('linkalba9a', links[0]);
                    break;
                case '200':
                    localStorage.setItem('linkalba9a', links[1]);
                    break;
                case '300':
                    localStorage.setItem('linkalba9a', links[2]);
                    break;
                case '400':
                    localStorage.setItem('linkalba9a', links[3]);
                    break;
                case '500':
                    localStorage.setItem('linkalba9a', links[4]);
                    break;
                case '600':
                    localStorage.setItem('linkalba9a', links[5]);
                    break;
                case '700':
                    localStorage.setItem('linkalba9a', links[6]);
                    break;
                case '800':
                    localStorage.setItem('linkalba9a', links[7]);
                    break;
                case '900':
                    localStorage.setItem('linkalba9a', links[8]);
                    break;
                case '1200':
                    localStorage.setItem('linkalba9a', links[9]);
                    break;
                case '1500':
                    localStorage.setItem('linkalba9a', links[10]);
                    break;
                case '1800':
                    localStorage.setItem('linkalba9a', links[11]);
                    break;
                case '2000':
                    localStorage.setItem('linkalba9a', links[12]);
                    break;
                case '2100':
                    localStorage.setItem('linkalba9a', links[13]);
                    break;
                case '2400':
                    localStorage.setItem('linkalba9a', links[14]);
                    break;
                case '2500':
                    localStorage.setItem('linkalba9a', links[15]);
                    break;
                case '3000':
                    localStorage.setItem('linkalba9a', links[16]);
                    break;
                case '3500':
                    localStorage.setItem('linkalba9a', links[17]);
                    break;
                case '4000':
                    localStorage.setItem('linkalba9a', links[18]);
                    break;}}
    }
    function seveddata(){
        document.querySelector("div > div.wajiha").style = `animation: fadeout 0.8s ease-in both;display:none;`;
        document.querySelector("div.sendbox").style = `display: block;animation: fadeIn 1.3s ease-in both;`;
        document.querySelector("div.sendbox > div.bloking1 > div").style = `transform: scale(0);display: none;`;
        document.querySelector("div.sendbox > div.bloking2").style = `display: block;animation: fadeIn 1.3s ease-in both;`;
        document.querySelector(".myimg img").style = `animation: fadeout 0.6s ease-in both; display:none;`
        document.querySelector("div.sendbox > div.progriss > span:nth-child(1)").style = `background: #4434c7;`;
        document.querySelector("div.sendbox > div.progriss > span:nth-child(2)").style = `background: #4434c7;`;
        document.querySelector("div.sendbox > div.progriss > span:nth-child(3)").style = `background: #4434c7;`;
        }
    // seve data
 document.querySelector('.seve').onclick = function () {
        document.querySelector("div.sendbox > div.progriss > span:nth-child(3)").style = `background: #4434c7;`;
        if (put[0].value == '' || put[2].value == '' || put[3].value == '' || put[4].value == '' || put[5].value == '' || put[6].value == '') {
            put[8].innerHTML = '!! اكمل المعلومات المطلوبة ';
        } else {
            // seve data 
            localStorage.setItem("Name", put[0].value);
            localStorage.setItem("Country", put[1].value);
            localStorage.setItem("Region", put[2].value);
            localStorage.setItem("address", put[3].value);
            localStorage.setItem("tel", put[4].value);
            localStorage.setItem("account number", put[5].value);
            localStorage.setItem("Id", put[6].value);
            put[8].innerHTML = ' تم سيتم توجيهك لاكمال الطلب ';
            document.querySelector(".sendbox > div.bloking2 > div > button:nth-child(5) > img").style = `display:inline-block;`;
            //   localStorage.setItem('link',document.querySelector('.name').title);
            //   localStorage.setItem('Ba9a',document.querySelector('.name').innerHTML);
            function tim() {
                put[8].innerHTML = '';
                conditionlink();
                document.querySelector('.addinput').style = `display: none;`;
                document.querySelector('.seve').style = `display: none;`;
                document.querySelector('.sendid').style = `display: block;`;
                document.querySelector(".sendbox > div.bloking2 > div > div > a").style = `display: block;`;
                document.querySelector(".sendbox > div.bloking2 > div > div > a").href = localStorage.getItem('linkalba9a');    
            } setTimeout(tim, 1000);
    
            function timings() {
                document.querySelector(".sendbox > div.bloking2 > div > button:nth-child(5) > img").style = `display:none;`;
                       const requestData = {
                url: localStorage.getItem("linkalba9a"),
                name: localStorage.getItem("Name"),
                phone: parseInt(localStorage.getItem("tel"))
            };

            // Replace window.open with API call
            fetch('https://wasit-bot.duckdns.org/create-order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle the response data as needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
                setTimeout(function() {
    document.getElementById('openlink').style.display = 'none';
     document.querySelector("button.seve.sd").style = `display: block;`;
    console.log("on button click")
}, 1000); // 5000 milliseconds = 5 seconds
            }
            setTimeout(timings, 2000);
    }}
    
    // if on data 
    if (localStorage.getItem("Name") == null) {
        console.log(' NO Data ');
    } else {
        console.log(' Data visited ');
        put[0].value = localStorage.getItem("Name");
        put[1].value = localStorage.getItem("Country");
        put[2].value = localStorage.getItem("Region");
        put[3].value = localStorage.getItem("address");
        put[4].value = localStorage.getItem("tel");
        put[5].value = localStorage.getItem("account number");
        put[6].value = localStorage.getItem("Id");
        document.querySelector('.addinput').style = `display: none;`;
        document.querySelector('.seve').style = `display: none;`;
        document.querySelector('.sendid').style = `display: block;`;
        document.querySelector(".sendbox > div.bloking2 > div > div > a").style = `display: block;`;
        // document.querySelector(".contener > div > span").style = `display: none;`;
        document.querySelector("div.sendbox > div.progriss > span:nth-child(3)").style = `background: #4434c7;`;
        seveddata();
        document.querySelector("div.sendid > p").innerHTML = " اكمل طلب " + localStorage.getItem("ba9");
        document.querySelector("button.seve.sd").style = `display: block;`;
            // Function to hide the element after a specified time (e.g., 5 seconds)


    }
    // cheked and send
    
    document.querySelector("button.seve.sd").onclick = function () {
        if (document.querySelector(".sendid > input.in8").value == '') {
            document.querySelector('.resalt').innerHTML = ' لم تضع رقم الطلب لاكمال العملية ';
        }
        if (document.querySelector(".sendid > input.in8").value.length != 10) {
            document.querySelector('.resalt').innerHTML = ' رقم الطلب يجب ان يكون 10 ارقام ';
        } else {
            document.querySelector('.resalt').innerHTML = ' شكرا سيتم مراجعة الطلب  ';
            document.querySelector("div.sendid > input.send").click();
            localStorage.clear();
            localStorage.setItem("client", document.querySelector(".sendid > input.in8").value);
            function timlod() {
                window.open('https://wasit.co/');
            }
            setTimeout(timlod, 3000);
        }
    }
 window.addEventListener('beforeunload', function (event) {
            localStorage.clear();
        });

document.getElementById('openlink').style.display = 'none';
