javascript:!function(){%22use%20strict%22;document.body.appendChild(document.createElement(%22script%22)).src=%22https://rawgit.com/tommoor/tinycon/master/tinycon.min.js%22,document.body.appendChild(document.createElement(%22script%22)).src=%22//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js%22;var%20t=document.querySelector(%22%23messages%22),e=0,c=new%20MutationObserver(function(t){var%20c=t[0].addedNodes[0].getElementsByTagName(%22p%22)[0].innerHTML;_.each(c.split(%22%20%22),function(t){(t.match(/butt/i)||t.match(/butts/i)||t.match(/butte/i))%26%26(console.log(t),e++,Tinycon.setBubble(e))})}),n={attributes:!0,childList:!0,characterData:!0};c.observe(t,n)}();