{{export
	title="Typing Area"
	dahufi=" "
}}
Type using the names names by the Roots,

'ka' -> '' for example.

<div style="float:right; padding:10px">{{@md}}
* k -> 
* D -> 
* Ch ->  
* S -> 
* Y -> 
* H -> 
* F -> 
* W -> 
* M -> 
* J -> 
* B -> 
* N -> 
* Th -> 
* Fl -> 
* L -> 
* Ng -> 
* Bl -> 
* sh -> 
{{/md}}</div>
<br>
<textarea id="typing"></textarea>
<button onclick="convert()">Convert</button>
<div id="type_out"></div>

<!--<script src="/web_wasm/dahufi_lib.js" type="module"></script> !-->

<script type="module">

import {dahufize_str} from "/web_wasm/dahufi_lib.js";


window.convert = function(){
	let tx = document.getElementById("typing").value;
	let odiv = document.getElementById("type_out");
	tx = dahufize_str(tx.toLowerCase());
	odiv.innerText = tx;
}
</script>
